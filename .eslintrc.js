// eslint in javascript format so that we can have comments
module.exports = {
  plugins: ['react', 'jest'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
}
