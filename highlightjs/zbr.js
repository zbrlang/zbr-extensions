export default function (hljs) {
  return {
    name: "ZBR",
    aliases: ["zbr"],
    case_insensitive: false,
    contains: [
      hljs.COMMENT("//", "$"),

      {
        match: /(Z)([a-zA-Z_][a-zA-Z0-9_]*)(\{)/,
        scope: {
          1: "built_in",
          2: "title.function",
          3: "punctuation",
        },
        relevance: 10,
      },

      {
        match: /(on[a-zA-Z_][a-zA-Z0-9_]*)(\{)/,
        scope: {
          1: "tag",
          2: "punctuation",
        },
        relevance: 10,
      },

      {
        match: /^[ \t]*#(name|trigger|description|type|scope|option)\b/,
        scope: "keyword",
        relevance: 10,
      },

      { scope: "punctuation", match: /\{|\}/ },

      { scope: "keyword", match: /==|!=|>=|<=|>|<|\&\&|\|\||;/ },

      { scope: "string.escape", match: /\\[{};\\]/ },
    ],
  };
}
