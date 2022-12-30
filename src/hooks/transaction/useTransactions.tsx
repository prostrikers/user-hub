import { request } from "../../utils/request";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import API from "./constraints";
import { IBookingDetails } from "../../interfaces/booking";

export function useTransactions(): UseQueryResult<
  {
    data: IBookingDetails[];
  },
  Error
> {
  return useQuery(["user-transactions"], () =>
    request(
      {
        path: API.CURRENT_USER_TRANSACTIONS.path,
        method: API.CURRENT_USER_TRANSACTIONS.method,
      },
      null,
      true
    )
  );
}
