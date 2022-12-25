import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/request";
import API from "./constants";

export default function useCompletedBookings(id: string) {
  return useQuery(["meta-completed-bookings"], () =>
    request(
      {
        path: `${API.COMPLTED_BOOKINGS.path}/${id}`,
        method: API.COMPLTED_BOOKINGS.method,
      },
      null,
      true
    )
  );
}
