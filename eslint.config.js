// @ts-check
import globals from "globals";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";

export default tseslint.config([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.js"],
    ignores: ["utils/**"],
    rules: {
      "no-undef": "off",
      "no-var": "error",
      "no-useless-escape": "off",
      "prefer-const": ["error", { destructuring: "all" }],
      "prefer-promise-reject-errors": "error",
      "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
      quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
      "space-before-blocks": ["error", "always"]
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: globals.es2022
    }
  },
  {
    files: ["utils/**/*.js"],
    rules: {
      "no-var": "error",
      "prefer-const": ["error", { destructuring: "all" }],
      "prefer-promise-reject-errors": "error",
      "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
      quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
      "space-before-blocks": ["error", "always"]
    },
		languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
				...globals.es2024,
				...globals.node
			}
    }
  }
]);
