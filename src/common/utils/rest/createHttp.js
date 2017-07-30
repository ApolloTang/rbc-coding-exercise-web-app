import fetch from 'isomorphic-fetch';
import _ from 'lodash';

// -------------
//    GET
// -------------
const get = (url, /* params = {} */ ) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  const init = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
  };

  return fetch(url, init).then(
    response => {
      if (!response.ok) {
        // https://www.tjvantoll.com/2015/09/13/fetch-and-errors/#comment-2254295840
        // throw Error(response.statusText);
        return { httpError: response };
      }
      return response.json()
    }
  );
};

// -------------
//    POST
// -------------

const post = (url, payload, /* opts */ ) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  const requestBody = JSON.stringify(payload);

  const init = {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: requestBody
  };

  return fetch(url, init).then(
    response => response.json()
  );
};

// -------------
//    PUT
// -------------
const put = (url, payload, /* opts */ ) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  const requestBody = JSON.stringify(payload);

  const init = {
    method: 'PUT',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: requestBody
  };

  return fetch(url, init).then(
    response => response.json()
  );
};


export default { get, post, put /* , del */ };
