# ZBR for Vim

Official syntax highlighting for **ZBR** in Vim and Neovim.

## Installation

### Manual Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Copy the `vim/` contents to your Vim configuration directory (usually `~/.vim/` or `~/vimfiles/` on Windows).

   **Linux / macOS:**
   ```bash
   cp -r ~/Downloads/Code/zbr-extensions/vim/* ~/.vim/
   ```

   **Neovim (Linux / macOS):**
   ```bash
   mkdir -p ~/.config/nvim
   cp -r ~/Downloads/Code/zbr-extensions/vim/* ~/.config/nvim/
   ```

### Using a Plugin Manager

If you use a plugin manager like `vim-plug`, you can add this repository:

```vim
Plug 'zbrlang/zbr-extensions', { 'rtp': 'vim' }
```

## Usage

Once installed, Vim will automatically detect `.zbr` files and apply syntax highlighting. You can also manually set the filetype:

```vim
:set filetype=zbr
```

## License

The ZBR Vim extension is All Rights Reserved.
