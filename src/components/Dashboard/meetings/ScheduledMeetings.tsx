import React from "react";

import { IMeeting } from "@/types/Meeting";
import { format } from "date-fns";
import ParticipantsPreview from "@/components/dashboard/ParticipantsPreview";

const ScheduledMeetings: React.FC<IMeeting> = ({
  id,
  language,
  participants,
  startTime,
  conferenceId,
  description,
  activityFlag,
  enableAvatar,
  enableInterpreter,
  organizerId,
  saveConversation,
  title,
}) => {
  console.log({
    id,
    language,
    participants,
    startTime,
    conferenceId,
    description,
    activityFlag,
    enableAvatar,
    enableInterpreter,
    organizerId,
    saveConversation,
  });
  const formattedDate = format(new Date(startTime), "iiii, do MMMM yyyy");
  return (
    <div className="w-[23.15rem] h-[11.5rem] card-shadow-2  rounded-2xl px-4 flex flex-col justify-center items-start">
      <div className="flex justify-start items-center gap-x-2 w-full ">
        <div
          className={`min-w-6 min-h-6 max-w-6 max-h-6 rounded-full bg-[${activityFlag}]`}
        ></div>
        <div className="flex items-center gap-x-2 w-full text-ellipsis overflow-hidden text-nowrap">
          <h1 className="abel text-[1.3rem] ">{title}</h1>
          <span className="text-lg abel text-[#a3a3a3]">-</span>
          <h1 className="abel text-md text-[#a3a3a3] text-ellipsis overflow-hidden text-nowrap ">
            {description}
          </h1>
        </div>
      </div>

      <h1 className="abel text-[1rem] ">
        {formattedDate} - {format(startTime, "hh:mm a")}
      </h1>
      <h1 className="abel text-[1rem] ">{conferenceId}</h1>
      {/* participants */}
      <div className="flex flex-wrap mt-1">
        {participants.map((participant, index) => (
          <ParticipantsPreview
            email={participant.email}
            id={participant.id}
            index={index}
            name={participant.name}
            photo={participant.photo}
            key={participant.id}
            organizer={participant.id === organizerId}
          />
        ))}
      </div>
      <div className="mt-1 w-full flex justify-end items-center">
        <button className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-full card-shadow px-6">
          <span>Edit Meeting</span>
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_20437)">
                <path
                  d="M5 16L4 20L8 19L19.5858 7.41421C20.3668 6.63316 20.3668 5.36683 19.5858 4.58579L19.4142 4.41421C18.6332 3.63316 17.3668 3.63317 16.5858 4.41421L5 16Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 6L18 9"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 20H21"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_20437">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ScheduledMeetings;
