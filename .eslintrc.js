module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }],
    "space-before-function-paren": 0,
    "object-curly-spacing": 0,
  },
};
