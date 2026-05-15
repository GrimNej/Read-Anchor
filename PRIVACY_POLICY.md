# Privacy Policy — Read Anchor

**Last updated:** May 14, 2026

## What Read Anchor Does

Read Anchor allows you to highlight text on a webpage and open a Google Search popup to look up its meaning. It is a client-side browser extension — all functionality runs locally in your browser.

## Data Collection

**Read Anchor does not collect, store, or transmit any personal data.**

- Selected text is used **only** to construct a Google Search URL.
- No data is sent to any server, database, or third-party service operated by the extension developer.
- The only external request is made by your browser itself when it opens `https://www.google.com/search?q=...`, which is subject to [Google's privacy policy](https://policies.google.com/privacy).

## Permissions

- **`scripting`** — Injects the content script that detects text selection and renders the floating button.
- **`activeTab`** — Allows the extension to interact with the current tab when you initiate a search.

Neither permission grants access to your browsing history, cookies, or personal information.

## Contact

For questions, open an issue in the project repository.
