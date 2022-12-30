import { request } from "../../utils/request";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import API from "./constants";
import { IBookingDetails } from "../../interfaces/bookings";

export function useMyBookings(): UseQueryResult<
  {
    data: IBookingDetails[];
  },
  Error
> {
  return useQuery(["current-user-bookings"], () =>
    request(
      {
        path: API.CURRENT_USER_BOOKINGS.path,
        method: API.CURRENT_USER_BOOKINGS.method,
      },
      null,
      true
    )
  );
}
