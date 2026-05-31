# ZBR for Chroma

Syntax highlighting for **ZBR** in Chroma.

## Overview

This extension provides a lexer for Chroma, a general-purpose syntax highlighter in Go.

## Installation

Chroma can load custom lexers from XML files. To use this lexer:

1. Copy `zbr.xml` to your project.
2. Load it using Chroma's API or CLI.

For Go projects, you can also use the following boilerplate to register it:

```go
package main

import (
	"fmt"
	"github.com/alecthomas/chroma/v2"
	"github.com/alecthomas/chroma/v2/lexers"
)

func main() {
	// Register custom lexer logic here if not using XML
	lexer := lexers.Get("zbr")
	if lexer == nil {
		fmt.Println("Lexer not found")
	}
}
```

## Usage

Using the Chroma CLI:

```bash
chroma --lexer=zbr.xml input.zbr
```

## License

The ZBR Chroma extension is All Rights Reserved.
