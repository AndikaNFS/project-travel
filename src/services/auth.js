import callAPI from './api';

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

export async function setRequestResetPassword(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/request-reset-password`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function setResetPassword(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/reset-password/${data._id}/${data.token}`;

  console.log(data);

  console.log(url);
  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}
