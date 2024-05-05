// import illustration_404 from "../../assets/404.svg";

import Notifications from "@/components/dashboard/networking/Notifications";
import MeetingsInvitations from "@/components/dashboard/networking/MeetingsInvitations";
import UserNetworking from "@/components/dashboard/networking/UserNetworking";
import FriendshipRequests from "./networking/FriendshipRequests";
const Networking = () => {
  return (
    <div className=" h-full grid grid-cols-6 grid-rows-2 ml-[17.5rem] gap-y-2 gap-x-4 rounded-2xl  mr-[2rem] ">
      <MeetingsInvitations />
      <Notifications />
      <UserNetworking />
      <FriendshipRequests />
    </div>
  );
};

export default Networking;
