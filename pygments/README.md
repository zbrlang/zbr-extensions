# ZBR for Pygments

Syntax highlighting for **ZBR** in Pygments.

## Overview

This extension provides a `ZbrLexer` for Pygments, enabling high-quality syntax highlighting for the ZBR scripting language in various tools that use Pygments (like Sphinx, Jekyll, etc.).

## Installation

To use this lexer, you can add `zbr.py` to your Pygments installation or include it in your project.

If you want to register it as a plugin:

1. Copy `zbr.py` to your project.
2. Use it directly in your Python code:

```python
from pygments import highlight
from pygments.formatters import HtmlFormatter
from zbr import ZbrLexer

code = 'Zreply{Hello World!}'
print(highlight(code, ZbrLexer(), HtmlFormatter()))
```

## Usage

When using Pygments via CLI:

```bash
pygmentize -l zbr.py -f html -o output.html input.zbr
```

## License

The ZBR Pygments extension is All Rights Reserved.
