module.exports = {
  env: {
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import-helpers'],
  rules: {
    'no-param-reassign': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/no-unresolved': 'off',
    'import/extensions': ['error', 'ignorePackages'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@shared/',
          '/^~/',
          '/^#lib/',
          '/^#services/',
          '/^#utils/',
          '/^#config/',
          '/^#middlewares/',
          '/^#controllers/',
          '/^#jobs/',
          '/^#views/',
          '/^#models/',
          '/^#schemas/',
          '/^#styles/',
          '/^#assets/',
          '/^#layouts/',
          '/^#pages/',
          '/^#partials/',
          '/^#components/',
          '/^#behaviors/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': [
        {
          rootPathSuffix: './src/services',
          rootPathPrefix: '#services/',
        },
        {
          rootPathSuffix: './src/config',
          rootPathPrefix: '#config/',
        },
        {
          rootPathSuffix: './src/views',
          rootPathPrefix: '#views/',
        },
        {
          rootPathSuffix: './src/views/pages',
          rootPathPrefix: '#pages/',
        },
        {
          rootPathSuffix: './src/views/components',
          rootPathPrefix: '#components/',
        },
        {
          rootPathSuffix: './src/views/behaviors',
          rootPathPrefix: '#behaviors/',
        },
      ],
    },
  },
};
