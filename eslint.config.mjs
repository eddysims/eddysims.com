import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  ...compat.extends("plugin:prettier/recommended"),
  {
    rules: {
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
        {
          blankLine: "always",
          prev: ["const", "let"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["const", "let"],
          next: ["const", "let"],
        },
      ],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
          },
          groups: [
            "builtin",
            "external",
            "internal",
            "sibling",
            "parent",
            "index",
            "object",
            "type",
          ],
        },
      ],
      "no-console": ["warn", { allow: ["debug", "info", "warn", "error"] }],
    },
  },
];

export default eslintConfig;
