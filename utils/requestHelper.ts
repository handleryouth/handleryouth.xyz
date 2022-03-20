import axios from 'axios';

const axiosInstance = axios.create({
  method: 'POST',
  baseURL: process.env.WEBSITE_URL + 'api/graphql',
});

export default axiosInstance;
