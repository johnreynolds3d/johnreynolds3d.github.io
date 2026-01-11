import globals from 'globals';
import html from 'eslint-plugin-html';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ["**/*.min.js", "js/libs/**", "dist/**", "service-worker.js"],
  },
  {
    files: ['**/*.js', '**/*.html'],
    plugins: {
      html,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        THREE: 'readonly',
        WEBVR: 'readonly',
        Ammo: 'readonly',
      },
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['warn', { varsIgnorePattern: '^(init|animate|render)$' }],
    },
  },
  eslintConfigPrettier,
];
