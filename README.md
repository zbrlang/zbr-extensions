# ZBR Extensions

The official collection of IDE extensions for **ZBR**, a scripting language for Discord bots.

## Overview

ZBR is a scripting language for Discord bots powered by a high-performance Rust runtime engine.<br>
You write commands as plain `.zbr` files using ZBR functions, no boilerplate, no event handlers, no framework knowledge required.

This repository provides the necessary tools for developers to write ZBR commands with full editor support, including syntax highlighting, snippets, and smart completions.

## Extensions

- **[vscode/](vscode/)**: Official VS Code extension providing syntax highlighting and 400+ snippets.
- **[zed/](zed/)**: Official Zed extension powered by a Tree-sitter grammar.

## Installation

See the README in each extension folder for installation instructions:

- [VS Code installation](vscode/README.md)
- [Zed installation](zed/README.md)

## Project Structure

- `vscode/`: VS Code extension, TextMate grammar, snippets, language config.
- `zed/`: Zed extension, Tree-sitter highlights, snippets, language config.
- `tree-sitter/`: Tree-sitter grammar source for ZBR.

## License

All Rights Reserved, see [LICENSE](LICENSE).