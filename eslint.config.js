import reactNativeCommunity from '@react-native-community/eslint-config'
import prettier from 'eslint-config-prettier'

export default [
  reactNativeCommunity, // React Native Community rules
  prettier, // Disables ESLint rules that conflict with Prettier
  {
    ignores: ['node_modules', 'dist', 'build'],
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: {
      prettier: {}, // Enables Prettier as an ESLint plugin
    },

    rules: {
      'prettier/prettier': 'warn', // Show Prettier errors as warnings
    },
  },
]
