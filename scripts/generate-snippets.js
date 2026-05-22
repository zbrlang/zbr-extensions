import fs from "fs/promises";
import path from "path";

const root = path.resolve(new URL(".", import.meta.url).pathname, "..");
const inputFile = path.join(root, "context", "functions.json");
const vscodeOutput = path.join(root, "vscode", "snippets", "snippets.json");
const zedOutput = path.join(root, "zed", "snippets", "zbr.json");

function parseSyntax(syntax) {
  const open = syntax.indexOf("{");
  const close = syntax.lastIndexOf("}");
  if (open < 0 || close < 0 || close <= open) return [];
  const argText = syntax.slice(open + 1, close).trim();
  if (!argText) return [];
  return argText
    .split(";")
    .map((arg) => arg.trim())
    .filter(Boolean)
    .map((arg) => arg.replace(/\.\.\.$/, ""));
}

function makePlaceholders(args) {
  return args.map((arg, index) => {
    const optional = arg.endsWith("?");
    const name = optional ? arg.slice(0, -1) : arg;
    return `\${${index + 1}:${name}}`;
  });
}

async function main() {
  const raw = await fs.readFile(inputFile, "utf-8");
  const functions = JSON.parse(raw);

  const vscodeSnippets = {};
  const zedSnippets = {};

  const sorted = [...functions].sort((a, b) => a.name.localeCompare(b.name));

  for (const item of sorted) {
    const args = parseSyntax(item.syntax);
    const placeholders = makePlaceholders(args);
    const bodyText = `${item.name}{${placeholders.join(";")}}`;

    vscodeSnippets[item.name] = {
      prefix: item.name,
      body: [bodyText],
      description: item.description ?? "",
    };

    zedSnippets[item.name] = {
      prefix: item.name,
      body: bodyText,
      description: item.description ?? "",
    };
  }

  await fs.mkdir(path.dirname(vscodeOutput), { recursive: true });
  await fs.mkdir(path.dirname(zedOutput), { recursive: true });

  await fs.writeFile(vscodeOutput, JSON.stringify(vscodeSnippets, null, 2) + "\n", "utf-8");
  await fs.writeFile(zedOutput, JSON.stringify(zedSnippets, null, 2) + "\n", "utf-8");

  console.log("Generated snippets:", vscodeOutput, zedOutput);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});