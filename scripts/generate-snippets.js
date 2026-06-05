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
const prismOutput = path.join(root, "prism", "keywords.json");
const vimOutput = path.join(root, "vim", "syntax", "keywords.vim");
const emacsOutput = path.join(root, "emacs", "keywords.el");

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
  const functionNames = sorted.map(f => f.name);
  const headers = ["name", "trigger", "description", "type", "scope", "option"];

  for (const item of sorted) {
    const args = parseSyntax(item.syntax);
    const placeholders = makePlaceholders(args);
    const bodyText = `${item.name}{${placeholders.join(";")}}`;

    const isAbsolutelyZeroArgs = item.arguments.length === 0;
    const isAllOptional = item.arguments.length > 0 && item.arguments.every(arg => arg.required === false);
    const hasRequiredArgs = item.arguments.some(arg => arg.required === true);

    if (isAbsolutelyZeroArgs) {
      vscodeSnippets[item.name] = {
        prefix: item.name,
        body: [item.name],
        description: item.description ?? "",
      };
    } else if (isAllOptional) {
      vscodeSnippets[item.name] = {
        prefix: item.name,
        body: [bodyText],
        description: item.description ?? "",
      };
      vscodeSnippets[`${item.name}-bracketless`] = {
        prefix: item.name,
        body: [item.name],
        description: item.description ?? "",
      };
    } else if (hasRequiredArgs) {
      vscodeSnippets[item.name] = {
        prefix: item.name,
        body: [bodyText],
        description: item.description ?? "",
      };
    }

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

  // Generate keywords for other platforms
  await fs.mkdir(path.dirname(prismOutput), { recursive: true });
  await fs.mkdir(path.dirname(vimOutput), { recursive: true });
  await fs.mkdir(path.dirname(emacsOutput), { recursive: true });

  await fs.writeFile(prismOutput, JSON.stringify({ functions: functionNames, headers }, null, 2) + "\n", "utf-8");
  
  const vimKeywords = `syn keyword zbrHeader ${headers.join(" ")}\nsyn keyword zbrFunction ${functionNames.join(" ")}\n`;
  await fs.writeFile(vimOutput, vimKeywords, "utf-8");

  const emacsKeywords = `(defvar zbr-functions '(${functionNames.map(n => `"${n}"`).join(" ")}))\n(defvar zbr-headers '(${headers.map(h => `"${h}"`).join(" ")}))\n`;
  await fs.writeFile(emacsOutput, emacsKeywords, "utf-8");

  // Automate Syntax Highlighting Regex
  const bracketlessEligible = sorted
    .filter(item => item.arguments.length === 0 || item.arguments.every(arg => arg.required === false))
    .map(item => item.name.replace(/^Z/, ""));
  
  const regex = bracketlessEligible.join("|");
  const regexNoZ = `(${regex})`;

  // 1. VS Code (tmLanguage.json)
  const tmLanguagePath = path.join(root, "vscode", "syntaxes", "zbr.tmLanguage.json");
  const tmLanguageRaw = await fs.readFile(tmLanguagePath, "utf-8");
  const tmLanguage = JSON.parse(tmLanguageRaw);
  if (tmLanguage.repository && tmLanguage.repository.functions && tmLanguage.repository.functions.patterns[0]) {
    tmLanguage.repository.functions.patterns[0].match = `\\b(Z)(${regex})\\b`;
  }
  await fs.writeFile(tmLanguagePath, JSON.stringify(tmLanguage, null, 2) + "\n", "utf-8");

  // 2. Vim (vim/syntax/zbr.vim)
  const vimPath = path.join(root, "vim", "syntax", "zbr.vim");
  let vimContent = await fs.readFile(vimPath, "utf-8");
  const vimRegex = `syn match zbrFunctionBrace "\\\\<Z\\\\(${regex}\\\\)\\\\>"`;
  vimContent = vimContent.replace(/syn match zbrFunctionBrace "Z[a-zA-Z_][a-zA-Z0-9_]*{.*"/, vimRegex); // Approximate replacement
  await fs.writeFile(vimPath, vimContent, "utf-8");

  // 3. Sublime (sublime/ZBR.sublime-syntax)
  const sublimePath = path.join(root, "sublime", "ZBR.sublime-syntax");
  let sublimeContent = await fs.readFile(sublimePath, "utf-8");
  sublimeContent = sublimeContent.replace(/match: \(Z\)\{\{function_identifier\}\}/, `match: (Z)(${regexNoZ})`);
  await fs.writeFile(sublimePath, sublimeContent, "utf-8");

  // 4. Kate (kate/zbr.xml)
  const katePath = path.join(root, "kate", "zbr.xml");
  let kateContent = await fs.readFile(katePath, "utf-8");
  kateContent = kateContent.replace(/<item>Z\[a-zA-Z0-9_\]+<\/item>/, `<item>Z(${regexNoZ})</item>`);
  await fs.writeFile(katePath, kateContent, "utf-8");

  // 5. HighlightJS (highlightjs/zbr.js)
  const prismPath = path.join(root, "highlightjs", "zbr.js");
  let prismContent = await fs.readFile(prismPath, "utf-8");
  prismContent = prismContent.replace(/Z[a-zA-Z0-9_]+/, `Z(${regexNoZ})`);
  await fs.writeFile(prismPath, prismContent, "utf-8");

  // 6. Tree-sitter (tree-sitter/grammar.js)
  const treeSitterPath = path.join(root, "tree-sitter", "grammar.js");
  let treeSitterContent = await fs.readFile(treeSitterPath, "utf-8");
  treeSitterContent = treeSitterContent.replace(/seq\(\$\.function_identifier, \$.braces\)/, 'choice(seq($.function_identifier, $.braces), $.function_identifier)');
  await fs.writeFile(treeSitterPath, treeSitterContent, "utf-8");

  console.log("Generated snippets & updated syntaxes:", vscodeOutput, zedOutput, neovimOutput, sublimeOutput, helixOutput, intellijOutput);
  console.log("Generated keywords:", prismOutput, vimOutput, emacsOutput);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
