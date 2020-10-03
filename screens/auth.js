import { AsyncStorage } from 'react-native';

export const webUrl = 'https://ab0c000bd4f9.ngrok.io'

export const storeUsername = async (username) => {
    try {
        await AsyncStorage.setItem(
          'username',
          username
        );
      } catch (error) {
        // Error saving data
      }
}

export const getUsername = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        return value
      }
    } catch (error) {
      return 'Unknown username'
    }
  };