# ZBR for Sublime Text

The official Sublime Text extension for **ZBR**. This extension turns Sublime Text into a powerful IDE for developing Discord bots with the ZBR scripting language.

## Overview

This extension provides everything you need to develop ZBR scripts efficiently:

- **Syntax Highlighting**: Custom Sublime syntax for all ZBR functions, triggers, and operators.
- **Completions Library**: Quick access to ZBR functions with parameter hints.
- **Language Config**: Smart bracket matching and comment toggling.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Copy the `sublime/` folder into your Sublime Text Packages directory:
   ```bash
   rsync -a --delete ~/path/to/zbr-extensions/sublime/ ~/.config/sublime-text/Packages/ZBR/
   ```
3. Restart Sublime Text.

## Usage

1. Create or open a file with the `.zbr` extension.
2. Start typing any ZBR function (e.g., `Zreply`) to see completions.
3. Use `#` at the start of a line to see header options like `#name` or `#trigger`.

## License

The ZBR Sublime Text extension is All Rights Reserved.
