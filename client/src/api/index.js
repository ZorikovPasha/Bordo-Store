import axios from "axios";

export const apiConfig = {
  returnRejectedPromiseOnError: true,
  baseURL: process.env.NODE_ENV === "production" ? "https://reactliebherrback.glitch.me/" : "http://localhost:3333",
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}

export class Axios {
  _axios;
  constructor(config) {
    this._axios =  axios.create(config);
  }
}

class Api extends Axios {
  constructor(config) {
    super(config);
  }

  success = (response) =>  {
    return response.data;
  }

  error = (error) => {
    throw error;
  }

  get = (url) => {
    return this._axios.get(url)
      .then(this.success)
      .catch((error) => {
        throw error;
    });
    }
  post = (url, data) => {
    return this._axios.post(url, data)
      .then(this.success)
      .catch((error) => {
        return error;
      });
  }
}

class PublicApi extends Api {
  constructor(config) {
    super(config);
  }

  getItems = () => {
    return this.get('/product/all');
  };
}

export const publicApi = new PublicApi(apiConfig);