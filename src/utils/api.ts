import axios from 'axios';

const defaultBaseUrl =
  process.env.REACT_APP_API_BASEURL || 'http://localhost:8080/test/v1.0/';

// Todo : Make default URL based on Environment ['dev', 'staging', 'test', 'prod']

const apiClient = (baseUrl: string = defaultBaseUrl) => {
  const service = axios.create({
    baseURL: baseUrl
  });

  return service;
};

export default apiClient;
