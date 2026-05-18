# Read Anchor

<!--
  BANNER IMAGE
  Dimensions: 1280 x 420 px (or any 3:1 ratio)
  Content: A clean, wide banner showing the extension name "Read Anchor" in a
  modern sans-serif font on a soft blue gradient background. Optionally include
  a small magnifying glass icon or a subtle screenshot of the popup on the right.
  Place the final image in the repo (e.g., media/banner.png) and update the path below.
-->
<!-- ![Read Anchor Banner](media/banner.png) -->

> Instantly search the meaning of any word or phrase on the web — without leaving your tab.

**Read Anchor** is a lightweight, privacy-first browser extension for Chromium-based browsers. Highlight any text on any webpage, click the floating **Search** button, and a clean popup window opens right at your cursor with Google Search results. Click back to your page and the popup vanishes automatically.

---

## Abstract

Modern reading happens inside the browser. Whether you're researching a paper, learning a new language, or just curious about a word in an article, the friction of copying text, opening a new tab, typing a search query, and finding your way back breaks focus and flow.

Read Anchor eliminates that friction entirely. It lives entirely in your browser, uses zero external dependencies, and sends no data to any third-party server. Your selected text is only used to construct a Google Search URL that opens in a minimal, chromeless popup window. The popup auto-dismisses the moment you click back to the main page, keeping your workspace clean.

Built on **Manifest V3** with vanilla JavaScript, Read Anchor is designed to be fast, unobtrusive, and transparent.

---

## Installation

For detailed, step-by-step installation instructions, see the **[Installation Guide](INSTALLATION_GUIDE.md)**.

In short:
1. Download or clone this repository.
2. Open your browser's Extensions page (`chrome://extensions/`, `brave://extensions/`, or `edge://extensions/`).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the Read Anchor folder.
5. Highlight any text on any page and click **Search**.

---

## How It Works

```
User selects text
       ↓
Content script detects selection (mouseup)
       ↓
Floating "Search" button injected near selection
       ↓
User clicks button
       ↓
Message sent to background service worker
       ↓
Background opens chrome.windows popup:
  https://www.google.com/search?q=[selected_text]+meaning
       ↓
User clicks back to main window
       ↓
Popup auto-closes (onFocusChanged listener)
```

---

## Screenshots

<!--
  SCREENSHOT 1 — The Selection + Button
  Dimensions: 1280 x 800 px (Chrome Web Store standard) or 800 x 600 px
  How to capture:
    1. Go to a clean, well-lit webpage (Wikipedia article or news article).
    2. Highlight a single word (e.g., "philosophy").
    3. Wait for the blue "Search" button to appear.
    4. Use Chrome DevTools → Ctrl+Shift+P → "Capture screenshot" for a clean, UI-free shot.
    5. Alternatively, use the Snipping Tool / Snip & Sketch with a clean browser window.
  Place the final image in the repo (e.g., media/screenshot-1.png) and update the path below.
-->
<!-- ![Highlight text and the Search button appears](media/screenshot-1.png) -->

<!--
  SCREENSHOT 2 — The Popup in Action
  Dimensions: 1280 x 800 px
  How to capture:
    1. With the same word highlighted, click the blue "Search" button.
    2. The popup will open showing Google Search results for "[word] meaning".
    3. Capture the main browser window + the popup window side-by-side or overlapping.
    4. Make sure the popup clearly shows Google results (definition card is ideal).
-->
<!-- ![Popup opens with Google Search results](media/screenshot-2.png) -->

<!--
  SCREENSHOT 3 — Clean Auto-Dismiss (Optional but recommended)
  Dimensions: 1280 x 800 px
  How to capture:
    1. Show the main page again after clicking back from the popup.
    2. This demonstrates that the popup is gone and the user is back to reading.
    3. A before/after composite image works well here.
-->
<!-- ![Click back to the page and the popup vanishes](media/screenshot-3.png) -->

<!--
  GIF / DEMO (Highly recommended for GitHub)
  Dimensions: 800 x 600 px, 5–10 seconds, 15–30 fps
  How to capture:
    1. Use ScreenToGif (Windows), LICEcap (cross-platform), or OBS Studio.
    2. Record the full workflow: highlight word → button appears → click → popup opens → click back → popup closes.
    3. Keep the recording under 10 MB for fast loading on GitHub.
  Place the final GIF in the repo (e.g., media/demo.gif) and update the path below.
-->
<!-- ![Read Anchor demo](media/demo.gif) -->

---

## File Structure

```
ReadAnchor/
├── manifest.json          # MV3 config, permissions, script registration
├── background.js          # Service worker — window creation & lifecycle
├── content.js             # Content script — selection detection & UI injection
├── styles.css             # Scoped floating button styles
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── README.md              # This file
├── INSTALLATION_GUIDE.md  # Detailed local installation steps
└── PRIVACY_POLICY.md      # Privacy policy
```

---

## Permissions

| Permission | Why it's needed |
|------------|-----------------|
| `scripting` | Injects the content script that detects text selection and renders the floating button. |
| `activeTab` | Allows the extension to interact with the current tab when the user initiates a search. |

No browsing history, cookies, or personal data is accessed.

---

## Tech Stack

- **Manifest V3** — Modern Chrome extension standard
- **Vanilla JavaScript** — No frameworks, no bundlers, no dependencies
- **`chrome.windows` API** — Native popup window management
- **Scoped CSS** — All styles isolated to `#lexical-search-btn`

---

## Browser Support

Read Anchor works on any Chromium-based browser with Manifest V3 support:

| Browser | Extensions Page | Notes |
|---------|----------------|-------|
| **Google Chrome** | `chrome://extensions/` | Primary target |
| **Brave** | `brave://extensions/` | Fully compatible; Shields does not block extension popups |
| **Microsoft Edge** | `edge://extensions/` | Fully compatible |

---

## Privacy

See the **[Privacy Policy](PRIVACY_POLICY.md)** for details on how Read Anchor handles user data.

In short: Read Anchor does not collect, store, or transmit any personal data.

---

## Visual Assets Checklist

If you want to make this README (and a potential store listing) look polished, create these assets:

| Asset | Dimensions | Purpose |
|-------|-----------|---------|
| **Banner** | 1280 x 420 px | README header image. Clean typography on a soft blue gradient. |
| **Screenshot 1** | 1280 x 800 px | Show text highlighted with the blue "Search" button visible. |
| **Screenshot 2** | 1280 x 800 px | Show the popup window open with Google Search results. |
| **Screenshot 3** | 1280 x 800 px | Show the clean page after the popup auto-dismisses. |
| **Demo GIF** | 800 x 600 px | 5–10 second looping GIF of the full workflow. Highly engaging for GitHub. |

**Where to place them:**
Create a `media/` folder in the repo root and store all images there. Then uncomment the image lines in this README and update the paths.

**Pro tip for screenshots:**
Use a clean browser profile with no bookmarks bar and minimal extensions visible. Wikipedia, Medium, or a plain news article make great backdrops. Avoid dark-mode pages unless your button styling is optimized for them.

---

## License

MIT
