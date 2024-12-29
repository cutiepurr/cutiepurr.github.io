import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import airBnbPlugin from "eslint-config-airbnb";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  airBnbPlugin.rules,
  {
    rules: {
      "semi": "error",
      "quotes": ["error", "double"]
    }
  }
];