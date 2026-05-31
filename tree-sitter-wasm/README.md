# ZBR Tree-sitter WASM

WebAssembly (WASM) version of the ZBR Tree-sitter parser for use in web environments.

## Usage

This WASM build allows you to use the ZBR Tree-sitter parser in browsers or Node.js environments where a native build is not feasible.

### Web Integration

Include the `tree-sitter.js` and `tree-sitter-zbr.wasm` in your project.

```javascript
const Parser = require('web-tree-sitter');

await Parser.init();
const parser = new Parser();
const ZBR = await Parser.Language.load('tree-sitter-zbr.wasm');
parser.setLanguage(ZBR);

const tree = parser.parse('onMessageCreate { Zreply{Hello!} }');
```

## Building from Source

To rebuild the WASM file, ensure you have the `emscripten` SDK installed and run:

```bash
./build.sh
```

## License

The ZBR Tree-sitter WASM parser is All Rights Reserved.
