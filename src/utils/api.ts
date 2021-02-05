import axios from 'axios';
import {Alert} from 'react-native';
const getAxiosInstance = async () => {
  const headers: {[k: string]: string} = {};
  headers['X-Parse-Application-Id'] =
    'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi';
  headers['X-Parse-REST-API-Key'] =
    'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj';

  const apiServerUrl = 'https://api.korec-dev.scrum-dev.com/api';

  const axiosInstance = axios.create({
    baseURL: apiServerUrl,
    headers,
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      if ([200, 201].includes(response.status)) {
        const result = response.data;
        result.statusCode = response.status;
        return response.data;
      }
      return Promise.reject(response);
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return axiosInstance;
};
const request = async (url: string, data = {}, configs = {}) => {
  try {
    const API = await getAxiosInstance();
    return API({url, data, method: 'POST', ...configs});
  } catch (error) {
    return Promise.reject(error);
  }
};
export default request;
