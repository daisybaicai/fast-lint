const defaultText = `module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/essential',
      'plugin:prettier/recommended',
      'eslint:recommended',
      '@vue/standard'
    ],
    parserOptions: {
      parser: 'babel-eslint'
    },
    plugins: [
      'vue'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "space-before-function-paren": 0,
      'prettier/prettier': [
        'error',
        {
          'singleQuote': true,
          'trailingComma': 'none',
          'bracketSpacing': true,
          'jsxBracketSameLine': true,
          'semi': false,
        }
      ],
      'no-undef': [0],
    }
  }
  `;

module.exports = defaultText;
