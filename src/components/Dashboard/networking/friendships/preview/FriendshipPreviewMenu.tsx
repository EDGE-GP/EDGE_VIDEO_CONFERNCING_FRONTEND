import CircularLoading from "@/components/ui/CircularLoading";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { notify } from "@/utils/Toaster/notify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const FriendshipPreviewMenu: React.FC<{ friendshipId: string }> = ({
  friendshipId,
}) => {
  const queryClient = useQueryClient();
  const { mutateAsync: removeFriendship, isPending } = useMutation({
    mutationKey: ["removeFriendship"],
    mutationFn: async () => {
      const res = await axios.delete(
        `${process.env.BACKEND_SERVER}/api/v1/users/friendships/${friendshipId}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
    },
    onSuccess: async () => {
      console.log("Friendship deleted");
      await queryClient.invalidateQueries({
        queryKey: ["friendships"],
      });
      notify("Friendship deleted successfully", "success", 3000);
    },
  });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        {isPending ? (
          <CircularLoading button />
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12.9996C12.5523 12.9996 13 12.5519 13 11.9996C13 11.4473 12.5523 10.9996 12 10.9996C11.4477 10.9996 11 11.4473 11 11.9996C11 12.5519 11.4477 12.9996 12 12.9996Z"
              stroke="#151515"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5.99963C12.5523 5.99963 13 5.55192 13 4.99963C13 4.44735 12.5523 3.99963 12 3.99963C11.4477 3.99963 11 4.44735 11 4.99963C11 5.55192 11.4477 5.99963 12 5.99963Z"
              stroke="#151515"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19.9996C12.5523 19.9996 13 19.5519 13 18.9996C13 18.4473 12.5523 17.9996 12 17.9996C11.4477 17.9996 11 18.4473 11 18.9996C11 19.5519 11.4477 19.9996 12 19.9996Z"
              stroke="#151515"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={20}
        sideOffset={-10}
        className="bg-white abel card-shadow rounded-[8px] border-0 w-[11rem] px-0 py-3 flex flex-col gap-y-1  "
      >
        <DropdownMenuItem className="py-0">
          <button className="text-[1.15rem]  flex justify-start items-center gap-x-2 hover:bg-[#F7F7F7] w-full    px-2 py-[10px] rounded-[8px]">
            <span>
              <svg
                width="19"
                height="19"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2.5C8.61929 2.5 7.5 3.61929 7.5 5C7.5 6.38071 8.61929 7.5 10 7.5C11.3807 7.5 12.5 6.38071 12.5 5C12.5 3.61929 11.3807 2.5 10 2.5ZM6 5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5C14 7.20914 12.2091 9 10 9C7.79086 9 6 7.20914 6 5ZM3 16.625C3 13.5184 5.5184 11 8.625 11H11.375C14.4816 11 17 13.5184 17 16.625C17 17.9367 15.9367 19 14.625 19H5.375C4.06332 19 3 17.9367 3 16.625ZM8.625 12.5C6.34683 12.5 4.5 14.3468 4.5 16.625C4.5 17.1082 4.89175 17.5 5.375 17.5H14.625C15.1082 17.5 15.5 17.1082 15.5 16.625C15.5 14.3468 13.6532 12.5 11.375 12.5H8.625Z"
                  fill="#151515"
                />
              </svg>
            </span>
            <span>Profile</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-0">
          <button
            onClick={() => {
              removeFriendship();
            }}
            className="text-[1.15rem] flex justify-start items-center gap-x-2 hover:bg-[#F7F7F7] w-full px-2 py-[10px] rounded-[8px]"
          >
            <span>
              <svg
                width="19"
                height="19"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2.5C8.61929 2.5 7.5 3.61929 7.5 5C7.5 6.38071 8.61929 7.5 10 7.5C11.3807 7.5 12.5 6.38071 12.5 5C12.5 3.61929 11.3807 2.5 10 2.5ZM6 5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5C14 7.20914 12.2091 9 10 9C7.79086 9 6 7.20914 6 5ZM3 16.625C3 13.5184 5.5184 11 8.625 11H10.75C11.1642 11 11.5 11.3358 11.5 11.75C11.5 12.1642 11.1642 12.5 10.75 12.5H8.625C6.34683 12.5 4.5 14.3468 4.5 16.625C4.5 17.1082 4.89175 17.5 5.375 17.5H8.75C9.16421 17.5 9.5 17.8358 9.5 18.25C9.5 18.6642 9.16421 19 8.75 19H5.375C4.06332 19 3 17.9367 3 16.625ZM13.2197 13.2197C13.5126 12.9268 13.9874 12.9268 14.2803 13.2197L16 14.9393L17.7197 13.2197C18.0126 12.9268 18.4874 12.9268 18.7803 13.2197C19.0732 13.5126 19.0732 13.9874 18.7803 14.2803L17.0607 16L18.7803 17.7197C19.0732 18.0126 19.0732 18.4874 18.7803 18.7803C18.4874 19.0732 18.0126 19.0732 17.7197 18.7803L16 17.0607L14.2803 18.7803C13.9874 19.0732 13.5126 19.0732 13.2197 18.7803C12.9268 18.4874 12.9268 18.0126 13.2197 17.7197L14.9393 16L13.2197 14.2803C12.9268 13.9874 12.9268 13.5126 13.2197 13.2197Z"
                  fill="#151515"
                />
              </svg>
            </span>
            <span>Remove Friend</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-0">
          <button className="text-[1.15rem] flex justify-start items-center gap-x-2 hover:bg-[#F7F7F7] w-full px-2 py-[10px] rounded-[8px]">
            <span>
              <svg
                width="19"
                height="19"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 11.801 3.13477 13.4536 4.19279 14.7465L14.7465 4.19279C13.4536 3.13477 11.801 2.5 10 2.5ZM15.8072 5.25345L5.25345 15.8072C6.54635 16.8652 8.19905 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 8.19905 16.8652 6.54635 15.8072 5.25345ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z"
                  fill="#ef4444"
                />
              </svg>
            </span>
            <span className="text-red-500 ">Block</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FriendshipPreviewMenu;
