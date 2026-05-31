; Comments
(comment) @comment

; Headers
(header_name) @keyword.control
(header value: (_) @string)

; Z functions
(function_prefix) @keyword
(function_name) @function

; Trigger functions
(trigger_name) @tag

; Brackets
"{" @punctuation.bracket
"}" @punctuation.bracket

; Argument separator
(argument_separator) @keyword.control

; Operators
(operator) @operator

; Escape sequences
(escape_sequence) @string.escape

; Content and text
(content) @string
(text) @string
