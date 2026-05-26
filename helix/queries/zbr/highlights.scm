; Comments
(comment) @comment

; Headers
(header_name) @keyword.control
(header value: (_) @string)

; Z functions
(function_call name: (function_name) @function)
(function_call "{" @punctuation.bracket)
(function_call "}" @punctuation.bracket)

; Standalone Z
(bare_z) @keyword

; Trigger functions
(trigger_call name: (trigger_name) @tag)
(trigger_call "{" @punctuation.bracket)
(trigger_call "}" @punctuation.bracket)

; Braced content blocks
(braced_content "{" @punctuation.bracket)
(braced_content "}" @punctuation.bracket)

; Argument separator
(argument_separator) @keyword.control

; Operators
(operator) @operator

; Escape sequences
(escape_sequence) @string.escape

; Content and text
(content) @string
(text) @string
