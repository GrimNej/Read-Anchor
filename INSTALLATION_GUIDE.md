# Installation Guide — Read Anchor

This guide covers every step required to install Read Anchor from the source code. No Chrome Web Store account is required.

**Estimated time:** 3–5 minutes  
**Skill level:** Beginner

---

## Table of Contents

1. [Get the Extension Files](#step-1-get-the-extension-files)
2. [Open the Extensions Page](#step-2-open-the-extensions-page)
3. [Enable Developer Mode](#step-3-enable-developer-mode)
4. [Load the Extension](#step-4-load-the-extension)
5. [Verify It Works](#step-5-verify-it-works)
6. [Pin the Extension (Optional)](#step-6-pin-the-extension-optional)
7. [Updating Read Anchor](#updating-read-anchor)
8. [Troubleshooting](#troubleshooting)
9. [Uninstalling](#uninstalling)

---

## Step 1: Get the Extension Files

You have three options. Choose whichever is easiest for you.

### Option A: Download ZIP (Easiest — No Git Required)

This is the best option if you are not familiar with Git.

1. **Open your web browser** and navigate to the Read Anchor GitHub repository:
   ```
   https://github.com/YOUR_USERNAME/ReadAnchor
   ```
   (Replace `YOUR_USERNAME` with the actual repository owner’s username.)

2. **Click the green `<> Code` button** near the top-right of the repository page, just above the file list.

3. **Click `Download ZIP`** from the dropdown menu.

4. **Save the ZIP file** to your computer. By default, it will go to your Downloads folder and be named `ReadAnchor-master.zip` or `ReadAnchor-main.zip`.

5. **Extract the ZIP file.**

   **On Windows:**
   - Open File Explorer and navigate to your Downloads folder.
   - Right-click the ZIP file → click **"Extract All..."**.
   - A dialog will appear asking where to extract the files. Choose a location you will remember, such as:
     ```
     C:\Users\YourName\ReadAnchor
     ```
   - Click **Extract**.
   - You will now have a folder named `ReadAnchor-master` (or `ReadAnchor-main`). **You may rename this folder to `ReadAnchor` for simplicity.**

   **On macOS:**
   - Open Finder and navigate to your Downloads folder.
   - Double-click the ZIP file. macOS will automatically extract it into a folder named `ReadAnchor-master` (or `ReadAnchor-main`) in the same location.
   - You may rename this folder to `ReadAnchor` for simplicity.

   **On Linux:**
   - Open your file manager and navigate to your Downloads folder.
   - Right-click the ZIP file → **"Extract Here"** or **"Extract to..."**.
   - Alternatively, open a terminal and run:
     ```bash
     cd ~/Downloads
     unzip ReadAnchor-master.zip -d ~/ReadAnchor
     ```

6. **Remember the full path to the extracted folder.** Inside that folder, you should see files including:
   - `manifest.json`
   - `background.js`
   - `content.js`
   - `styles.css`
   - an `icons/` folder

   > **Important:** When you load the extension in Step 4, you must select the folder that **directly contains `manifest.json`**, not a parent folder and not a subfolder.

---

### Option B: Clone with Git

Use this option if you want to receive updates easily or plan to modify the code.

1. **Ensure Git is installed** on your computer.
   - Open a terminal (Command Prompt, PowerShell, Terminal, or Git Bash).
   - Run:
     ```bash
     git --version
     ```
   - If you see a version number (e.g., `git version 2.43.0`), Git is installed. If not, download it from [git-scm.com](https://git-scm.com/).

2. **Open a terminal** and navigate to the folder where you want to store the project:
   ```bash
   cd C:\Users\YourName\Documents
   ```
   (Replace the path with your preferred location.)

3. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ReadAnchor.git
   ```
   (Replace `YOUR_USERNAME` with the actual repository owner’s username.)

4. **Navigate into the cloned folder:**
   ```bash
   cd ReadAnchor
   ```

5. **Verify the files are present:**
   - You should see `manifest.json`, `background.js`, `content.js`, `styles.css`, and an `icons/` folder.

---

### Option C: Fork and Clone (For Contributors)

If you plan to modify the code and submit changes back to the original repository:

1. **Go to the GitHub repository** in your browser.
2. **Click the `Fork` button** in the top-right corner of the page. This creates a copy of the repository under your own GitHub account.
3. **Clone your fork** using the same `git clone` command from Option B, but use your own username:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ReadAnchor.git
   ```

---

## Step 2: Open the Extensions Page

1. **Open your Chromium-based browser** (Chrome, Brave, or Edge).

2. **Click the address bar** at the top of the browser window and type one of the following URLs, depending on your browser:

   | Browser | URL to type |
   |---------|-------------|
   | **Google Chrome** | `chrome://extensions/` |
   | **Brave** | `brave://extensions/` |
   | **Microsoft Edge** | `edge://extensions/` |

3. **Press Enter.**

   You will be taken to the Extensions management page. It looks like a grid or list of all the extensions currently installed in your browser.

---

## Step 3: Enable Developer Mode

1. **Look at the top-right corner** of the Extensions page.

2. **Find the "Developer mode" toggle switch.** It is usually located to the right of the "Extensions" heading, near the top of the page.

3. **Click the toggle to turn it ON.** The switch will slide to the right and may change color (usually blue or purple).

4. **Confirm that three new buttons appear** near the top-left of the page:
   - **Load unpacked**
   - **Pack extension**
   - **Update**

   If you see these three buttons, Developer mode is successfully enabled.

---

## Step 4: Load the Extension

1. **Click the `Load unpacked` button.** It is the first of the three buttons that appeared when you enabled Developer mode.

2. **A file picker dialog will open.**

   **On Windows:**
   - Navigate to the folder where you extracted or cloned Read Anchor.
   - **Click once on the folder** to select it (do not double-click to open it).
   - Ensure the folder you select is the one that **directly contains `manifest.json`**.
   - Click the **"Select Folder"** button.

   **On macOS:**
   - Navigate to the folder where you extracted or cloned Read Anchor.
   - **Click once on the folder** to select it.
   - Click the **"Open"** button.

   **On Linux:**
   - Navigate to the folder where you extracted or cloned Read Anchor.
   - **Select the folder** containing `manifest.json`.
   - Click **"Open"** or **"Select"**.

3. **Read Anchor will now appear** as a new card in your Extensions list.
   - You will see the extension name "Read Anchor".
   - You will see the extension icon (a blue square).
   - You will see a toggle switch indicating the extension is enabled.
   - There may be a button labeled **"Errors"** if the extension has any issues. If you see this, click it to diagnose.

   > **If you see an error card or a red warning icon,** see the [Troubleshooting](#troubleshooting) section below.

---

## Step 5: Verify It Works

Now that Read Anchor is loaded, test it on a real webpage.

1. **Open a new browser tab** and go to any website with text. A good test page is Wikipedia:
   ```
   https://en.wikipedia.org/wiki/Main_Page
   ```

2. **Select (highlight) any word** on the page:
   - **Method 1 — Click and drag:** Click at the beginning of a word, hold the left mouse button, drag to the end of the word, then release.
   - **Method 2 — Double-click:** Double-click directly on a word to select it instantly.
   - **Method 3 — Triple-click:** Triple-click on a paragraph to select the entire paragraph.

3. **Look near your selection.** A small blue button with the text **"Search"** should appear, typically just below and to the right of the highlighted text.

   - The button has a white text label.
   - It has a subtle shadow.
   - It fades in smoothly.

4. **Click the blue "Search" button.**

5. **A new popup window should open** near your cursor.
   - The popup is approximately 450 pixels wide and 600 pixels tall.
   - It has **no address bar** and no bookmarks bar.
   - It loads a Google Search page with your selected text followed by the word "meaning".
   - Example: if you selected "encyclopedia", the popup loads `https://www.google.com/search?q=encyclopedia+meaning`.

6. **Click back on the main Wikipedia tab or window.**

7. **The popup should close automatically.** This is the intended behavior — Read Anchor dismisses the popup as soon as it loses focus.

**If all of the above steps worked, Read Anchor is successfully installed and functional.**

---

## Step 6: Pin the Extension (Optional)

By default, newly installed extensions are hidden behind the extensions puzzle-piece menu. Pinning places the icon directly in your toolbar for easy access.

1. **Look at the top-right corner** of your browser, next to the address bar.

2. **Click the extensions puzzle-piece icon** (it looks like a jigsaw puzzle piece).

3. **Find "Read Anchor"** in the dropdown list.

4. **Click the pin icon** (it looks like a pushpin or thumbtack) next to "Read Anchor".

5. **The Read Anchor icon** (blue square) will now appear permanently in your browser toolbar.

   > **Note:** You do not need to click the toolbar icon to use Read Anchor. The extension works automatically when you highlight text. The toolbar icon simply indicates that the extension is active.

---

## Updating Read Anchor

When a new version of Read Anchor is released (or when you pull the latest code), you do not need to remove and reinstall the extension. You can update it in place.

### If you downloaded the ZIP:

1. Re-download the latest ZIP from GitHub.
2. Extract it to the **same folder**, overwriting the old files.
3. Go to `chrome://extensions/` (or `brave://extensions/`, or `edge://extensions/`).
4. Find the Read Anchor card in the list.
5. **Click the circular refresh arrow icon** on the Read Anchor card.
6. The extension will reload with the new code.

### If you cloned with Git:

1. Open a terminal in the Read Anchor folder.
2. Run:
   ```bash
   git pull origin main
   ```
   (If the default branch is named `master`, use `git pull origin master` instead.)
3. Go to `chrome://extensions/` (or `brave://extensions/`, or `edge://extensions/`).
4. Find the Read Anchor card.
5. **Click the circular refresh arrow icon** to reload the extension.

---

## Troubleshooting

| Problem | Likely Cause | Solution |
|---------|-------------|----------|
| **The "Search" button does not appear when I highlight text.** | The selection may be empty, or you may have selected an image or non-text element. | Try **double-clicking** a single word to ensure a clean text selection. Make sure you are not inside an input field, textarea, or editable area. |
| **The button appears, but clicking it does nothing.** | The background service worker may have crashed, or there may be a permission issue. | Go to `chrome://extensions/`, find Read Anchor, and click the **Errors** button. Read the error message. If none appear, try toggling the extension off and on, or click the **refresh arrow** to reload it. |
| **Read Anchor does not appear in the Extensions list at all.** | You may have selected the wrong folder during "Load unpacked". | Click **Load unpacked** again and ensure you select the folder that **directly contains `manifest.json`**, not a parent folder or a subfolder like `icons/`. |
| **The "Load unpacked" button is missing.** | Developer mode is not enabled. | Go to `chrome://extensions/` and toggle **Developer mode** to ON in the top-right corner. |
| **The popup opens but is blank or shows an error.** | Google may be blocked by your network, or Brave Shields may be interfering. | Check that you can access `google.com` normally in a regular tab. If using Brave, temporarily disable Shields on the page to test. |
| **The popup does not auto-close when I click back.** | The browser window may not have properly reported the focus change. | Click directly on the main browser window's title bar or tab bar. If it still does not close, close the popup manually using the X button. |

---

## Uninstalling

If you wish to remove Read Anchor from your browser:

1. Go to `chrome://extensions/` (or `brave://extensions/`, or `edge://extensions/`).
2. Find the **Read Anchor** card in the list.
3. Click the **Remove** button on the card.
4. A confirmation dialog will appear. Click **Remove** again to confirm.

Read Anchor will be completely removed from your browser. Your user data is not stored anywhere, so no cleanup is required.

---

## Need More Help?

If you encounter an issue not covered in this guide, please open an issue in the GitHub repository with the following information:
- Your operating system (Windows, macOS, or Linux)
- Your browser and version (e.g., Chrome 124, Brave 1.65)
- The exact step where you got stuck
- Any error messages you see
