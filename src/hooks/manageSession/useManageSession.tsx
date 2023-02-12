import { request } from "../../utils/request";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import API from "./constraints";
import { ICardResponse } from "../../interfaces/cards";

interface IManageSessionResponse{
    id: string;
    object: string;
    configuration: string;
    created: number;
    customer: string;
    flow?: any;
    livemode: boolean;
    locale?: any;
    on_behalf_of?: any;
    return_url: string;
    url: string;
}

export function useManageSession(): UseQueryResult<
  {
    data: IManageSessionResponse
  },
  Error
> {
  return useQuery(["user-manage-session"], () =>
    request(
      {
        path: API.CURRENT_USER_STRIPE_MANAGE_SESSION.path,
        method: API.CURRENT_USER_STRIPE_MANAGE_SESSION.method,
      },
      null,
      true
    )
  );
}
