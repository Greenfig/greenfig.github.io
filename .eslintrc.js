module.exports = {
    root: true,

    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },

    env: {
        browser: true
    },

    extends: [
        // https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        '@vue/standard'
    ],

    // required to lint *.vue files
    plugins: ['vue'],

    globals: {
        ga: true, // Google Analytics
        cordova: true,
        __statics: true,
        process: true,
        Capacitor: true,
        chrome: true
    },

    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow paren-less arrow functions
        'arrow-parens': 'off',
        'one-var': 'off',

        'import/first': 'off',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'prefer-promise-reject-errors': 'off',

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', { singleline: 2, multiline: { max: 1, allowFirstLine: true } }],
        'vue/singleline-html-element-content-newline': ['error', { ignoreWhenNoAttributes: true, ignoreWhenEmpty: true }],
        'multiline-ternary': ['error', 'always-multiline']
    }
}
