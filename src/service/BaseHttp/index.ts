import axios, { AxiosInstance } from "axios";

interface Config {
  headers?: object;
}

class BaseHttpClient {
  private instance: AxiosInstance;

  constructor(headers?: object) {
    const baseURL: string = process.env.REACT_APP_BASE_URL || "";

    this.instance = axios.create({
      baseURL,
      headers,
    });
  }

  get(url: string, params?: object, config: Config = {}) {
    return this.instance.get(url, {
      params,
      ...config,
    });
  }

  post(url: string, data: object) {
    return this.instance.post(url, data);
  }

  put(url: string, data: object) {
    return this.instance.put(url, data);
  }

  delete(url: string, config: Config = {}) {
    return this.instance.delete(url, config);
  }
}

const api = new BaseHttpClient();
export default api;
