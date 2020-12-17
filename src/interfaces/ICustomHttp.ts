import CustomHttpRequest from '../classes/CustomHttpRequest';
import CustomHttpResponse from '../classes/CustomHttpResponse';

interface ICustomHttp {
  get(httpCustomRequest: CustomHttpRequest): Promise<CustomHttpResponse>;

  post(httpCustomRequest: CustomHttpRequest): Promise<CustomHttpResponse>;

  put(httpCustomRequest: CustomHttpRequest): Promise<CustomHttpResponse>;

  patch(httpCustomRequest: CustomHttpRequest): Promise<CustomHttpResponse>;

  delete(httpCustomRequest: CustomHttpRequest): Promise<CustomHttpResponse>;
}

export default ICustomHttp;
