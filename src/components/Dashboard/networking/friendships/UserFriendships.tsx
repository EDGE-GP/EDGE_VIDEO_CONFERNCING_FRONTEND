import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IFriendship } from "@/types/User";
import axios from "axios";
import FriendshipPreview from "./preview/FriendshipPreview";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import CircularLoading from "@/components/ui/CircularLoading";
import { useEffect, useState } from "react";
const UserFriendships = () => {
  const queryClient = useQueryClient();
  const { user } = useSelector((state: RootState) => state.auth);
  const [friendshipsSearchTerm, setFriendshipsSearchTerm] =
    useState<string>("");
  const [searchLoadingInit, setSearchLoadingInit] = useState<boolean>(false);
  const {
    data: friendships = [],
    isLoading,
    isFetching,
  } = useQuery<IFriendship[]>({
    queryKey: ["friendships", user?.id],
    queryFn: async () => {
      const res = await axios(
        `${process.env.BACKEND_SERVER}/api/v1/users/friendships?searchTerm=${
          friendshipsSearchTerm || ""
        }`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      return res.data.data.friendships;
    },
    refetchOnWindowFocus: false,
  });

  console.log({
    friendships,
    isLoading,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      queryClient.invalidateQueries({
        queryKey: ["friendships"],
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [friendshipsSearchTerm, queryClient]);
  return (
    <div className="h-[17.5rem]">
      {isLoading ? (
        <div className="h-full flex justify-center items-center">
          <CircularLoading button />
        </div>
      ) : (
        <div className="h-full">
          <div className="h-[2.5rem] placeholder:capitalize mb-2 px-3  w-full  bg-[#F8F8FA] rounded-lg flex justify-between">
            <input
              value={friendshipsSearchTerm}
              onChange={(e) => {
                setFriendshipsSearchTerm(e.target.value);
                setSearchLoadingInit(true);
              }}
              type="text"
              className="w-full  roudned-full abel  outline-none text-[14px] bg-transparent"
              placeholder="Search your friendships via name or email"
            />
            {isFetching  && (
              <div className="w-8">
                <CircularLoading button />
              </div>
            )}
          </div>
          <div className="flex flex-col px-2 gap-y-1 h-[14.5rem] overflow-y-scroll">
            {friendships.map((friendship) => (
              <FriendshipPreview key={friendship.id} {...friendship} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserFriendships;
