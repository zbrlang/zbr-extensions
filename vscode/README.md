# ZBR for VS Code

The official Visual Studio Code extension for **ZBR**. This extension turns VS Code into a powerful IDE for developing Discord bots with the ZBR scripting language.

## Overview

This extension provides everything you need to develop ZBR scripts efficiently:
- **Syntax Highlighting**: Custom TextMate grammar for all ZBR functions, triggers, and operators.
- **Snippets Library**: Quick access to over 400+ ZBR functions with parameter hints.
- **Language Config**: Smart bracket matching and comment toggling.

## Installation

To install the extension manually on your computer:

### Windows
1. Open File Explorer and go to `%USERPROFILE%\.vscode\extensions`.
2. Copy the `vscode` folder from this repository into that directory.
3. Restart Visual Studio Code.

### macOS / Linux
1. Open your terminal.
2. Copy the `vscode` folder to the extensions directory:
   ```bash
   cp -r ./vscode ~/.vscode/extensions/zbr-vscode
   ```
3. Restart Visual Studio Code.

## Usage

1. Create or open a file with the `.zbr` extension.
2. Start typing any ZBR function (e.g., `Zreply`) to see snippets and completions.
3. Use `#` at the start of a file to see header completion options like `#name` or `#trigger`.

## License

The ZBR VS Code extension is All Rights Reserved.
