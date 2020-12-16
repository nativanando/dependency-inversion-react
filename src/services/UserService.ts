import CustomHttpRequest from '../classes/CustomHttpRequest';
import CustomHttpResponse from '../classes/CustomHttpResponse';
import ICustomHttp from '../interfaces/ICustomHttp';

const PUBLIC_URL = 'https://api.github.com/users';

export interface IUser {
  username: string;
}

class UserService {
  constructor(private readonly customHttpAdapter: ICustomHttp) {}

  public searchGithubUser(user: IUser): Promise<CustomHttpResponse> {
    const customHttpResponse: Promise<CustomHttpResponse> = this.customHttpAdapter.get(
      new CustomHttpRequest(`${PUBLIC_URL}/${user.username}`),
    );
    return customHttpResponse;
  }
}

export default UserService;
