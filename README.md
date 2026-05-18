<div align="center">

![Banner](assets/banner.png)

<br>

<h1>
  <img src="icons/icon128.png" alt="Read Anchor" width="64" valign="middle">
  &nbsp;Read Anchor
</h1>

**Instantly search the meaning of any word or phrase on the web — without leaving your tab.**

<p>
  <a href="#"><img src="https://img.shields.io/badge/JavaScript-ES6+-f7df1e.svg?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript ES6+"></a>
  <a href="#"><img src="https://img.shields.io/badge/Manifest-V3-blue.svg?style=flat-square&logo=googlechrome&logoColor=white" alt="Manifest V3"></a>
  <a href="#"><img src="https://img.shields.io/badge/platform-Chromium-blue.svg?style=flat-square&logo=google-chrome&logoColor=white" alt="Chromium"></a>
  <a href="#"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="License: MIT"></a>
  <a href="#"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"></a>
</p>

<br>

<img src="assets/Selection.png" alt="Text selection with Search button" width="420">

<br><br>

</div>

---

## What is Read Anchor?

**Read Anchor** is a lightweight, privacy-first browser extension for Chromium-based browsers (Chrome, Brave, Edge). It eliminates the friction of looking up word meanings while you read. Highlight any text on any webpage, click the floating **Search** button, and a clean popup window opens right at your cursor with Google Search results. Click back to your page and the popup vanishes automatically.

No tab switching. No copy-pasting. No breaking your flow.

---

## Features

| Feature | Description |
|---------|-------------|
| 🔍 **One-Click Lookups** | Highlight text, click Search, get results. No tab switching required. |
| 🪟 **Clean Popup Windows** | Uses `chrome.windows` API for minimal, address-bar-free popups. |
| ✨ **Auto-Dismiss** | Popup closes automatically the moment it loses focus. |
| 🌐 **Works Everywhere** | Runs on any website via `<all_urls>` content script injection. |
| 🖥️ **Multi-Monitor Aware** | Popup spawns on the correct monitor using global screen coordinates. |
| 🚫 **Editable-Field Exclusion** | Ignores selections inside inputs, textareas, and `contenteditable` elements. |
| 🪶 **Lightweight** | Zero external dependencies. Single content script, single service worker, scoped CSS. |
| 🔒 **Privacy-First** | No data collection, no analytics, no remote servers. |

---

## Screenshots

<div align="center">

<table>
  <tr>
    <td align="center">
      <b>Select any word</b><br><br>
      <img src="assets/Selection.png" alt="Text selection with Search button" width="360">
    </td>
    <td align="center">
      <b>Search instantly</b><br><br>
      <img src="assets/Popup_search.png" alt="Popup opens with Google Search results" width="360">
    </td>
  </tr>
</table>

<br>

</div>

---

## Quick Start

### Installation

1. **Download or clone** this repository.
2. Open your browser and navigate to the Extensions page:
   - Chrome: `chrome://extensions/`
   - Brave: `brave://extensions/`
   - Edge: `edge://extensions/`
3. Toggle **Developer mode** to ON (top-right corner).
4. Click **Load unpacked** and select the Read Anchor folder.
5. Highlight any text on any page and click **Search**.

> 📖 See the full [Installation Guide](INSTALLATION_GUIDE.md) for OS-specific extraction steps, browser-specific guidance, pinning, updating, and troubleshooting.

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

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Extension Standard** | Manifest V3 |
| **Language** | Vanilla JavaScript (ES6+) |
| **Window Management** | `chrome.windows` API |
| **Styling** | Scoped CSS (`#lexical-search-btn`) |
| **Dependencies** | None |

---

## Browser Support

Read Anchor works on any Chromium-based browser with Manifest V3 support:

| Browser | Extensions Page | Notes |
|---------|----------------|-------|
| **Google Chrome** | `chrome://extensions/` | Primary target |
| **Brave** | `brave://extensions/` | Fully compatible; Shields does not block extension popups |
| **Microsoft Edge** | `edge://extensions/` | Fully compatible |

---

## File Structure

```
ReadAnchor/
├── assets/
│   ├── banner.png
│   ├── Selection.png
│   └── Popup_search.png
│
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
│
├── manifest.json
├── background.js
├── content.js
├── styles.css
│
├── README.md
├── INSTALLATION_GUIDE.md
└── PRIVACY_POLICY.md
```

---

## Permissions

| Permission | Why it's needed |
|------------|-----------------|
| `scripting` | Injects the content script that detects text selection and renders the floating button. |
| `activeTab` | Allows the extension to interact with the current tab when the user initiates a search. |

No browsing history, cookies, or personal data is accessed.

---

## Privacy

See the **[Privacy Policy](PRIVACY_POLICY.md)** for details on how Read Anchor handles user data.

In short: Read Anchor does not collect, store, or transmit any personal data.

---

## License

MIT — see the repository for full license text.

---

<div align="center">

<br>

**Built for readers, by a reader.**

<br>

</div>
