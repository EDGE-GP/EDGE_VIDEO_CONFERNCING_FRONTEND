import dummyAccount1 from "@/assets/account4.png";
import dummyAccount2 from "@/assets/account6.png";
import { RootState } from "@/store";
import { IUser } from "@/types/User";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddFriendPreview from "./preview/AddFriendPreview";
import CircularLoading from "@/components/ui/CircularLoading";
const AddFriendships = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { user } = useSelector((state: RootState) => state.auth);
  const {
    data: users = [],
    isLoading,
    isFetching,
  } = useQuery<IUser[]>({
    queryKey: ["addFriendships", user?.id],
    queryFn: async () => {
      if (searchTerm.trim().length === 0) return [];

      const res = await axios.get(
        `${process.env.BACKEND_SERVER}/api/v1/users/friendships/add/search/${searchTerm}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      return res.data.data.users ?? [];
    },
    retry: 1,
  });
  console.log({
    users,
    isFetching,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      queryClient.invalidateQueries({
        queryKey: ["addFriendships"],
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, queryClient]);
  return (
    <div className="h-[17.5rem]">
      <div className="h-[2.5rem] placeholder:capitalize px-3 justify-between items-center mb-2  w-full flex bg-[#F8F8FA] rounded-lg">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="w-full  roudned-full abel  outline-none text-[14px] bg-transparent"
          placeholder="Search for users to add"
        />
        {isFetching && (
          <div className="w-8">
            <CircularLoading button />
          </div>
        )}
      </div>
      <div className="flex flex-col px-2 gap-y-1 h-[14.5rem] overflow-y-scroll">
        {users.map((user) => (
          <AddFriendPreview key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default AddFriendships;
