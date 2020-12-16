class CustomHttpResponse {
  public constructor(public data: any, public status: number) {
    this.status = status;
    this.data = data;
  }
}
export default CustomHttpResponse;
