# ZBR for bat

The official bat extension for **ZBR**. This extension provides syntax highlighting for ZBR scripts in bat, a cat(1) clone with syntax highlighting and Git integration.

## Overview

This extension provides everything you need to view ZBR scripts with bat:

- **Syntax Highlighting**: Sublime syntax definition for all ZBR functions, triggers, and operators.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Copy the syntax file into bat's syntax directory:
   ```bash
   mkdir -p ~/.config/bat/syntaxes
   cp bat/ZBR.sublime-syntax ~/.config/bat/syntaxes/
   ```
3. Rebuild bat's syntax cache:
   ```bash
   bat cache --build
   ```

## Usage

```bash
bat script.zbr
```

## License

The ZBR bat extension is All Rights Reserved.
