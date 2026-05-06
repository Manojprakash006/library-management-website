export const API_END_POINTS = {
  auth: {
    login: "/library/members/member-auth/login",
    register: "/library/members/member-auth/register",
    forgotPassword: "/library/members/member-auth/forgot-password",
    resetPassword: "/library/members/member-auth/reset-password",
  },

  collection: {
    browseBooks: "/library/books/books",
    bookRequest: "/library/requests/requests",
    bookReviews: "library/members/member-dashboard/book-reviews",
    likesCount: "library/books/books",
    totalMembers: "/library/members/public-stats/member-count",
    collectionStats: "/library/books/books/public/collection-stats",
    visitorStats: "/library/members/library-visits/public/stats",
  },
  contact: {
    sendMessage: "/library/members/contact/send",
    libraryInfo: "/library/members/contact/info",
  },
};