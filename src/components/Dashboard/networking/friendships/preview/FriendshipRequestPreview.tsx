import { IFriendship } from "@/types/User";
import defaultProfileImage from "@/assets/default.jpg";

import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notify } from "@/utils/Toaster/notify";
import axios from "axios";
import CircularLoading from "@/components/ui/CircularLoading";

const FriendshipRequestPreview: React.FC<IFriendship> = ({ id, user }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: handleFriendshipRequest, isPending } = useMutation({
    mutationKey: ["handleFriendshipRequests"],
    mutationFn: async (status: string) => {
      const res = await axios.put(
        `${process.env.BACKEND_SERVER}/api/v1/users/friendships/handle-requests`,
        {
          friendshipId: id,
          status,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      return status;
    },
    onSuccess: async (status) => {
      console.log("request handled");
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["friendships"],
        }),
        await queryClient.invalidateQueries({
          queryKey: ["friendshipRequests"],
        }),
      ]);
      notify(`Friendship request ${status} successfully`, "success", 3000);
    },
    onError: () => {
      notify("Something went wrong", "error", 3000);
    },
  });
  return (
    <div className="flex justify-between min-h-[3.25rem] ">
      <div className="flex justify-start items-center gap-x-2">
        <img
          className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
          src={user.avatar || defaultProfileImage}
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-[1.1rem] abel leading-4">{user.name}</h1>
          <h1 className="text-[0.9rem] abel">{user.email}</h1>
        </div>
      </div>
      <div className="flex justify-end items-center">
        {isPending ? (
          <CircularLoading button />
        ) : (
          <div className="flex items-center gap-x-3 h-full ">
            <button
              onClick={() => {
                handleFriendshipRequest("rejected");
              }}
              className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all"
            >
              Reject
            </button>
            <button
              onClick={() => {
                handleFriendshipRequest("accepted");
              }}
              className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]"
            >
              Accept
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendshipRequestPreview;
