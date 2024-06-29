/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: [
    "dist/",
    "supabase/",
    "tests/*",
    "**/.config/",
    "jest.config.js",
    "postcss.config.js",
    "tailwind.config.ts",
  ],
  rules: {
    "no-console":
      process.env.NODE_ENV === "production"
        ? ["error", { allow: ["warn", "error"] }]
        : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    camelcase: ["error", { properties: "never" }],
    "no-unused-vars": "off",
    "no-unneeded-ternary": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "spaced-comment": ["error", "always", { markers: ["/"] }],
    yoda: "error",
    "no-trailing-spaces": "error",
    "dot-notation": "error",
    "no-lonely-if": "error",
    "no-undef-init": "error",
    "prefer-const": "error",
  },
  settings: {
    "import/resolver": {
      node: true,
      "eslint-import-resolver-custom-alias": {
        alias: {
          "@": "./src",
        },
        extensions: [".ts", ".js", ".tsx", ".jsx", ".mjs"],
      },
      typescript: {},
    },
  },
};
