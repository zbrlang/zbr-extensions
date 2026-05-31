from pygments.lexer import RegexLexer, bygroups
from pygments.token import Comment, Keyword, Name, Operator, Punctuation, String, Text

class ZbrLexer(RegexLexer):
    name = 'ZBR'
    aliases = ['zbr']
    filenames = ['*.zbr']

    tokens = {
        'root': [
            (r'^#(name|trigger|description|type|scope|option)\b', Keyword.Reserved),
            (r'//.*$', Comment.Single),
            (r'\b(Z)([a-zA-Z0-9_]+)\b(?=\{)', bygroups(Name.Builtin, Name.Function)),
            (r'\bonInteraction\b(?=\{)', Name.Tag),
            (r'\bon[a-zA-Z0-9_]+\b', Name.Tag),
            (r'==|!=|>=|<=|>|<|&&|\|\|', Operator),
            (r';', Punctuation),
            (r'\\[{};\\]', String.Escape),
            (r'\{', Punctuation, 'content'),
            (r'\}', Punctuation),
            (r'.', Text),
        ],
        'content': [
            (r'//.*$', Comment.Single),
            (r'\b(Z)([a-zA-Z0-9_]+)\b(?=\{)', bygroups(Name.Builtin, Name.Function)),
            (r'\bonInteraction\b(?=\{)', Name.Tag),
            (r'\bon[a-zA-Z0-9_]+\b', Name.Tag),
            (r'==|!=|>=|<=|>|<|&&|\|\|', Operator),
            (r';', Punctuation),
            (r'\\[{};\\]', String.Escape),
            (r'\{', Punctuation, '#push'),
            (r'\}', Punctuation, '#pop'),
            (r'.', Text),
        ],
    }
