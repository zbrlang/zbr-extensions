module.exports = grammar({
  name: "zbr",
  externals: ($) => [$.function_start],
  extras: ($) => [$.comment],
  rules: {
    source_file: ($) =>
      repeat(
        choice(
          $.header,
          $.function_call,
          $.trigger_call,
          $.text,
          $.bare_z,
          $.newline,
        ),
      ),

    header: ($) =>
      seq(
        field(
          "key",
          alias(
            token(prec(1, /\#(name|trigger|description|type|author)[ \t]+/)),
            $.header_name,
          ),
        ),
        field("value", /[^\n]*/),
        $.newline,
      ),

    newline: ($) => /\n/,
    comment: ($) => /\/\/.*/,

    function_call: ($) =>
      seq(
        field("name", alias($.function_start, $.function_name)),
        "{",
        repeat(
          choice(
            $.function_call,
            $.trigger_call,
            $.braced_content,
            $.escape_sequence,
            $.operator,
            $.argument_separator,
            $.content,
          ),
        ),
        "}",
      ),

    trigger_call: ($) =>
      seq(
        field("name", $.trigger_name),
        "{",
        repeat(
          choice(
            $.function_call,
            $.trigger_call,
            $.braced_content,
            $.escape_sequence,
            $.operator,
            $.argument_separator,
            $.content,
          ),
        ),
        "}",
      ),

    braced_content: ($) =>
      seq(
        "{",
        repeat(
          choice(
            $.function_call,
            $.trigger_call,
            $.braced_content,
            $.escape_sequence,
            $.operator,
            $.argument_separator,
            $.content,
          ),
        ),
        "}",
      ),

    trigger_name: ($) => /on[a-zA-Z0-9_]+/,
    operator: ($) =>
      token(choice("==", "!=", ">=", "<=", ">", "<", "&&", "||")),
    argument_separator: ($) => token(";"),
    escape_sequence: ($) => token(/\\[{};\\]/),
    content: ($) => /[^Z;{}\\\n][^;{}\\\n]*/,
    bare_z: ($) => token(prec(-1, "Z")),
    text: ($) =>
      token(
        choice(
          /[^#Z\n][^Z\n]*/,
          /#[^(name|trigger|description|type|author)][^Z\n]*/,
        ),
      ),
  },
});
