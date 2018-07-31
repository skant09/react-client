import { baseURL } from '../config/env';
export const authURL = `${baseURL}/auth`;

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

async function fetchAPI(subUrl, body) {
  const response = await fetch(`${baseURL}/${subUrl}/login`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  handleErrors(response);
}

async function postAPI(subUrl, body) {
  const response = await fetch(`${baseURL}/${subUrl}/login`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  handleErrors(response);
}

export { fetchAPI, postAPI };
