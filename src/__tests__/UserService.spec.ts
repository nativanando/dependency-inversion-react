import CustomHttpResponse from '../classes/CustomHttpResponse';
import AxiosAdapter from '../data/AxiosAdapter';
import FetchAdapter from '../data/FetchAdapter';
import ICustomHttp from '../interfaces/ICustomHttp';
import UserService from '../services/UserService';

const userServiceWithAxiosAdapter = (): UserService => {
  const axiosAdaper: ICustomHttp = new AxiosAdapter();
  const userService: UserService = new UserService(axiosAdaper);

  return userService;
};

const userServiceWithFetchAdapter = (): UserService => {
  const fetchAdapter: ICustomHttp = new FetchAdapter();
  const userService: UserService = new UserService(fetchAdapter);

  return userService;
};

const validGithubUsername = () => {
  return { username: 'nativanando' };
};

describe('Github API calls', () => {
  test('Should search an user from github API using axios adapter', async () => {
    const sut = userServiceWithAxiosAdapter();
    const user = validGithubUsername();
    const response: CustomHttpResponse = await sut.searchGithubUser(user);

    expect(response.data.login).toEqual(user.username);
    expect(response.status).toEqual(200);
  });

  test('Should search an user from github API using fetch adapter', async () => {
    const sut = userServiceWithFetchAdapter();
    const user = validGithubUsername();
    const response: CustomHttpResponse = await sut.searchGithubUser(user);

    expect(response.data.login).toEqual(user.username);
    expect(response.status).toEqual(200);
  });
});
