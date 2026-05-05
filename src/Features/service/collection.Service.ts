import httpClient from "../../api/httpClient";
import { API_END_POINTS } from "../../api/httpEndPoints";

export const getBrowseBooksApi = async (params?: { page: number; limit: number; search?: string; category?: string }) => {
  const response = await httpClient.get(API_END_POINTS.collection.browseBooks, { params });
  return response.data;
};

export const getCollectionStatsApi = async () => {
  const response = await httpClient.get(API_END_POINTS.collection.collectionStats);
  return response.data;
};

export const getTopReviewsApi = async () => {
  const response = await httpClient.get('/library/books/books/public/top-reviews');
  return response.data;
};
