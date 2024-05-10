import { IUser } from "@/types/User";
import React from "react";
import defaultProfileImage from "@/assets/default.jpg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { notify } from "@/utils/Toaster/notify";
import CircularLoading from "@/components/ui/CircularLoading";

const AddFriendPreview: React.FC<IUser> = ({ id, name, email, photo }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: sendFriendRequest, isPending } = useMutation({
    mutationKey: ["sendFriendRequest", id],
    mutationFn: async () => {
      const res = await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/users/friendships/requests`,
        { userId: id },
        {
          withCredentials: true,
        }
      );
      console.log(res);
    },
    onSuccess: async () => {
      console.log("Friendship deleted");
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["friendships"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["addFriendships"],
        }),
      ]);
      notify(
        `Friendship request sent to ${name} successfully`,
        "success",
        3000
      );
    },
    onError: () => {
      notify(`Something went wrong`, "error", 3000);
    },
  });
  return (
    <div className="flex justify-between min-h-[3.25rem]">
      <div className="flex justify-start items-center gap-x-2">
        <img
          className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
          src={photo || defaultProfileImage}
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-[1.1rem] abel leading-4">{name}</h1>
          <h1 className="text-[0.9rem] abel">{email}</h1>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <button
          onClick={() => {
            sendFriendRequest();
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
                d="M10 2.5C8.61929 2.5 7.5 3.61929 7.5 5C7.5 6.38071 8.61929 7.5 10 7.5C11.3807 7.5 12.5 6.38071 12.5 5C12.5 3.61929 11.3807 2.5 10 2.5ZM6 5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5C14 7.20914 12.2091 9 10 9C7.79086 9 6 7.20914 6 5ZM3 16.625C3 13.5184 5.5184 11 8.625 11H10.75C11.1642 11 11.5 11.3358 11.5 11.75C11.5 12.1642 11.1642 12.5 10.75 12.5H8.625C6.34683 12.5 4.5 14.3468 4.5 16.625C4.5 17.1082 4.89175 17.5 5.375 17.5H8.75C9.16421 17.5 9.5 17.8358 9.5 18.25C9.5 18.6642 9.16421 19 8.75 19H5.375C4.06332 19 3 17.9367 3 16.625ZM16 12C16.4142 12 16.75 12.3358 16.75 12.75V15.2501H19.25C19.6642 15.2501 20 15.5859 20 16.0001C20 16.4143 19.6642 16.7501 19.25 16.7501H16.75V19.25C16.75 19.6642 16.4142 20 16 20C15.5858 20 15.25 19.6642 15.25 19.25V16.7501H12.75C12.3358 16.7501 12 16.4143 12 16.0001C12 15.5859 12.3358 15.2501 12.75 15.2501H15.25V12.75C15.25 12.3358 15.5858 12 16 12Z"
                fill="black"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default AddFriendPreview;