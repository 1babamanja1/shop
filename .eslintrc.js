module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
    'import/prefer-default-export': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'max-len': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-one-expression-per-line': 'warn',
  },
};
