import { IMeeting } from "@/types/Meeting";
import { format } from "date-fns";
import React from "react";
import ParticipantsPreview from "../ParticipantsPreview";
interface IConversation extends IMeeting {
  selected: boolean;
  setSelectedConversation: React.Dispatch<React.SetStateAction<string>>;
}
const Conversation: React.FC<IConversation> = ({
  id,
  title,
  startTime,
  activityFlag,
  conferenceId,
  participants,
  selected,
  organizerId,
  setSelectedConversation,
}) => {
  const formattedDate = format(new Date(startTime), "iiii, do MMMM yyyy");

  return (
    <div
      onClick={() => setSelectedConversation(id)}
      className={`flex flex-col gap-y-1 ${
        selected && "bg-[#F8F8F8]"
      }  rounded-xl py-3 px-3 abel w-full justify-center items-center abel cursor-pointer`}
    >
      <div className="w-full px-2">
        <div className="flex  justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <div
              className={`min-w-6 min-h-6 max-w-6 max-h-6 rounded-full bg-[${activityFlag}]`}
            ></div>
            <h3 className="abel  text-lg">{title}</h3>
          </div>
        </div>
        <h1 className="abel text-[1rem] ">
          {formattedDate} - {format(startTime, "hh:mm a")}
        </h1>
        <h1 className="abel text-[1rem] cursor:pointer ">{conferenceId}</h1>
        <div className="flex flex-wrap h-[2rem]">
          {participants.map((participant, index) => (
            <ParticipantsPreview
              email={participant.email}
              id={participant.id}
              index={index}
              name={participant.name}
              avatar={participant.avatar}
              key={participant.id}
              organizer={participant.id === organizerId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
