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
    'no-unused-vars': 1,
    'react/prop-types': 1,
    'import/prefer-default-export': 1,
    'react/react-in-jsx-scope': 1,
    'max-len': 1,
    'react/jsx-one-expression-per-line': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
  },
};
