# ZBR for Neovim

The official Neovim extension for **ZBR**. This extension turns Neovim into a powerful IDE for developing Discord bots with the ZBR scripting language.

## Overview

This extension provides everything you need to develop ZBR scripts efficiently:

- **Syntax Highlighting**: Tree-sitter grammar for all ZBR functions, triggers, and operators.
- **Snippets Library**: Quick access to ZBR functions with completions.
- **Language Config**: Smart indentation, folding, and comment toggling.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Add the extension to your plugin manager of choice:

   **lazy.nvim:**
   ```lua
   {
     "zbrlang/zbr-extensions",
     dir = "neovim",
     lazy = false,
   }
   ```

   **packer.nvim:**
   ```lua
   use { "zbrlang/zbr-extensions", rtp = "neovim" }
   ```
3. Register and install the ZBR Tree-sitter grammar by adding this to your Neovim config:
   ```lua
   local parser_config = require("nvim-treesitter.parsers").get_parser_configs()
   parser_config.zbr = {
     install_info = {
       url = "~/path/to/zbr-extensions/tree-sitter",
       files = { "src/parser.c", "src/scanner.c" },
       generate_requires_npm = false,
       requires_generate_from_grammar = false,
     },
     filetype = "zbr",
   }
   require("nvim-treesitter.configs").setup({
     ensure_installed = { "zbr" },
   })
   ```
4. Run `:TSInstall zbr` and restart Neovim.

## Usage

1. Create or open a file with the `.zbr` extension.
2. Start typing any ZBR function (e.g., `Zreply`) to see snippets and completions.
3. Use `#` at the start of a line to see header options like `#name` or `#trigger`.

## License

The ZBR Neovim extension is All Rights Reserved.
