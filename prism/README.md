# ZBR for Prism

Syntax highlighting for **ZBR** in Prism.

## Overview

This extension provides ZBR language support for Prism, a lightweight, extensible syntax highlighter.

## Installation

To use this language definition:

1. Include Prism in your project.
2. Include `prism-zbr.js` after `prism.js`.

```html
<script src="prism.js"></script>
<script src="prism-zbr.js"></script>
```

## Usage

Use the `language-zbr` class on your `<code>` or `<pre>` blocks:

```html
<pre><code class="language-zbr">
#name MyBot
onInteraction{
    Zreply{Hello World!}
}
</code></pre>
```

## License

The ZBR Prism extension is All Rights Reserved.
