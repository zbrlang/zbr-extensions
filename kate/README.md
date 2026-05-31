# ZBR for Kate

Official syntax highlighting for **ZBR** in Kate and other KTextEditor-based applications.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Copy the `zbr.xml` file to your Kate syntax highlighting directory:

   **Linux:**
   ```bash
   mkdir -p ~/.local/share/org.kde.syntax-highlighting/syntax
   cp ~/Downloads/Code/zbr-extensions/kate/zbr.xml ~/.local/share/org.kde.syntax-highlighting/syntax/
   ```

   **macOS:**
   ```bash
   mkdir -p ~/Library/Application\ Support/org.kde.syntax-highlighting/syntax
   cp ~/Downloads/Code/zbr-extensions/kate/zbr.xml ~/Library/Application\ Support/org.kde.syntax-highlighting/syntax/
   ```

   **Windows:**
   ```powershell
   $dest = "$env:LOCALAPPDATA\org.kde.syntax-highlighting\syntax"
   if (!(Test-Path $dest)) { New-Item -ItemType Directory -Path $dest }
   Copy-Item .\kate\zbr.xml -Destination "$dest\zbr.xml"
   ```

## Usage

Once installed, Kate will automatically detect `.zbr` files and apply syntax highlighting. You can also manually select "ZBR" from the "Tools -> Highlighting -> Scripts" menu.

## License

The ZBR Kate extension is All Rights Reserved.
