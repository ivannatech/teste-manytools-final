import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

export default {
  refreshToken: async (token) => {
    const data = { token };
    return (json = await api.post('/auth/refresh', data));
  },
  signIn: async (email, password) => {
    const data = { email, password };

    const json = await api.post('/login', data);

    return json;
  },
  signUp: async (name, email, password) => {
    const data = { name, email, password };

    const req = await api.post('/user', data);

    const json = await req.json();

    return json;
  },
  getToken: async () => {
    return await AsyncStorage.getItem('@token');
  },
  setToken: async (token) => {
    return await AsyncStorage.setItem('@token', token);
  },
  removeToken: async () => {
    return await AsyncStorage.removeItem('@token');
  },
};
