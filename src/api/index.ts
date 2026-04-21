import httpClient from "./httpClient";
import { API_END_POINTS } from "./httpEndPoints";

class Client {
  member = {
    auth: {
      login: (data: any) => httpClient.post(API_END_POINTS.auth.login, data),
      register: (data: any) =>
        httpClient.post(API_END_POINTS.auth.register, data),
    },

    browseBooks: {
      browseBooks: () => httpClient.get(API_END_POINTS.collection.browseBooks),
      bookRequest: (data: any) =>
        httpClient.post(API_END_POINTS.collection.bookRequest, data),
    },
  };
}

export default Client;