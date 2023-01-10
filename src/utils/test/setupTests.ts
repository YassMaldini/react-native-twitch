import 'react-native-reanimated/lib/reanimated2/jestUtils';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import * as ReactNative from 'react-native';

jest.doMock('react-native', () => {
  return Object.setPrototypeOf(
    {
      Share: {
        ...ReactNative.Share,
        share: jest.fn(),
      }
    },
    ReactNative,
  );
});

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useRoute: jest.fn(),
    useNavigation: jest.fn()
}));

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useMutation: jest.fn()
}));

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

jest.mock('redux-persist', () => {
    const real = jest.requireActual('redux-persist');
    return {
      ...real,
      persistReducer: jest
        .fn()
        .mockImplementation((config, reducers) => reducers),
    };
  });

jest.mock('redux-persist/integration/react', () => ({ PersistGate: (props: any) => props.children }));

jest.mock('@react-native-async-storage/async-storage', () => {
    return {
        getItem: async (...args: any) => args,
        setItem: async (...args: any) => args,
        removeItem: async (...args: any) => args
    };
});