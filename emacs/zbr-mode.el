;;; zbr-mode.el --- Major mode for ZBR files

(defvar zbr-mode-hook nil)

(require 'regexp-opt)

;; Load keywords from the same directory
(let ((current-dir (file-name-directory (or load-file-name buffer-file-name))))
  (load (expand-file-name "keywords.el" current-dir) nil t))

(defvar zbr-font-lock-keywords
  (list
   (cons (concat "^#" (regexp-opt zbr-headers t) "\\>") 'font-lock-keyword-face)
   (cons (concat "\\<" (regexp-opt zbr-functions t) "\\>(?={)") 'font-lock-function-name-face)
   '("\\<onInteraction\\>(?={)" . font-lock-type-face)
   '("\\<on[a-zA-Z_][a-zA-Z0-9_]*\\>" . font-lock-type-face)
   '("//.*$" . font-lock-comment-face)
   '("\\(==\\|!=\\|>=\\|<=\\|>\\|<\\|&&\\|||\\|;\\)" . font-lock-keyword-face)
   '("\\\\[{};\\\\]" . font-lock-constant-face)
   '("[{}]" . font-lock-punctuation-face)
   ))

(defvar zbr-mode-syntax-table
  (let ((st (make-syntax-table)))
    ;; Comment style: //
    (modify-syntax-entry ?/ ". 12b" st)
    (modify-syntax-entry ?\n "> b" st)
    st)
  "Syntax table for `zbr-mode'.")

;;;###autoload
(define-derived-mode zbr-mode prog-mode "ZBR"
  "Major mode for editing ZBR files."
  :syntax-table zbr-mode-syntax-table
  (setq font-lock-defaults '(zbr-font-lock-keywords)))

;;;###autoload
(add-to-list 'auto-mode-alist '("\\.zbr\\'" . zbr-mode))

(provide 'zbr-mode)

;;; zbr-mode.el ends here
