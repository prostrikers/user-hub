import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { IUser } from "../../interfaces/user";
import { useUserStore } from "../../store/createUserSlice";
import { request } from "../../utils/request";
import API from "./constraints";

export const useUserUpdateMutation = () => {
  const queryClient = useQueryClient();
  const { setUser } = useUserStore();

  return useMutation(
    (data: {
      firstName: string | undefined;
      lastName: string | undefined;
      bio: string | undefined;
      profileImgUrl: string | undefined;
    }) =>
      request(
        {
          path: API.UPDATE_USER_PROFILE.path,
          method: API.UPDATE_USER_PROFILE.method,
        },
        {
          ...data,
        },
        true
      ),
    {
      onSuccess: (data: { data: IUser }) => {
        setUser(data.data);
        queryClient.invalidateQueries({ queryKey: ["current-user"] });
        toast.success("Profile updated successfully");
      },
    }
  );
};
