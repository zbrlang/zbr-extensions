# ZBR for Rouge

Syntax highlighting for **ZBR** in Rouge.

## Overview

This extension provides a `ZBR` lexer for Rouge, a pure-ruby code highlighter. It's compatible with Jekyll and other Ruby-based tools.

## Installation

To use this lexer in your Ruby project:

1. Copy `zbr.rb` to your project (e.g., in `lib/rouge/lexers/`).
2. Require it in your code:

```ruby
require 'rouge'
require_relative 'zbr'

source = 'Zreply{Hello World!}'
lexer = Rouge::Lexers::ZBR.new
formatter = Rouge::Formatters::HTML.new
puts formatter.format(lexer.lex(source))
```

## Usage

If you are using Jekyll, you might need to register the lexer or place it in the appropriate plugins directory.

## License

The ZBR Rouge extension is All Rights Reserved.
