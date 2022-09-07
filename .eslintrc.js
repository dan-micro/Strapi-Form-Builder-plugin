module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    // it looks like setting this to undefined increases performance and prevents memory leak:))
    // they say doing this causes type based rules to not work but they are working so far!
    project: undefined,
  },
  plugins: [
    '@typescript-eslint',
    'prefer-arrow',
    'unicorn',
    'react-hooks',
    'import',
    'jsdoc',
    'prettier',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:jsdoc/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    // react rules
    // react propTypes are not needed in a TypeScript only environment
    'react/prop-types': 'off',

    // enabled typescript rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    // '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: false,
        propertyDeclaration: false,
        memberVariableDeclaration: false,
      },
    ],

    // disabled typescript specific rules
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        overrides: {
          constructors: 'off',
        },
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-use-before-declare': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',

    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',

    // enabled eslint rules
    'unicorn/explicit-length-check': 'error',
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'dot-notation': 'error',
    'guard-for-in': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    'no-useless-return': 'error',
    'max-classes-per-file': ['error', 1],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'use-isnan': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      { singleReturnOnly: true, classPropertiesAllowed: true },
    ],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'no-shadow': 'off',
    'no-new-func': 'error',

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': [
      'error',
      { ignore: ['\\$.*$'] }, // all our aliases start with a $ sign
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '$*/**',
            group: 'internal',
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-unused-modules': 'warn',
    'import/no-webpack-loader-syntax': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-duplicates': ['error', { considerQueryString: true }],

    'spaced-comment': 'error',
    // disabled eslint rules
    'arrow-body-style': 'off', // TODO: this may be improved
    'arrow-parens': ['off', 'as-needed'],
    complexity: 'off',
    'eol-last': 'off',
    'linebreak-style': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'one-var': 'off',
    'quote-props': 'off',
    'space-before-function-paren': 'off',
    'valid-typeof': 'off',
    camelcase: ['error', { properties: 'never' }],
    eqeqeq: ['error', 'smart'],
    'prefer-arrow-callback': 'error',

    // jsdoc rules
    'jsdoc/require-jsdoc': 0,
    'jsdoc/require-param': 0,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/newline-after-description': 0,
  },
  overrides: [
    {
      files: ['src/*.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-var-requires': 'error',
        'jsdoc/require-returns': 0,
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              // eslint-disable-next-line @typescript-eslint/naming-convention
              FunctionComponent: {
                message: 'use React.FC instead',
                fixWith: 'FC',
              },
            },
          },
        ],
      },
    },
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'error',
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    },
  ],
};
