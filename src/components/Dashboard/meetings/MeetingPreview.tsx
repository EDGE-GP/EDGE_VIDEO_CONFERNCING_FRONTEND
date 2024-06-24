import React from "react";

import { IMeeting } from "@/types/Meeting";
import { format, isPast } from "date-fns";
import ParticipantsPreview from "@/components/dashboard/ParticipantsPreview";
import { useNavigate } from "react-router";

const MeetingPreview: React.FC<IMeeting> = ({
  id,
  participants,
  startTime,
  conferenceId,
  description,
  activityFlag,
  organizerId,
  title,
  password,
  includeConversation,
}) => {
  const history = useNavigate();
  // const { user } = useSelector((state: RootState) => state.auth);
  const [passwordOnHover, setPasswordOnHover] = React.useState(false);
  const formattedDate = format(new Date(startTime), "iiii, do MMMM yyyy");
  return (
    <div className="w-[23.15rem] h-[11.5rem] card-shadow-2  rounded-2xl px-4 flex flex-col py-4 justify-between items-start">
      <div className="flex flex-col  w-full">
        <div className="flex justify-start items-center gap-x-2 w-full ">
          <div
            className={`min-w-6 min-h-6 max-w-6 max-h-6 rounded-full bg-[${activityFlag}]`}
          ></div>
          <div className="flex items-center gap-x-2 w-full text-ellipsis overflow-hidden text-nowrap">
            <h1 className="abel text-[1.3rem] ">{title}</h1>
          </div>
        </div>

        <h1 className="abel text-[1rem] ">
          {formattedDate} - {format(startTime, "hh:mm a")}
        </h1>
        <h1 className="abel text-md text-[#a3a3a3] text-ellipsis overflow-hidden text-nowrap w-full">
          {description}
        </h1>
        <div className="flex justify-start items-center gap-x-4">
          <h1 className="abel text-[1rem] cursor:pointer ">{conferenceId}</h1>
          {password && (
            <h1
              className="abel text-[1rem] flex items-center h-[1rem] "
              onMouseEnter={() => {
                setPasswordOnHover(true);
              }}
              onMouseLeave={() => {
                setPasswordOnHover(false);
              }}
            >
              Password:
              {passwordOnHover ? (
                ` ${password}`
              ) : (
                <span className="h-full flex ml-1 ">******</span>
              )}
            </h1>
          )}
        </div>

        {/* participants */}
      </div>
      <div className=" w-full flex justify-between items-center">
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
        {isPast(new Date(startTime)) && includeConversation && (
          <button
            onClick={() => {
              history(`/dashboard/conversations?id=${id}`);
            }}
            className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-full card-shadow px-6"
          >
            <span>View Conversation</span>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.20748 4.23214C7.49349 3.93252 7.96823 3.92148 8.26786 4.20748L13.7679 9.45748C13.9161 9.59901 14 9.79504 14 10C14 10.205 13.9161 10.401 13.7679 10.5425L8.26786 15.7925C7.96823 16.0785 7.49349 16.0675 7.20748 15.7679C6.92148 15.4682 6.93252 14.9935 7.23214 14.7075L12.1638 10L7.23214 5.29252C6.93252 5.00651 6.92148 4.53177 7.20748 4.23214Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MeetingPreview;
