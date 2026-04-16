import httpClient from "../../api/httpClient";
import { API_END_POINTS } from "../../api/httpEndPoints";

export const getBrowseBooksApi = async () => {
  const response = await httpClient.get(API_END_POINTS.collection.browseBooks);
  return response.data;
};
