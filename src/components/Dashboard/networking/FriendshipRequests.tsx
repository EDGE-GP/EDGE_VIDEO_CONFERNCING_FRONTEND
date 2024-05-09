import { useEffect, useState } from "react";
import CircularLoading from "@/components/ui/CircularLoading";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IFriendship } from "@/types/User";
import { useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "@/store";
import FriendshipRequestPreview from "./friendships/preview/FriendshipRequestPreview";
const FriendshipRequests = () => {
  const queryClient = useQueryClient();
  const { user } = useSelector((state: RootState) => state.auth);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {
    data: friendshipRequests = [],
    isLoading,
    isFetching,
  } = useQuery<IFriendship[]>({
    queryKey: ["friendshipRequests", user?.id],
    queryFn: async () => {
      const res = await axios(
        `${
          process.env.BACKEND_SERVER
        }/api/v1/users/friendships/requests?searchTerm=${searchTerm || ""}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      return res.data.data.friendshipRequests;
    },
    refetchOnWindowFocus: false,
    retry: 1,
    
  });

  console.log({
    friendshipRequests,
    isLoading,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      queryClient.invalidateQueries({
        queryKey: ["friendshipRequests"],
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, queryClient]);
  return (
    <div className="col-span-2 w-full px-4 pt-3 rounded-2xl h-full bg-white card-shadow">
      <h3 className="abel text-[1.3rem] mb-4">Friend Requests</h3>
      <div className="h-[17.5rem]">
        {isLoading ? (
          <CircularLoading button />
        ) : (
          <div className="h-full">
            <div className="h-[2.5rem] placeholder:capitalize px-3 justify-between items-center mb-2  w-full flex bg-[#F8F8FA] rounded-lg">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                className="w-full  roudned-full abel  outline-none text-[14px] bg-transparent"
                placeholder="Filter your friendships requests via name or email"
              />

              {isFetching && (
                <div className="w-8">
                  <CircularLoading button />
                </div>
              )}
            </div>
            <div className="flex flex-col px-2 gap-y-1 h-[14.5em] overflow-y-scroll">
              {friendshipRequests.map((friendshipRequest) => (
                <FriendshipRequestPreview
                  key={friendshipRequest.id}
                  {...friendshipRequest}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendshipRequests;
