import callAPI from './api';
import axios from 'axios';

const ROOT_API = process.env.REACT_APP_API_BASE;
const API_VERSION = 'api/v1';

export async function setSignIn(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function setSignUp(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function getEmail(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/get-email`;
  const response = await axios.get(url);
  return response.data;
}

export async function setRequestResetPassword(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/request-reset-password`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
}
