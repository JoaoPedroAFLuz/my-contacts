import { APIError } from '../../Errors/apiError';
import { delay } from '../../Utils/delay';

export class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path, options) {
    return this.makeRequest(path, { method: 'GET', headers: options?.headers });
  }

  async post(path, options) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    });
  }

  async makeRequest(path, options) {
    await delay(500);

    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.append(key, value);
      });
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: options.method,
      headers,
      body: JSON.stringify(options.body),
    });

    let responseBody = null;
    const contentType = response.headers.get('content-type');

    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }
}
