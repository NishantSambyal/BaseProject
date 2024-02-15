import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { networkConfiguration } from '../utils/appConfig';

const axiosConfiguration = (url: string = ''): AxiosInstance => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: `${url}`,
  };

  const axios: AxiosInstance = Axios.create(axiosConfig);

  axios.defaults.timeout = 60000;

  const requestHandler = async (
    request: AxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig<any>> => {
    if (request.headers) {
      request.headers.Authorization = networkConfiguration.authorization
        ? networkConfiguration.authorization
        : request.headers.Authorization;
      request.headers['Channel-ID'] = networkConfiguration.channelID
        ? networkConfiguration.channelID
        : request.headers['Channel-ID'];
    }

    return request as InternalAxiosRequestConfig<any>;
  };

  const responseErrorHandler = async (error: AxiosError) => {
    return Promise.reject(error);
  };

  axios.interceptors.request.use(
    (request: AxiosRequestConfig) => requestHandler(request),
    (error: AxiosError) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => responseErrorHandler(error),
  );

  return axios;
};

export default axiosConfiguration;
