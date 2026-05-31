# ZBR for Emacs

Official major mode for **ZBR** in Emacs.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Add the `emacs/` directory to your `load-path` in your Emacs configuration (e.g., `init.el` or `.emacs`):

   ```elisp
   (add-to-list 'load-path "~/path/to/zbr-extensions/emacs")
   (require 'zbr-mode)
   ```

## Usage

Files ending in `.zbr` will automatically activate `zbr-mode`. You can also manually enable it:

```elisp
M-x zbr-mode
```

## License

The ZBR Emacs extension is All Rights Reserved.
