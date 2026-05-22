# ZBR for Zed

This extension provides high-performance language support for the ZBR scripting language in the Zed editor.

## Features

- **Tree-sitter Powered Highlighting**: Precise syntax coloring using the ZBR Tree-sitter grammar.
- **Code Folding**: Fold function blocks (`Z...{}`) and trigger blocks (`on...{}`).
- **Snippets**: Full library of ZBR functions with completions.
- **Smart Indentation**: Automatic indentation inside curly braces.

## Local Development

To test this extension locally in Zed:

1. Open Zed.
2. Open the Command Palette (`Ctrl+Shift+P` on Linux).
3. Run **`extensions: install dev extension`**.
4. Select this folder (`zed/`).

### Note on Tree-sitter
This extension depends on the compiled Tree-sitter grammar located in the sibling `tree-sitter/` directory. Zed will automatically compile it to WASM during development installation.

## Project Structure

- `languages/zbr/config.toml`: Language configuration (comments, brackets).
- `languages/zbr/queries/highlights.scm`: Syntax highlighting queries.
- `extension.toml`: Extension manifest and grammar registration.
