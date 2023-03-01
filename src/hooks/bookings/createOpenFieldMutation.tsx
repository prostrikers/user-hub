import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { IRestApiResponse } from "../../interfaces/api-response";
import { request } from "../../utils/request";
import API from "./constants";

export const useCreateOpenFieldMutation = () => {
  return useMutation(
    (data: {
      startDate: string;
      place: string;
      numberOfPeople: number;
      sport: string | undefined;
    }) =>
      request(
        {
          path: `${API.CREATE_OPENFIELD_BOOKING.path}`,
          method: API.CREATE_OPENFIELD_BOOKING.method,
        },
        data,
        true
      ),
    {
      onSuccess: (response: IRestApiResponse) => {
        if (response.statusCode == 201) {
          toast.success("Booking placed successfully");
        }
        window.location.href = response.data?.url;
      },
    }
  );
};
