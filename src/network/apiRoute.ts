import { AxiosInstance } from 'axios';
import { networkConfiguration } from '../utils/appConfig';
import { apiConstants } from './apiConstants';
import axiosConfiguration from './axiosConfiguration';

const apiService: AxiosInstance = axiosConfiguration(
  networkConfiguration.BASE_URL,
);
export const ApiRoutes = {
  products: {
    getProducts: () => apiService.get(apiConstants.posts),
  },
};
