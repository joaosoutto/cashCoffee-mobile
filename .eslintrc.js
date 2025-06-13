module.exports = {
  root: true,
  extends: "@react-native",
  parser: "@typescript-eslint/parser",
  plugins: ["unused-imports", "@typescript-eslint", "jest"],
  overrides: [
    {
      files: ["*.js", "*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/no-shadow": ["off"],
        "no-shadow": "off",
        "no-undef": "off",
        quotes: "off",
        semi: 0,
        "react-hooks/exhaustive-deps": "off",
        "react-native/no-inline-styles": "off",
        "react/react-in-jsx-scope": 0,
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "react/no-unstable-nested-components": "off",
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
      },
    },
  ],
};
