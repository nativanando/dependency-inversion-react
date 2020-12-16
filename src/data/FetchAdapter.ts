import ICustomHttp from '../interfaces/ICustomHttp';

import CustomHttpRequest from '../classes/CustomHttpRequest';
import CustomHttpResponse from '../classes/CustomHttpResponse';

class FetchAdapter implements ICustomHttp {
  public async get<T extends any>(
    customHttpRequest: CustomHttpRequest<T>,
  ): Promise<CustomHttpResponse> {
    const response = await fetch(customHttpRequest.path);
    const data = await response.json();

    return new CustomHttpResponse(data, response.status);
  }

  public async post<T extends any>(
    customHttpRequest: CustomHttpRequest<T>,
  ): Promise<CustomHttpResponse> {
    const response = await fetch(customHttpRequest.path, {
      method: 'POST',
      body: JSON.stringify(customHttpRequest.params),
    });
    const data = await response.json();

    return new CustomHttpResponse(data, response.status);
  }

  public async put<T extends any>(
    customHttpRequest: CustomHttpRequest<T>,
  ): Promise<CustomHttpResponse> {
    const response = await fetch(customHttpRequest.path, {
      method: 'PUT',
      body: JSON.stringify(customHttpRequest.params),
    });
    const data = await response.json();

    return new CustomHttpResponse(data, response.status);
  }

  public async patch<T extends any>(
    customHttpRequest: CustomHttpRequest<T>,
  ): Promise<CustomHttpResponse> {
    const response = await fetch(customHttpRequest.path, {
      method: 'PATCH',
      body: JSON.stringify(customHttpRequest.params),
    });
    const data = await response.json();

    return new CustomHttpResponse(data, response.status);
  }

  public async delete<T extends any>(
    customHttpRequest: CustomHttpRequest<T>,
  ): Promise<CustomHttpResponse> {
    const response = await fetch(customHttpRequest.path, {
      method: 'DELETE',
      body: JSON.stringify(customHttpRequest.params),
    });
    const data = await response.json();

    return new CustomHttpResponse(data, response.status);
  }
}

export default FetchAdapter;