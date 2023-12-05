module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        'indent': ['warn', 4],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'object-curly-spacing': ['warn', 'always'],
        'vue/multi-word-component-names': 0,
        'vue/html-indent': ['warn', 4],
        'vue/html-quotes': ['warn', 'double'],
        'vue/prop-name-casing': ['warn', 'camelCase'],
        'vue/require-default-prop': 1,
        'vue/require-prop-types': 1,
        'vue/no-reserved-component-names': 0,
    },
    'ignorePatterns': ['dist/*'],
};