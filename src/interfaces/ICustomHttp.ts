import HttpCustomRequest from '../classes/CustomHttpRequest';
import HttpCustomResponse from '../classes/CustomHttpResponse';

interface ICustomHttp {
  get<T>(httpCustomRequest: HttpCustomRequest<T>): Promise<HttpCustomResponse>;

  post<T>(httpCustomRequest: HttpCustomRequest<T>): Promise<HttpCustomResponse>;

  put<T>(httpCustomRequest: HttpCustomRequest<T>): Promise<HttpCustomResponse>;

  patch<T>(
    httpCustomRequest: HttpCustomRequest<T>,
  ): Promise<HttpCustomResponse>;

  delete<T>(
    httpCustomRequest: HttpCustomRequest<T>,
  ): Promise<HttpCustomResponse>;
}

export default ICustomHttp;
