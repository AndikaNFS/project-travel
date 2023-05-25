import callAPI from './api';

const ROOT_API = process.env.REACT_APP_API_BASE;
const API_VERSION = 'api/v1';

export async function setSignIn(data) {
  console.log(data);
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function setSignUp(data) {
  console.log(data);
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
}
