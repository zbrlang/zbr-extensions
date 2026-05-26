# ZBR Extensions

The official collection of IDE extensions for **ZBR**, a scripting language for Discord bots.

## Overview

ZBR is a scripting language for Discord bots powered by a high-performance Rust runtime engine.<br>
You write commands as plain `.zbr` files using ZBR functions, no boilerplate, no event handlers, no framework knowledge required.

This repository provides the necessary tools for developers to write ZBR commands with full editor support, including syntax highlighting, snippets, and smart completions.

## Extensions

- **[vscode/](vscode/)**: Official VS Code extension providing syntax highlighting and 400+ snippets.
- **[zed/](zed/)**: Official Zed extension powered by a Tree-sitter grammar.
- **[neovim/](neovim/)**: Official Neovim extension powered by a Tree-sitter grammar.
- **[helix/](helix/)**: Official Helix extension powered by a Tree-sitter grammar.
- **[sublime/](sublime/)**: Official Sublime Text extension providing syntax highlighting and 400+ completions.
- **[bat/](bat/)**: Official bat extension adding ZBR syntax highlighting to the terminal.
- **[intellij/](intellij/)**: Official JetBrains IDE extension providing syntax highlighting and 400+ live templates.
- **[highlightjs/](highlightjs/)**: Official highlight.js extension adding ZBR syntax highlighting to the web.

## Installation

See the README in each extension folder for installation instructions:

- [VS Code installation](vscode/README.md)
- [Zed installation](zed/README.md)
- [Neovim installation](neovim/README.md)
- [Helix installation](helix/README.md)
- [Sublime Text installation](sublime/README.md)
- [bat installation](bat/README.md)
- [JetBrains installation](intellij/README.md)
- [highlight.js installation](highlightjs/README.md)

## Project Structure

- `vscode/`: VS Code extension, TextMate grammar, snippets, language config.
- `zed/`: Zed extension, Tree-sitter highlights, snippets, language config.
- `neovim/`: Neovim extension, Tree-sitter queries, snippets, filetype config.
- `helix/`: Helix extension, Tree-sitter queries, snippets, language config.
- `sublime/`: Sublime Text extension, Sublime syntax, completions, language config.
- `bat/`: bat extension, Sublime syntax for terminal highlighting.
- `intellij/`: JetBrains IDE extension, TextMate grammar, live templates.
- `highlightjs/`: highlight.js language definition for web highlighting.
- `tree-sitter/`: Tree-sitter grammar source for ZBR.

## License

All Rights Reserved, see [LICENSE](LICENSE).