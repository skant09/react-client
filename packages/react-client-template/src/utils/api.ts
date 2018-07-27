import { baseURL } from '../config/env';
export const authURL = `${baseURL}/auth`;

function handleErrors(response: Response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

async function fetchAPI (subUrl: string, body: object): Promise<any> {
  const response: Response = await fetch(`${baseURL}/${subUrl}/login`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
  });
  handleErrors(response)
}

async function postAPI (subUrl: string, body: object): Promise<any> {
  const response: Response = await fetch(`${baseURL}/${subUrl}/login`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
  });
  handleErrors(response)
}

export { fetchAPI, postAPI }