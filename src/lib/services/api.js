class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  search(query, page = 1) {
    return fetch(`${this._baseUrl}/search/photos?query=${query}&page=${page}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`,
      },
    }).then((res) => res.json());
  }
}

const api = new Api({
  baseUrl: 'https://api.unsplash.com/',
  apiKey: 'IeCjn9OyTne41SW4UBklyy96cNSkg5L_KCdLi3zsutI',
});

export default api;
