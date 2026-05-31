#!/bin/bash

# Ensure tree-sitter CLI is installed
if ! command -v tree-sitter &> /dev/null
then
    echo "tree-sitter could not be found. Please install it with 'npm install -g tree-sitter-cli'."
    exit 1
fi

# Build the WASM binary
cd ../tree-sitter
tree-sitter build --wasm

# Move it back to tree-sitter-wasm
mv tree-sitter-zbr.wasm ../tree-sitter-wasm/
