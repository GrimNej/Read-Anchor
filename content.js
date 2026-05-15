/**
 * Read Anchor — Content Script
 * Detects text selection, injects a floating search button,
 * and communicates with the background service worker.
 */

(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // Configuration
  // ---------------------------------------------------------------------------
  const BUTTON_ID = "lexical-search-btn";

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  let activeButton = null;
  let lastMouseEvent = null;

  // ---------------------------------------------------------------------------
  // Event Listeners
  // ---------------------------------------------------------------------------

  /**
   * Track mouse coordinates on every mouseup so we know where to place
   * the popup window in global screen space (critical for multi-monitor).
   */
  document.addEventListener("mouseup", (e) => {
    // Ignore mouseup on the button itself so we don't re-inject it
    // before the click handler has a chance to fire and remove it.
    if (activeButton && (e.target === activeButton || activeButton.contains(e.target))) {
      return;
    }
    lastMouseEvent = e;
    handleSelectionChange();
  });

  /**
   * Remove the button if the user clicks elsewhere on the page.
   */
  document.addEventListener("mousedown", (e) => {
    if (activeButton && e.target !== activeButton) {
      removeButton();
    }
  });

  /**
   * Remove the button on scroll or resize to avoid UI drifting.
   */
  window.addEventListener("scroll", removeButton, { passive: true });
  window.addEventListener("resize", removeButton, { passive: true });

  // ---------------------------------------------------------------------------
  // Selection Handling
  // ---------------------------------------------------------------------------

  function handleSelectionChange() {
    const selection = window.getSelection();
    const text = selection ? selection.toString().trim() : "";

    // No valid selection — clean up and bail.
    if (!text || isInvalidSelection(selection)) {
      removeButton();
      return;
    }

    // Exclude editable fields.
    if (isInsideEditableField(selection)) {
      removeButton();
      return;
    }

    // Ignore selections that are only whitespace or special characters.
    if (/^[\s\W_]+$/.test(text)) {
      removeButton();
      return;
    }

    // Inject or reposition the search button.
    injectButton(text);
  }

  /**
   * Checks whether the current selection is effectively empty or collapsed.
   */
  function isInvalidSelection(selection) {
    if (!selection || selection.rangeCount === 0) return true;
    const range = selection.getRangeAt(0);
    return range.collapsed;
  }

  /**
   * Determines if the selection anchor node lives inside an editable element
   * (input, textarea, or contenteditable="true").
   */
  function isInsideEditableField(selection) {
    if (!selection || selection.rangeCount === 0) return false;
    let node = selection.getRangeAt(0).commonAncestorContainer;
    if (node.nodeType === Node.TEXT_NODE) {
      node = node.parentElement;
    }
    if (!(node instanceof Element)) return false;

    const editableTags = new Set(["INPUT", "TEXTAREA"]);
    let el = node;
    while (el) {
      if (editableTags.has(el.tagName)) return true;
      if (el.getAttribute?.("contenteditable") === "true") return true;
      el = el.parentElement;
    }
    return false;
  }

  // ---------------------------------------------------------------------------
  // Button Injection
  // ---------------------------------------------------------------------------

  /**
   * Creates (or updates) the floating search button next to the current
   * text selection. Uses getBoundingClientRect for precise positioning.
   *
   * Coordinate math:
   *   1. Get the bounding box of the selection range in viewport coordinates.
   *   2. Position the button slightly below and to the right of the selection.
   *   3. Use fixed positioning so it stays put during minor scroll events
   *      (though we remove it on significant scroll anyway).
   *
   * @param {string} selectedText The text to be searched.
   */
  function injectButton(selectedText) {
    removeButton();

    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    const btn = document.createElement("button");
    btn.id = BUTTON_ID;
    btn.textContent = "Search";
    btn.type = "button"; // Prevent form submission if inside a form.

    // Position: just below the selection, aligned to its right edge.
    // Using viewport coordinates because the CSS positions the button
    // with `position: fixed`, which is always relative to the viewport.
    const offset = 8;
    const top = rect.bottom + offset;
    const left = rect.right + offset;

    btn.style.top = `${top}px`;
    btn.style.left = `${left}px`;

    // On click, message the background worker with the selected text and
    // the global screen coordinates from the last mouseup event so the popup
    // spawns on the correct monitor at the correct spot.
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();

      const screenX = lastMouseEvent ? lastMouseEvent.screenX : window.screenX + left;
      const screenY = lastMouseEvent ? lastMouseEvent.screenY : window.screenY + top;

      chrome.runtime.sendMessage({
        action: "openMeaningWindow",
        selectedText: selectedText,
        screenX: Math.round(screenX),
        screenY: Math.round(screenY),
      });

      removeButton();
    });

    document.body.appendChild(btn);
    activeButton = btn;
  }

  /**
   * Removes the injected button from the DOM and resets the reference.
   */
  function removeButton() {
    if (activeButton) {
      activeButton.remove();
      activeButton = null;
    }
  }
})();
