import { baseURL } from '../config/env';
export const authURL = `${baseURL}/auth`;

function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.error || 500);
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
  response.json().then(handleErrors);
}

async function postAPI(subUrl, body) {
  const response = await fetch(`${baseURL}/${subUrl}/login`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  response.json().then(handleErrors);
}

export { fetchAPI, postAPI };
