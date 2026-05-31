# ZBR for Monaco Editor

Syntax highlighting for **ZBR** in the Monaco Editor.

## Overview

This extension enables high-quality syntax highlighting for ZBR in Monaco using TextMate grammars via `monaco-editor-textmate`.

## Installation

1. Install the required dependencies:
   ```bash
   npm install monaco-editor monaco-textmate monaco-editor-textmate onigasm
   ```
2. Copy `zbr-monaco.js` to your project.
3. Use the `registerZbr` function to set up the editor.

## Usage

```javascript
import * as monaco from 'monaco-editor';
import { registerZbr } from './zbr-monaco';

async function init() {
    await registerZbr();
    
    monaco.editor.create(document.getElementById('container'), {
        value: '#name MyBot\nZreply{Hello World!}',
        language: 'zbr'
    });
}

init();
```

## License

The ZBR Monaco extension is All Rights Reserved.
