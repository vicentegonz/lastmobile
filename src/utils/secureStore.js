import * as SecureStore from 'expo-secure-store';

const secureStore = {
  save: async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  },
  getValue: async (key) => {
    const result = await SecureStore.getItemAsync(key);
    return result;
  },
  delete: async (key) => {
    await SecureStore.deleteItemAsync(key);
  },
};

export default secureStore;
