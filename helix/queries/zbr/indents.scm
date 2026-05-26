; Increase indent after opening brace
(function_call "{" @indent.begin)
(trigger_call "{" @indent.begin)
(braced_content "{" @indent.begin)

; Decrease indent at closing brace
(function_call "}" @indent.end)
(trigger_call "}" @indent.end)
(braced_content "}" @indent.end)
