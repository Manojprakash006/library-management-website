import httpClient from "../api/httpClient";
import { API_END_POINTS } from "../api/httpEndPoints"; 

export const registerMemberApi = async (data: any) => {
  
  const response = await httpClient.post(API_END_POINTS.auth.register, data);

  return response.data;
};

export const loginMemberApi = async (data: any) => {
  const response = await httpClient.post(API_END_POINTS.auth.login, data);

  return response.data;
}