import { IUser } from "@/types/Auth";
import React from "react";
import defaultProfileImage from "@/assets/default.jpg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface IParticipantSelection extends IUser {
  index: number;
}

const ParticipantsPreview: React.FC<IParticipantSelection> = ({
  name,
  email,
  photo,
  index,
}) => {
  return (
    <div className="z-[99] abel">
      <HoverCard>
        <HoverCardTrigger className="text-xl abel">
          <img
            style={{ transform: `translateX(-${index}rem)` }}
            className={`w-[2rem] object-cover h-[2rem] rounded-full`}
            src={photo || defaultProfileImage}
            alt=""
          />
        </HoverCardTrigger>
        <HoverCardContent className="border-0 card-shadow bg-white rounded-xl py-5">
          <div
            className={`w-full flex justify-between items-center cursor-pointer   rounded-xl`}
          >
            <div className="flex w-full items-center h-full gap-x-3">
              <div className="h-[3rem] w-[3rem]">
                <img
                  src={photo || defaultProfileImage}
                  className="h-full w-full rounded-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col ">
                <span className="abel text-[1.25rem] leading-6">{name}</span>
                <span className="text-[1rem] abel w-full leading-6 text-ellipsis overflow-hidden whitespace-nowrap">
                  {email}
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default ParticipantsPreview;
