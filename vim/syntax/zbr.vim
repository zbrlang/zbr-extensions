" Vim syntax file
" Language: ZBR
" Maintainer: ZBR Team

if exists("b:current_syntax")
  finish
endif

" Load generated keywords
let s:current_dir = expand('<sfile>:p:h')
execute 'source ' . s:current_dir . '/keywords.vim'

syn match zbrComment "//.*$"
syn match zbrHeaderLine "^\s*#\(name\|trigger\|description\|type\|scope\|option\)\>" contains=zbrHeader
syn match zbrOperator "\%(==\|!=\|>=|<=\|>\|<\|&&\|||\)"
syn match zbrEscape "\\[{};\\]"
syn match zbrSeparator ";"
syn match zbrBrace "[{}]"

syn match zbrTriggerName "\<onInteraction\>\ze{"
syn match zbrTriggerName "\<on[a-zA-Z0-9_]\+\>"

syn match zbrFunctionPrefix "\<Z\ze[a-zA-Z_][a-zA-Z0-9_]*{"
syn region zbrFunctionBlock start="Z[a-zA-Z_][a-zA-Z0-9_]*{" end="}" contains=zbrFunction,zbrFunctionPrefix,zbrBrace,TOP

hi def link zbrComment Comment
hi def link zbrHeader Keyword
hi def link zbrOperator Operator
hi def link zbrEscape Special
hi def link zbrSeparator Delimiter
hi def link zbrTriggerName Tag
hi def link zbrFunctionPrefix Keyword
hi def link zbrFunction Function
hi def link zbrTriggerBrace Delimiter
hi def link zbrFunctionBrace Delimiter

let b:current_syntax = "zbr"
