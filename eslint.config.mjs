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
            "no-undef": "off",
            "no-unused-vars": "warn",
            "semi": "error",
            "quotes": ["error", "double"],
            "indent": ["error", 4],
            "max-len": ["error", {"code": 120}],
            "react-hooks/exhaustive-deps": 0,
        }
    }
];