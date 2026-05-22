# ZBR for VS Code

The official Visual Studio Code extension for **ZBR**. This extension turns VS Code into a powerful IDE for developing Discord bots with the ZBR scripting language.

## Overview

This extension provides everything you need to develop ZBR scripts efficiently:

- **Syntax Highlighting**: Custom TextMate grammar for all ZBR functions, triggers, and operators.
- **Snippets Library**: Quick access to over 400+ ZBR functions with parameter hints.
- **Language Config**: Smart bracket matching and comment toggling.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Copy the `vscode/` folder into your extensions directory:

   **Windows:**
   ```bash
   cp -r vscode %USERPROFILE%\.vscode\extensions\zbr-vscode
   ```
   **macOS / Linux:**
   ```bash
   cp -r vscode ~/.vscode/extensions/zbr-vscode
   ```
3. Restart VS Code.

## Usage

1. Create or open a file with the `.zbr` extension.
2. Start typing any ZBR function (e.g., `Zreply`) to see snippets and completions.
3. Use `#` at the start of a line to see header options like `#name` or `#trigger`.

## License

The ZBR VS Code extension is All Rights Reserved.