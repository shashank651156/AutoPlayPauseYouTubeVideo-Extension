# Auto Pause/Play Video Extension

This Chrome/Edge extension automatically pauses the video when you leave the window and plays it again when you return.

## Features

- Pauses video when the browser tab/window is not active
- Resumes video when the browser tab/window becomes active again

## Installation

1. Clone this repository or download the files.
2. Open Chrome/Edge and go to `chrome://extensions/` or `edge://extensions/`.
3. Enable Developer mode by clicking the toggle switch at the top right.
4. Click the "Load unpacked" button and select the directory where you cloned/downloaded the files.

## Files

- `manifest.json` - Contains the extension metadata and configuration.
- `background.js` - Handles background tasks such as tab activation.
- `content.js` - Handles pausing and playing the video based on tab visibility.
- `icon48.png` - Icon used for the extension (48x48).
- `icon128.png` - Icon used for the extension (128x128).

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

  This project is licensed under the MIT License - see the [`LICENSE`](https://github.com/shashank651156/AutoPlayPauseYouTubeVideo-Extension/blob/main/LICENSE) file for details.
