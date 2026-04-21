import httpClient from "../../api/httpClient";
import { API_END_POINTS } from "../../api/httpEndPoints";

export const getBrowseBooksApi = async (params?: { page: number; limit: number; search?: string; category?: string }) => {
  const response = await httpClient.get(API_END_POINTS.collection.browseBooks, { params });
  return response.data;
};
