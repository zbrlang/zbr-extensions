; Headers
(header_name) @keyword.control
(header value: (_) @string)

; Comments
(comment) @comment

; Z functions
(function_prefix) @keyword.control
(function_name) @function

; Trigger functions
(trigger_name) @tag

; Brackets
"{" @punctuation.bracket
"}" @punctuation.bracket

; Separator
(argument_separator) @keyword.control

; Operators
(operator) @operator

; Escapes
(escape_sequence) @string.escape

; Content and text
(content) @string
(text) @string
