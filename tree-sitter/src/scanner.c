#include "tree_sitter/parser.h"

enum TokenType {
  FUNCTION_START,
};

void *tree_sitter_zbr_external_scanner_create() { return NULL; }
void tree_sitter_zbr_external_scanner_destroy(void *p) {}
void tree_sitter_zbr_external_scanner_reset(void *p) {}
unsigned tree_sitter_zbr_external_scanner_serialize(void *p, char *buf) { return 0; }
void tree_sitter_zbr_external_scanner_deserialize(void *p, const char *b, unsigned n) {}

static int is_name_char(int c) {
  return (c >= 'a' && c <= 'z') ||
         (c >= 'A' && c <= 'Z') ||
         (c >= '0' && c <= '9') ||
         c == '_';
}

bool tree_sitter_zbr_external_scanner_scan(void *payload, TSLexer *lexer, const bool *valid_symbols) {
  if (!valid_symbols[FUNCTION_START]) return false;
  if (lexer->lookahead != 'Z') return false;
  lexer->advance(lexer, false);
  if (!is_name_char(lexer->lookahead)) return false;
  while (is_name_char(lexer->lookahead)) {
    lexer->advance(lexer, false);
  }
  if (lexer->lookahead != '{') return false;
  lexer->result_symbol = FUNCTION_START;
  return true;
}