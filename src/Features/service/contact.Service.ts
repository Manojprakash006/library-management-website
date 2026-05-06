import httpClient from "../../api/httpClient";
import { API_END_POINTS } from "../../api/httpEndPoints";

export const sendContactMessageApi = async (data: any) => {
  try {
    const response = await httpClient.post(API_END_POINTS.contact.sendMessage, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to send message";
  }
};

export const getLibraryInfoApi = async () => {
  try {
    const response = await httpClient.get(API_END_POINTS.contact.libraryInfo);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Failed to fetch library info";
  }
};
