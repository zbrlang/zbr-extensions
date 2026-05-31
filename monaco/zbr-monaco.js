import * as monaco from 'monaco-editor';
import { loadWASM } from 'onigasm';
import { Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';

export async function registerZbr() {
    // 1. Register the language
    monaco.languages.register({ id: 'zbr' });

    // 2. Load the TextMate grammar
    const registry = new Registry({
        getGrammarDefinition: async (scopeName) => {
            if (scopeName === 'source.zbr') {
                const response = await fetch('/path/to/zbr.tmLanguage.json');
                return {
                    format: 'json',
                    content: await response.text()
                };
            }
            return null;
        }
    });

    // 3. Map of scope -> language id
    const grammars = new Map();
    grammars.set('zbr', 'source.zbr');

    // 4. Wire it up
    await wireTmGrammars(monaco, registry, grammars);
}
