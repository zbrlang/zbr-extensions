; Headers
(header_name) @keyword.control
(header value: (_) @string)

; Comments
(comment) @comment

; Z functions — whole "Zname" token, can't split Z from name anymore
(function_call name: (function_name) @function)
(function_call "{" @punctuation.bracket)
(function_call "}" @punctuation.bracket)

; Trigger functions
(trigger_call name: (trigger_name) @tag)
(trigger_call "{" @punctuation.bracket)
(trigger_call "}" @punctuation.bracket)

; Braced content
(braced_content "{" @punctuation.bracket)
(braced_content "}" @punctuation.bracket)

; Separator
(argument_separator) @keyword.control

; Operators
(operator) @operator

; Escapes
(escape_sequence) @string.escape

; Content and text
(content) @string