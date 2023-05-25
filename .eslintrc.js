module.exports = {
  env: {
    es2021: true,
    node: true,
    commonjs: true,
    es6: true,
    browser: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "next/core-web-vitals",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
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
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order:
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
        },
        pathGroups: [
          {
            pattern: "@/test-utils",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/hooks/**",
            group: "internal",
            position: "after",
          },
        ],
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
  },
};
