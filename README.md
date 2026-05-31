# ZBR Extensions

The official collection of editor and tool extensions for **ZBR**, a scripting language for Discord bots.

## Overview

ZBR is a scripting language for Discord bots powered by a high-performance Rust runtime engine.<br>
You write commands as plain `.zbr` files using ZBR functions, no boilerplate, no event handlers, no framework knowledge required.

This repository provides the necessary tools for developers to write ZBR commands with full editor support, including syntax highlighting, snippets, and smart completions.

## Supported Platforms

### IDEs and Text Editors
- **[VS Code](vscode/)**: Official VS Code extension providing syntax highlighting and 400+ snippets.
- **[Zed](zed/)**: Official Zed extension powered by a Tree-sitter grammar.
- **[Neovim](neovim/)**: Official Neovim extension powered by a Tree-sitter grammar.
- **[Helix](helix/)**: Official Helix extension powered by a Tree-sitter grammar.
- **[Sublime Text](sublime/)**: Official Sublime Text extension providing syntax highlighting and 400+ completions.
- **[JetBrains (IntelliJ)](intellij/)**: Official JetBrains IDE extension providing syntax highlighting and 400+ live templates.
- **[Vim](vim/)**: Official Vim syntax highlighting and filetype detection.
- **[Emacs](emacs/)**: Official `zbr-mode` major mode for Emacs.
- **[Micro](micro/)**: Official Micro editor syntax highlighting.
- **[Kate](kate/)**: Official Kate/KTextEditor syntax highlighting.

### Web and Documentation
- **[highlight.js](highlightjs/)**: Official highlight.js extension for web syntax highlighting.
- **[Prism.js](prism/)**: Official Prism.js language definition for web syntax highlighting.
- **[Monaco](monaco/)**: Official Monaco Editor language definition.
- **[Tree-sitter WASM](tree-sitter-wasm/)**: WebAssembly build of the ZBR Tree-sitter parser.

### CLI and Build Tools
- **[bat](bat/)**: Official bat extension for terminal syntax highlighting.
- **[Pygments](pygments/)**: Official Pygments lexer for Python-based highlighting.
- **[Rouge](rouge/)**: Official Rouge lexer for Ruby-based highlighting.
- **[Chroma](chroma/)**: Official Chroma lexer for Go-based highlighting.

## Installation

See the README in each extension folder for installation instructions:

- [VS Code installation](vscode/README.md)
- [Zed installation](zed/README.md)
- [Neovim installation](neovim/README.md)
- [Helix installation](helix/README.md)
- [Sublime Text installation](sublime/README.md)
- [JetBrains installation](intellij/README.md)
- [Vim installation](vim/README.md)
- [Emacs installation](emacs/README.md)
- [Micro installation](micro/README.md)
- [Kate installation](kate/README.md)
- [bat installation](bat/README.md)

## Project Structure

- `vscode/`: VS Code extension, TextMate grammar, snippets, language config.
- `zed/`: Zed extension, Tree-sitter highlights, snippets, language config.
- `neovim/`: Neovim extension, Tree-sitter queries, snippets, filetype config.
- `helix/`: Helix extension, Tree-sitter queries, snippets, language config.
- `sublime/`: Sublime Text extension, Sublime syntax, completions, language config.
- `bat/`: bat extension, Sublime syntax for terminal highlighting.
- `intellij/`: JetBrains IDE extension, TextMate grammar, live templates.
- `vim/`: Vim syntax and filetype detection.
- `emacs/`: Emacs major mode.
- `micro/`: Micro syntax definition.
- `kate/`: Kate syntax definition.
- `highlightjs/`: highlight.js language definition.
- `prism/`: Prism.js language definition.
- `monaco/`: Monaco Editor language definition.
- `pygments/`: Pygments lexer.
- `rouge/`: Rouge lexer.
- `chroma/`: Chroma lexer.
- `tree-sitter/`: Tree-sitter grammar source for ZBR.
- `tree-sitter-wasm/`: Tree-sitter WASM build for web.

## License

All Rights Reserved, see [LICENSE](LICENSE).
