# ZBR for highlight.js

The official highlight.js extension for **ZBR**. This extension provides syntax highlighting for ZBR scripts in highlight.js, a syntax highlighter for the web.

## Overview

This extension provides everything you need to highlight ZBR scripts with highlight.js:

- **Syntax Highlighting**: Language definition for all ZBR functions, triggers, and operators.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Import and register the language:
   ```javascript
   import hljs from "highlight.js";
   import zbr from "./zbr.js";
   hljs.registerLanguage("zbr", zbr);
   ```

## Usage

```javascript
hljs.highlight(`Zreply{Hello, world!}`, { language: "zbr" });
```

## License

The ZBR highlight.js extension is All Rights Reserved.
