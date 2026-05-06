module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-reanimated|react-native-screens|react-native-safe-area-context|@react-native-community|@react-native-async-storage|expo|expo-localization|@shopify/flash-list|react-redux|@reduxjs/toolkit|immer|i18next|react-i18next)/)',
  ],
  setupFiles: ['./jest.setup.js'],
};
