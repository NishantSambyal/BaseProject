import { ApiRoutes } from '../../network/apiRoute';
import { handleAPICall } from '../../network/useApiController';

const getProduct = () => {
  return new Promise((resolve, reject) => {
    handleAPICall({
      handleSuccess: (data: any) => {
        resolve(data);
      },
      handleFailure: (error: any) => {
        reject(error);
      },
      route: ApiRoutes.products.getProducts,
    });
  });
};

export { getProduct };

