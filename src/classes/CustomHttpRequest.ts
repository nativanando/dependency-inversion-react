class CustomHttpRequest<T> {
  public constructor(
    public path: string,
    public params?: T,
    public token?: string,
  ) {
    this.path = path;
    this.params = params;
    this.token = token;
  }
}

export default CustomHttpRequest;
