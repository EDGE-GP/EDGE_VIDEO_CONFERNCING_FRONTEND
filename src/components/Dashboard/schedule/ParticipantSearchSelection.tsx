import React from "react";
import { IUser } from "@/types/User";
import defaultProfileImage from "@/assets/default.jpg";
import { useDispatch } from "react-redux";
import { scheduleActions } from "@/store/schedule/scheduleSlice";
interface IParticipantSearchSelection extends IUser {
  selected: boolean;
}
const ParticipantSearchSelection: React.FC<IParticipantSearchSelection> = ({
  avatar,
  name,
  email,
  id,
  selected,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`w-full flex justify-between items-center cursor-pointer ${
        selected && "bg-[#F7F7F7]"
      } py-4 px-3 rounded-xl`}
    >
      <div
        onClick={() => {
          dispatch(
            scheduleActions.addMeetingParticipant({
              id,
              name,
              avatar,
              email,
            })
          );
        }}
        className="flex w-full items-center h-full gap-x-3"
      >
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
        </div>
      </div>
      {selected && (
        <div className="flex items-center h-full">
          <button
            onClick={() => {
              dispatch(scheduleActions.removeMeetingParticipant(id));
            }}
            className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ParticipantSearchSelection;
