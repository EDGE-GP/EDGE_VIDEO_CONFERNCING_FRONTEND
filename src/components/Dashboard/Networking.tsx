// import illustration_404 from "../../assets/404.svg";

import Notifications from "@/components/dashboard/networking/Notifications";
import MeetingsInvitations from "@/components/dashboard/networking/MeetingsInvitations";
import UserNetworking from "@/components/dashboard/networking/UserNetworking";
import FriendshipRequests from "./networking/FriendshipRequests";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { notificationsActions } from "@/store/notifications/notificationsSlice";
const Networking = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const markNotificationsAsRead = async () => {
      try {
        const res = await axios.put(
          `${process.env.BACKEND_SERVER}/api/v1/users/view-notifications/`,
          {},
          {
            withCredentials: true,
          }
        );
        console.log({
          notificationsUpdate: res,
        });
        console.log("hitted");
        dispatch(notificationsActions.setNotificationPanner(0));
      } catch (err) {
        console.log(err);
      }
    };
    markNotificationsAsRead();
  }, []);
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
