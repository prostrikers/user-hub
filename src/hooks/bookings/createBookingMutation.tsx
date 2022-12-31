import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { IRestApiResponse } from "../../interfaces/api-response";
import { request } from "../../utils/request";
import API from "./constants";

export const useCreateBooking = () => {
  return useMutation(
    (data: {
      startTime: string;
      endTime: string;
      place: string;
      numberOfPeople: number;
      sport: string | undefined;
    }) =>
      request(
        {
          path: `${API.COMPLTED_BOOKINGS.path}`,
          method: API.COMPLTED_BOOKINGS.method,
        },
        data,
        true
      ),
    {
      onSuccess: (response: IRestApiResponse) => {
        toast.success("Booking placed successfully");
        window.location.href = response.data?.links[1].href;
      },
    }
  );
};
