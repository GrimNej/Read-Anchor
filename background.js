/**
 * Read Anchor — Background Service Worker
 * Handles popup window creation, lifecycle, and focus management.
 */

/** @type {number|null} ID of the currently open meaning popup */
let currentPopupId = null;

/**
 * Listen for messages from the content script.
 * Expected payload: { selectedText: string, screenX: number, screenY: number }
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openMeaningWindow") {
    openMeaningWindow(request.selectedText, request.screenX, request.screenY)
      .then((window) => {
        sendResponse({ success: true, windowId: window.id });
      })
      .catch((err) => {
        console.error("[Read Anchor] Failed to open meaning window:", err);
        sendResponse({ success: false, error: err.message });
      });
    // Return true to indicate we will call sendResponse asynchronously.
    return true;
  }
});

/**
 * Opens (or replaces) the meaning popup window.
 *
 * Coordinate math note:
 * We use screenX and screenY directly from the mouse event captured in the
 * content script. These values are in global screen coordinates, so the popup
 * will spawn on the correct monitor in multi-monitor setups.
 *
 * @param {string} text   The selected text to search.
 * @param {number} left   Screen X coordinate for the popup origin.
 * @param {number} top    Screen Y coordinate for the popup origin.
 * @returns {Promise<chrome.windows.Window>}
 */
async function openMeaningWindow(text, left, top) {
  // 1. Redundancy check — close any existing popup before spawning a new one.
  if (currentPopupId !== null) {
    try {
      await chrome.windows.remove(currentPopupId);
    } catch (_e) {
      // Window may already be closed; ignore errors.
    }
    currentPopupId = null;
  }

  // 2. Build the Google Search URL.
  const query = encodeURIComponent(text.trim() + " meaning");
  const url = `https://www.google.com/search?q=${query}`;

  // 3. Create the popup window.
  const popupWindow = await chrome.windows.create({
    url: url,
    type: "popup",
    width: 450,
    height: 600,
    left: Math.round(left),
    top: Math.round(top),
    focused: true,
  });

  currentPopupId = popupWindow.id ?? null;
  return popupWindow;
}

/**
 * Auto-dismiss the popup when it loses focus.
 *
 * chrome.windows.onFocusChanged fires with:
 *   - The new focused window ID, or
 *   - chrome.windows.WINDOW_ID_NONE (-1) when all Chrome windows lose focus.
 *
 * If the focus moves to any window other than our popup, we remove the popup.
 */
chrome.windows.onFocusChanged.addListener((windowId) => {
  if (currentPopupId === null) return;

  // WINDOW_ID_NONE (-1) means focus left Chrome entirely — dismiss popup.
  if (windowId === chrome.windows.WINDOW_ID_NONE || windowId !== currentPopupId) {
    const idToRemove = currentPopupId;
    currentPopupId = null;
    chrome.windows.remove(idToRemove).catch(() => {
      // Already closed; no-op.
    });
  }
});

/**
 * Clean up our internal reference if the popup is closed manually
 * or via another path (e.g. window.close()).
 */
chrome.windows.onRemoved.addListener((windowId) => {
  if (currentPopupId === windowId) {
    currentPopupId = null;
  }
});
