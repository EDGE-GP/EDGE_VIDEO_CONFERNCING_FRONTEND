import { IFriendship } from "@/types/User";
import React from "react";
import defaultProfileImage from "@/assets/default.jpg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CircularLoading from "@/components/ui/CircularLoading";
import { notify } from "@/utils/Toaster/notify";
import FriendshipPreviewMenu from "./FriendshipPreviewMenu";

const FriendshipPreview: React.FC<IFriendship> = ({ status, id, user }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteFriendRequest, isPending } = useMutation({
    mutationKey: ["deleteFriendRequest", id],
    mutationFn: async () => {
      const res = await axios.delete(
        `${process.env.BACKEND_SERVER}/api/v1/users/friendship/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
    },
    onSuccess: async () => {
      console.log("Friend request deleted");
      await queryClient.invalidateQueries({
        queryKey: ["friendships"],
      });
      notify("Friend request deleted successfully", "success", 3000);
    },
  });
  return (
    <div className="flex justify-between min-h-[3rem]">
      <div className="flex justify-start items-center gap-x-2">
        <img
          className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
          src={user.photo || defaultProfileImage}
          alt=""
        />
        <h1 className="text-[1.1rem] abel">{user.name}</h1>
      </div>
      <div className="flex items-center gap-x-2">
        {status === "pending" ? (
          <button
            onClick={() => {
              deleteFriendRequest();
            }}
          >
            {isPending ? (
              <CircularLoading button />
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2.5C8.61929 2.5 7.5 3.61929 7.5 5C7.5 6.38071 8.61929 7.5 10 7.5C11.3807 7.5 12.5 6.38071 12.5 5C12.5 3.61929 11.3807 2.5 10 2.5ZM6 5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5C14 7.20914 12.2091 9 10 9C7.79086 9 6 7.20914 6 5ZM3 16.625C3 13.5184 5.5184 11 8.625 11H10.75C11.1642 11 11.5 11.3358 11.5 11.75C11.5 12.1642 11.1642 12.5 10.75 12.5H8.625C6.34683 12.5 4.5 14.3468 4.5 16.625C4.5 17.1082 4.89175 17.5 5.375 17.5H8.75C9.16421 17.5 9.5 17.8358 9.5 18.25C9.5 18.6642 9.16421 19 8.75 19H5.375C4.06332 19 3 17.9367 3 16.625ZM12 15.75C12 15.3358 12.3358 15 12.75 15H19.25C19.6642 15 20 15.3358 20 15.75C20 16.1642 19.6642 16.5 19.25 16.5H12.75C12.3358 16.5 12 16.1642 12 15.75Z"
                  fill="#151515"
                />
              </svg>
            )}
          </button>
        ) : (
          <FriendshipPreviewMenu friendshipId={id} />
        )}
      </div>
    </div>
  );
};

export default FriendshipPreview;
