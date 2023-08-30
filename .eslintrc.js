const { defineConfig } = require('eslint-define-config')

// '@unocss'
module.exports = defineConfig({
  root: true,
  extends: ['@antfu'],
  overrides: [
    {
      files: '*.{js,ts,vue}',
      rules: {
        'no-console': ['off'],
      },
    },
  ],
})
