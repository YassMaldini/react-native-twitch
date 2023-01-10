import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', './src/utils/test/setupFilesAfterEnv.ts'],
  setupFiles: ['./src/utils/test/setupTests.ts'],
  moduleNameMapper: {
      '\\.svg': '<rootDir>/__mocks__/svgMock.js'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  verbose: true,
});
