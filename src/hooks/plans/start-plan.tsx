import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { IRestApiResponse } from "../../interfaces/api-response";
import { request } from "../../utils/request";
import API from "./constants";

export const useStartPlanMutation = () => {
  return useMutation(
    (data: { planId: string }) =>
      request(
        {
          path: `${API.START_PLAN_SUBSCRIPTION.path}`,
          method: API.START_PLAN_SUBSCRIPTION.method,
        },
        data,
        true
      ),
    {
      onSuccess: (response: IRestApiResponse) => {
        if (response.statusCode == 201) {
          toast.success("Plan subscription successful");
        }
      },
    }
  );
};
