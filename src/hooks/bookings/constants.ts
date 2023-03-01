const API = {
  COMPLTED_BOOKINGS: {
    path: "bookings/book-now",
    method: "POST",
  },
  CURRENT_USER_BOOKINGS: { path: "bookings/me", method: "GET" },
  CREATE_OPENFIELD_BOOKING: {
    path: "bookings/book-open",
    method: "POST",
  },
};

export default API;
