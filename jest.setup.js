// Mock react-native-mmkv
jest.mock('react-native-mmkv', () => ({
  createMMKV: jest.fn(() => ({
    getString: jest.fn(),
    set: jest.fn(),
    delete: jest.fn(),
    contains: jest.fn(),
    getBoolean: jest.fn(),
    getNumber: jest.fn(),
    getAllKeys: jest.fn().mockReturnValue([]),
    clearAll: jest.fn(),
  })),
}));

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

// Mock expo-localization
jest.mock('expo-localization', () => ({
  getLocales: jest.fn(() => [{ languageCode: 'tr' }]),
  locale: 'tr-TR',
}));
