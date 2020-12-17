import axios from 'axios';

import ICustomHttp from '../interfaces/ICustomHttp';

import CustomHttpRequest from '../classes/CustomHttpRequest';
import CustomHttpResponse from '../classes/CustomHttpResponse';

class AxiosAdapter implements ICustomHttp {
  public async get<T>(
    customHttpRequest: CustomHttpRequest<T>,
  ): Promise<CustomHttpResponse> {
    const response = await axios.get(customHttpRequest.path);
    return new CustomHttpResponse(response.data, response.status);
  }

  public async post<T>(
    customHttpRequest: CustomHttpRequest<T>,
  ): Promise<CustomHttpResponse> {
    const response = await axios.post(
      customHttpRequest.path,
      customHttpRequest.params,
    );
    return new CustomHttpResponse(response.data, response.status);
  }

  public async put<T>(
    customHttpRequest: CustomHttpRequest<T>,
  ): Promise<CustomHttpResponse> {
    const response = await axios.put(
      customHttpRequest.path,
      customHttpRequest.params,
    );
    return new CustomHttpResponse(response.data, response.status);
  }

  public async patch<T>(
    customHttpRequest: CustomHttpRequest<T>,
  ): Promise<CustomHttpResponse> {
    const response = await axios.patch(
      customHttpRequest.path,
      customHttpRequest.params,
    );
    return new CustomHttpResponse(response.data, response.status);
  }

  public async delete<T>(
    customHttpRequest: CustomHttpRequest<T>,
  ): Promise<CustomHttpResponse> {
    const response = await axios.delete(customHttpRequest.path);
    return new CustomHttpResponse(response.data, response.status);
  }
}

export default AxiosAdapter;
