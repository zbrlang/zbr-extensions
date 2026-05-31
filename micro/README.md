# ZBR for Micro

Official syntax highlighting for **ZBR** in the Micro editor.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zbrlang/zbr-extensions
   ```
2. Copy the `zbr.yaml` file to your Micro syntax directory:

   **Linux / macOS:**
   ```bash
   mkdir -p ~/.config/micro/syntax
   cp ~/Downloads/Code/zbr-extensions/micro/zbr.yaml ~/.config/micro/syntax/
   ```

   **Windows:**
   ```powershell
   Copy-Item .\micro\zbr.yaml -Destination "$env:USERPROFILE\.config\micro\syntax\zbr.yaml"
   ```

## Usage

Once installed, Micro will automatically detect `.zbr` files and apply syntax highlighting.

## License

The ZBR Micro extension is All Rights Reserved.
