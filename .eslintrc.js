const disabled = 0
const error = 2

const rules = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'arrow-parens': [error, 'always'],
        'curly': [error, 'all'],
        'indent': [error, 4, {
            "SwitchCase": 1
        }],
        'no-console': [error, { allow: ['warn', 'error', 'info'] }],
        'no-debugger': error,
        'no-multiple-empty-lines': [error, {
            max: 1,
            maxBOF: 0,
        }],
        'no-underscore-dangle': error,
        'require-atomic-updates': error,
        'semi': [error, 'never'],
        'newline-per-chained-call': disabled,
        'max-len': [error, {
            code: 190
        }],
        'max-classes-per-file': disabled,
        'promise/always-return': error,
        'quote-props': disabled,
        'object-curly-newline': disabled,
        'promise/no-callback-in-promise': disabled,
        'promise/catch-or-return': ["error", {
            "allowThen": true
        }],
        '@typescript-eslint/explicit-module-boundary-types': "error",
        '@typescript-eslint/type-annotation-spacing': "error",
        '@typescript-eslint/no-unused-vars': [error, {
            'argsIgnorePattern': '^_',
            'varsIgnorePattern': '^_'
        }],
        '@typescript-eslint/no-explicit-any': disabled,
        '@typescript-eslint/no-empty-function': disabled,
        '@typescript-eslint/no-non-null-assertion': disabled
    },
    'overrides': [
        {
            'files': ['*.js'],
            'rules': {
                '@typescript-eslint/no-var-requires': disabled
            }
        }
    ]
}
module.exports = rules
exports = rules
