import React from "react";
import defaultProfileImage from "@/assets/default.jpg";
import { INotification } from "@/types/User";
import { format } from "date-fns";

const NotificationPreview: React.FC<INotification> = ({
  message,
  createdAt,
  badge,
}) => {
  return (
    <div className="flex flex-col   justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
      <div className="w-full flex items-center gap-x-2 min-h-[3.5rem] ">
        <img
          className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
          src={badge || defaultProfileImage}
          alt=""
        />

        <h3 className="abel text-[1.1rem] h-full w-full ">{message}</h3>
      </div>
      <div className="w-full flex justify-end items-center">
        <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
          {format(new Date(createdAt), "d MMM h:mm aaaa")}
        </h1>
      </div>
    </div>
  );
};

export default NotificationPreview;
