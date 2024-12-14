import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

/** @type import("eslint").Linter.Config[] */
const config = tseslint.config(
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
  }),
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "import/order": [
        "error",
        {
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    files: ["**/*.mjs"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    ignores: ["**/out", "**/.next"],
  },
  eslintConfigPrettier,
);

export default config;
