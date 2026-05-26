# ZBR for Helix

The official Helix extension for **ZBR**. This extension turns Helix into a powerful IDE for developing Discord bots with the ZBR scripting language.

## Overview

This extension provides everything you need to develop ZBR scripts efficiently:

- **Syntax Highlighting**: Tree-sitter grammar for all ZBR functions, triggers, and operators.
- **Snippets Library**: Quick access to ZBR functions with completions.
- **Language Config**: Smart bracket matching and comment toggling.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Copy the `helix/` files into your Helix config directory:
   ```bash
   cp languages.toml ~/.config/helix/languages.toml
   rsync -a --delete queries/ ~/.config/helix/runtime/queries/
   rsync -a --delete snippets/ ~/.config/helix/runtime/snippets/
   ```
3. Build the Tree-sitter grammar from the `tree-sitter/` directory:
   ```bash
   cd tree-sitter
   npm install
   npx tree-sitter build --wasm
   ```
4. Add the grammar to your Helix config (`~/.config/helix/languages.toml`):
   ```toml
   [[grammar]]
   name = "zbr"
   source = { path = "~/path/to/zbr-extensions/tree-sitter" }
   ```

## Usage

1. Create or open a file with the `.zbr` extension.
2. Start typing any ZBR function (e.g., `Zreply`) to see snippets and completions.
3. Use `#` at the start of a line to see header options like `#name` or `#trigger`.

## License

The ZBR Helix extension is All Rights Reserved.
