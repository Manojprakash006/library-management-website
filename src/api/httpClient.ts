import axios from "axios";
import { ClearLocalStorage, GetLocalStorage } from "../utils/localStorage";

const backEndUrl: string = import.meta.env.VITE_API_URL;

const httpClient = axios.create({
  baseURL: backEndUrl,
  timeout: 50000000,
  headers: {
    'Content-Type' : 'application/json',
  },
});

httpClient.interceptors.request.use((config) => {
  const token = GetLocalStorage('authToken');
  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error?.response &&
      error?.response?.status === 401 &&
      error?.response?.data?.status === 'session_expired'
    ) {
      localStorage.removeItem('authToken');
      ClearLocalStorage();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default httpClient;