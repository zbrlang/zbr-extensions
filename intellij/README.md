# ZBR for JetBrains

The official JetBrains IDE extension for **ZBR**. This extension turns JetBrains IDEs into a powerful IDE for developing Discord bots with the ZBR scripting language.

## Overview

This extension provides everything you need to develop ZBR scripts efficiently:

- **Syntax Highlighting**: TextMate grammar for all ZBR functions, triggers, and operators.
- **Live Templates**: Quick access to ZBR functions with completions.
- **Language Config**: Smart bracket matching and comment toggling.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Copy the syntax file into your IDE's TextMate bundles directory:
   ```bash
   mkdir -p ~/.config/JetBrains/TextMate/Bundles/zbr
   cp intellij/syntaxes/ZBR.tmLanguage.json ~/.config/JetBrains/TextMate/Bundles/zbr/
   ```
3. Open your IDE, go to **Settings → Editor → TextMate Bundles** and add the `zbr` bundle.
4. Import the Live Templates: **Settings → Editor → Live Templates → Import** and select `intellij/snippets/ZBR.xml`.

## Usage

1. Create or open a file with the `.zbr` extension.
2. Start typing any ZBR function (e.g., `Zreply`) to see completions.
3. Use `#` at the start of a line to see header options like `#name` or `#trigger`.

## License

The ZBR JetBrains extension is All Rights Reserved.
