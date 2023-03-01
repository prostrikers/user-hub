import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/request";
import API from "./constants";

export default function useFindPlans() {
  return useQuery(["meta-plans"], () =>
    request(
      {
        path: `${API.FIND_PLANS.path}`,
        method: API.FIND_PLANS.method,
      },
      null,
      true
    )
  );
}
