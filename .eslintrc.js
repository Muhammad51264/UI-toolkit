module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
        paths: ['src'],
      },
    },
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:cypress/recommended',
    'plugin:json/recommended',
    'plugin:react/recommended',
    'react-app',
    'react-app/jest',
    'plugin:storybook/recommended',
  ],
  plugins: ['import', 'prettier', 'react', 'jest'],
  root: true,
  rules: {
    'class-methods-use-this': 0,
    'import/no-absolute-path': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 1,
    'import/no-unresolved': 2,
    'no-restricted-exports': 'off',
    'eol-last': 2,
    'no-multiple-empty-lines': 2,
    'no-param-reassign': 0,
    'no-throw-literal': 0,
    'no-trailing-spaces': 2,
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    'prettier/prettier': 'error',
    'no-unused-expressions': [2, { allowTaggedTemplates: true }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'react/prop-types': 'error',
    'react/require-default-props': 'error',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  overrides: [
    {
      files: ['**/*.ejs'],
      rules: {
        'max-len': ['error', { code: 130 }],
      },
    },
  ],
};
