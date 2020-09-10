import axios from 'axios';
import { baseURL } from '../config';
// import AsyncStorage from '@react-native-community/async-storage';

const backendAPI = axios.create({
  baseURL,
});

// backendAPI.interceptors.request.use(
//   async (config) => {
//     const token = await AsyncStorage.getItem('Token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${ token}`;
//       config.headers['Content-Type'] = `application/json`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error)
//   },
// );
export default backendAPI;