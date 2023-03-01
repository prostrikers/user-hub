import { request } from "../../utils/request";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import API from "./constraints";
import { ICardResponse } from "../../interfaces/cards";

export function useCards(): UseQueryResult<
  {
    data: {
      object: string;
      data: ICardResponse[];
    };
  },
  Error
> {
  return useQuery(["user-cards"], () =>
    request(
      {
        path: API.CURRENT_USER_CARDS.path,
        method: API.CURRENT_USER_CARDS.method,
      },
      null,
      true
    )
  );
}
