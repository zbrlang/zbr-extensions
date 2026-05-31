module.exports = grammar({
  name: "zbr",
  extras: ($) => [$.comment],
  rules: {
    source_file: ($) =>
      repeat(
        choice(
          $.header,
          $.function_call,
          $.trigger_call,
          $.text,
          $.newline,
        ),
      ),

    header: ($) =>
      seq(
        field(
          "key",
          alias(
            token(prec(1, /#(name|trigger|description|type|scope|option)/)),
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
        field("prefix", alias(token(prec(10, "Z")), $.function_prefix)),
        field("name", alias(token(prec(10, /[a-zA-Z0-9_]+/)), $.function_name)),
        token.immediate("{"),
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
      choice(
        seq(
          field("name", alias("onInteraction", $.trigger_name)),
          token.immediate("{"),
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
        seq(
          field("name", alias(/on[a-zA-Z0-9_]+/, $.trigger_name)),
          optional(
            seq(
              token.immediate("{"),
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
            )
          )
        )
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

    operator: ($) =>
      token(choice("==", "!=", ">=", "<=", ">", "<", "&&", "||")),
    argument_separator: ($) => token(";"),
    escape_sequence: ($) => token(/\\[{};\\]/),
    content: ($) => /[^Z;{}\\\n][^;{}\\\n]*/,
    text: ($) =>
      token(
        choice(
          /[^#Z\n][^Z\n]*/,
          /#(?!(name|trigger|description|type|scope|option))[^\n]*/,
          "Z",
        ),
      ),
  },
});
