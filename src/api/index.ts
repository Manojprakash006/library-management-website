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
    home: {
      getAllMessages: () => httpClient.get(API_END_POINTS.home.messages),
      updateMessageStatus: (id: string, status: string) => httpClient.patch(API_END_POINTS.home.updateStatus.replace(":id", id), { status }),
      getLibraryInfo: () => httpClient.get(API_END_POINTS.home.getInfo),
      updateLibraryInfo: (data: any) => httpClient.patch(API_END_POINTS.home.updateInfo, data),
      sendReply: (id: string, message: string) => httpClient.post(API_END_POINTS.home.reply.replace(":id", id), { message }),
    },
  };
}

export default Client;