import axios from 'axios';
import callAPI from './api';

const ROOT_API = process.env.REACT_APP_API_BASE;
const API_VERSION = 'api/v1';

export async function getLandingPage() {
  const url = `${ROOT_API}/${API_VERSION}/users/best-wisata`;
  const response = await axios.get(url);

  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getProductDetail(id) {
  const url = `${ROOT_API}/${API_VERSION}/users/product/${id}`;

  const response = await axios.get(url);

  const axiosResponse = response.data;

  return axiosResponse.data;
}
