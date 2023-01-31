export class APIError extends Error {
  constructor(response, body) {
    super();
    this.name = 'API Error';
    this.message = `${response.status} - ${body?.error || response.statusText}`;
  }
}
