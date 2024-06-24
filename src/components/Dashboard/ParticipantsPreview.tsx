import { IUser } from "@/types/User";
import React from "react";
import defaultProfileImage from "@/assets/default.jpg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IParticipantSelection extends IUser {
  index: number;
  organizer: boolean;
}

const ParticipantsPreview: React.FC<IParticipantSelection> = ({
  name,
  email,
  avatar,
  index,
  organizer,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger className="text-xl abel">
        <Avatar
          style={{ transform: `translateX(-${index * 0.7}rem)` }}
          className={`w-[2rem] object-cover h-[2rem] rounded-full`}
        >
          <AvatarImage src={avatar || defaultProfileImage} />
          <AvatarFallback className="bg-[#e8e8e9]">
            {name[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="border-0 card-shadow bg-white rounded-xl py-5">
        <div
          className={`w-full flex justify-between items-center cursor-pointer   rounded-xl`}
        >
          <div className="flex w-full items-center h-full gap-x-3">
            <div className="h-[3rem] w-[3rem]">
              <img
                src={avatar || defaultProfileImage}
                className="h-full w-full rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col ">
              <span className="abel text-[1.25rem] leading-6">{name}</span>
              <span className="text-[1rem] abel w-full leading-6 text-ellipsis overflow-hidden whitespace-nowrap">
                {email}
              </span>
              {organizer && (
                <span className="text-[1rem] abel w-full leading-6 text-ellipsis overflow-hidden whitespace-nowrap">
                  Meeting organizer
                </span>
              )}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ParticipantsPreview;
