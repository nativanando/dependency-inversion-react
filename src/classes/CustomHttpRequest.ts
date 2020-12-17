class CustomHttpRequest {
  public constructor(
    public path: string,
    public params?: any,
    public token?: string,
  ) {
    this.path = path;
    this.params = params;
    this.token = token;
  }
}

export default CustomHttpRequest;
