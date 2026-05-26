import fs from "fs/promises";
import path from "path";

const root = path.resolve(new URL(".", import.meta.url).pathname, "..");
const inputFile = path.join(root, "context", "functions.json");
const vscodeOutput = path.join(root, "vscode", "snippets", "snippets.json");
const zedOutput = path.join(root, "zed", "snippets", "zbr.json");
const neovimOutput = path.join(root, "neovim", "snippets", "zbr.json");
const sublimeOutput = path.join(root, "sublime", "snippets", "ZBR.sublime-completions");
const helixOutput = path.join(root, "helix", "snippets", "zbr.toml");
const intellijOutput = path.join(root, "intellij", "snippets", "ZBR.xml");

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

  const sublimeCompletions = [];
  const helixLines = [];
  const intellijTemplates = [];

  for (const item of sorted) {
    const args = parseSyntax(item.syntax);
    const placeholders = makePlaceholders(args);
    const bodyText = `${item.name}{${placeholders.join(";")}}`;
    const desc = item.description ?? "";

    sublimeCompletions.push({
      trigger: `${item.name}\t${desc}`,
      contents: bodyText,
    });

    helixLines.push(`[${item.name}]`);
    helixLines.push(`prefix = "${item.name}"`);
    helixLines.push(`body = "${bodyText}"`);
    helixLines.push(`description = "${desc}"`);
    helixLines.push("");

    const safeDesc = desc.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const funcName = item.name;
    intellijTemplates.push(`  <template name="${funcName}" value="${funcName}{\$END$}" description="${safeDesc}" toReformat="false" toShortenFQNames="true">
    <context>
      <option name="OTHER" value="true" />
    </context>
  </template>`);
  }

  await fs.mkdir(path.dirname(vscodeOutput), { recursive: true });
  await fs.mkdir(path.dirname(zedOutput), { recursive: true });
  await fs.mkdir(path.dirname(neovimOutput), { recursive: true });
  await fs.mkdir(path.dirname(sublimeOutput), { recursive: true });
  await fs.mkdir(path.dirname(helixOutput), { recursive: true });
  await fs.mkdir(path.dirname(intellijOutput), { recursive: true });

  await fs.writeFile(vscodeOutput, JSON.stringify(vscodeSnippets, null, 2) + "\n", "utf-8");
  await fs.writeFile(zedOutput, JSON.stringify(zedSnippets, null, 2) + "\n", "utf-8");
  await fs.writeFile(neovimOutput, JSON.stringify(vscodeSnippets, null, 2) + "\n", "utf-8");

  const sublimeJson = JSON.stringify({ scope: "source.zbr - comment", completions: sublimeCompletions }, null, 2) + "\n";
  await fs.writeFile(sublimeOutput, sublimeJson, "utf-8");

  await fs.writeFile(helixOutput, helixLines.join("\n"), "utf-8");

  const intellijXml = `<?xml version="1.0" encoding="UTF-8"?>
<templateSet group="ZBR">
${intellijTemplates.join("\n")}
</templateSet>
`;
  await fs.writeFile(intellijOutput, intellijXml, "utf-8");

  console.log("Generated snippets:", vscodeOutput, zedOutput, neovimOutput, sublimeOutput, helixOutput, intellijOutput);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});