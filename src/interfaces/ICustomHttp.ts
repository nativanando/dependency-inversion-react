import HttpCustomRequest from '../classes/CustomHttpRequest';
import HttpCustomResponse from '../classes/CustomHttpResponse';

interface ICustomHttp {
  get<T extends unknown>(
    httpCustomRequest: HttpCustomRequest<T>,
  ): Promise<HttpCustomResponse>;

  post<T extends unknown>(
    httpCustomRequest: HttpCustomRequest<T>,
  ): Promise<HttpCustomResponse>;

  put<T extends unknown>(
    httpCustomRequest: HttpCustomRequest<T>,
  ): Promise<HttpCustomResponse>;

  patch<T extends unknown>(
    httpCustomRequest: HttpCustomRequest<T>,
  ): Promise<HttpCustomResponse>;

  delete<T extends unknown>(
    httpCustomRequest: HttpCustomRequest<T>,
  ): Promise<HttpCustomResponse>;
}

export default ICustomHttp;
