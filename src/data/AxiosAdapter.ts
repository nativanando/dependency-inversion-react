import axios from 'axios';

import ICustomHttp from '../interfaces/ICustomHttp';

import CustomHttpRequest from '../classes/CustomHttpRequest';
import CustomHttpResponse from '../classes/CustomHttpResponse';

class AxiosAdapter implements ICustomHttp {
  public async get(
    customHttpRequest: CustomHttpRequest,
  ): Promise<CustomHttpResponse> {
    const response = await axios.get(customHttpRequest.path);
    return new CustomHttpResponse(response.data, response.status);
  }

  public async post(
    customHttpRequest: CustomHttpRequest,
  ): Promise<CustomHttpResponse> {
    const response = await axios.post(
      customHttpRequest.path,
      customHttpRequest.params,
    );
    return new CustomHttpResponse(response.data, response.status);
  }

  public async put(
    customHttpRequest: CustomHttpRequest,
  ): Promise<CustomHttpResponse> {
    const response = await axios.put(
      customHttpRequest.path,
      customHttpRequest.params,
    );
    return new CustomHttpResponse(response.data, response.status);
  }

  public async patch(
    customHttpRequest: CustomHttpRequest,
  ): Promise<CustomHttpResponse> {
    const response = await axios.patch(
      customHttpRequest.path,
      customHttpRequest.params,
    );
    return new CustomHttpResponse(response.data, response.status);
  }

  public async delete(
    customHttpRequest: CustomHttpRequest,
  ): Promise<CustomHttpResponse> {
    const response = await axios.delete(customHttpRequest.path);
    return new CustomHttpResponse(response.data, response.status);
  }
}

export default AxiosAdapter;
