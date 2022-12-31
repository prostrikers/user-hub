import { request } from "../../utils/request";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import API from "./constraints";
import { ITransactionDetails } from "../../interfaces/transaction";

export function useTransactions(): UseQueryResult<
  {
    data: ITransactionDetails[];
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
