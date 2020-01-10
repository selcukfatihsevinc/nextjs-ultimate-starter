import isomorphicFetch from 'isomorphic-fetch';
import qs from 'qs';

const merge = (...args) => Object.assign({}, ...args);
const isQueryString = method => method === 'GET' || method === 'HEAD' || method === 'DELETE';
const buildQueryString = (url, params) => `${url}?${qs.stringify(params)}`;

export const fetch = (url, { method = 'GET', params, token }) => {
  let body;
  let getUrl = url;

  if (isQueryString(method)) {
    getUrl = buildQueryString(getUrl, params);
  } else {
    body = JSON.stringify(params);
  }

  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8',
  };

  if (token) {
    headers = merge(headers, {
      [token.key]: token.value,
    });
  }

  const req = new Request(getUrl, {
    headers: new Headers(headers),
    method,
    body,
  });

  return isomorphicFetch(req).then(response => {
    if (response.ok) {
      return response;
    }

    throw new Error(`Fetch error status: ${response.status}`);
  });
};

export const fetchJSON = (url, args) => fetch(url, args).then(response => response.json());
export const get = (url, args) => fetchJSON(url, merge(args, { method: 'GET' }));
export const post = (url, args) => fetchJSON(url, merge(args, { method: 'POST' }));
export const put = (url, args) => fetchJSON(url, merge(args, { method: 'PUT' }));
export const remove = (url, args) => fetchJSON(url, merge(args, { method: 'DELETE' }));
