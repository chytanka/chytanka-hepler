# Chytanka Linker Extension

This browser extension adds a convenient **"View in Chytanka"** button next to supported links on various websites.

Supported sites:
- [mangadex.org](https://mangadex.org)
- [imgur.com](https://imgur.com)
- [imgchest.com](https://imgchest.com)
- [reddit.com](https://reddit.com)
- [comick.io](https://comick.io)
- [zenko.online](https://zenko.online)

The button redirects the user to [Chytanka](https://chytanka.ink), a clean, reader-focused interface for manga and comics.

## Features

- Adds a 📖 button with localized text (Ukrainian and English).
- Works dynamically with content that loads after page load (via MutationObserver).
- Lightweight, fast, and unobtrusive.

## How it works

The extension scans each page for supported links and injects a button next to them. Clicking the button opens the content in the Chytanka reader.

## Installation

1. Clone or download this repository.
2. Go to `chrome://extensions` in your browser.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the folder.

## License

MIT License.