import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { request } from "../../utils/request";

export const useSignUpMutation = () => {
  return useMutation(
    (data: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }) =>
      request(
        {
          path: "auth/sign-up",
          method: "POST",
        },
        {
          ...data,
        },
        true
      ),
    {
      onSuccess: () => {
        toast.success("Registration successful, please check your email");
      },
    }
  );
};
