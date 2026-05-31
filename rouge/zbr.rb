# -*- coding: utf-8 -*- #
# frozen_string_literal: true

module Rouge
  module Lexers
    class ZBR < RegexLexer
      title "ZBR"
      desc "The ZBR scripting language"
      tag 'zbr'
      filenames '*.zbr'

      state :root do
        rule %r/^#(name|trigger|description|type|scope|option)\b/, Keyword::Reserved
        rule %r{//.*$}, Comment::Single
        rule %r/\b(Z)([a-zA-Z0-9_]+)\b(?=\{)/ do
          groups Name::Builtin, Name::Function
        end
        rule %r/\bonInteraction\b(?=\{)/, Name::Tag
        rule %r/\bon[a-zA-Z0-9_]+\b/, Name::Tag
        rule %r/==|!=|>=|<=|>|<|&&|\|\|/, Operator
        rule %r/;/, Punctuation
        rule %r/\\[{};\\]/, Str::Escape
        rule %r/\{/, Punctuation, :content
        rule %r/\}/, Punctuation
        rule %r/./, Text
      end

      state :content do
        rule %r{//.*$}, Comment::Single
        rule %r/\b(Z)([a-zA-Z0-9_]+)\b(?=\{)/ do
          groups Name::Builtin, Name::Function
        end
        rule %r/\bonInteraction\b(?=\{)/, Name::Tag
        rule %r/\bon[a-zA-Z0-9_]+\b/, Name::Tag
        rule %r/==|!=|>=|<=|>|<|&&|\|\|/, Operator
        rule %r/;/, Punctuation
        rule %r/\\[{};\\]/, Str::Escape
        rule %r/\{/, Punctuation, :push
        rule %r/\}/, Punctuation, :pop
        rule %r/./, Text
      end
    end
  end
end
