import React from "react";
import { IMeetingInvitation } from "@/types/Meeting";
import { format, isPast } from "date-fns";
import ParticipantsPreview from "@/components/dashboard/ParticipantsPreview";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, isAxiosError } from "axios";
import { notify } from "@/utils/Toaster/notify";
import CircularLoading from "@/components/ui/CircularLoading";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
const MeetingParticipantInvitations: React.FC<IMeetingInvitation> = ({
  id,
  meeting,
  status,
}) => {
  const queryClient = useQueryClient();
  const { user } = useSelector((state: RootState) => state.auth);
  const startTime = new Date(meeting.startTime);
  const formattedDate = format(startTime, "iiii, do MMMM yyyy");

  const { mutateAsync: mutateMeetingInvitationRequest, isPending } =
    useMutation({
      mutationKey: ["handleMeetingInvitation"],
      mutationFn: async (status: string) => {
        const res = await axios.put(
          `${process.env.BACKEND_SERVER}/api/v1/meetings/handle-invitation`,
          {
            status,
            invitationId: id,
          },
          {
            withCredentials: true,
          }
        );
        console.log(res);
        return status;
      },
      onSuccess: async (status) => {
        console.log("Invitation handled");
        await queryClient.invalidateQueries({
          queryKey: ["UserMeetingInvitations", user?.id],
        });
        notify(
          `Meeting invitation request ${status} successfully`,
          "success",
          3000
        );
      },
      onError: (error: Error | AxiosError) => {
        console.log(error);
        if (isAxiosError(error)) {
          if (error.response?.data.details) {
            error?.response?.data?.details.forEach(
              (error: { message: string }) => {
                notify(error.message, "error", 3000);
              }
            );
          } else {
            notify("Something went wrong", "error", 3000);
          }
        } else {
          notify(error.message, "error", 3000);
        }
      },
    });
  console.log({
    meeting,
  });
  return (
    <div className="flex justify-between items-center bg-[#F7F7F7] rounded-2xl px-4 py-3">
      <div className="flex flex-col gap-y-">
        <div className="flex gap-x-2 items-center">
          <div
            className={`w-6 h-6 rounded-full bg-[${meeting.activityFlag}]`}
          ></div>
          <div className="flex gap-x- items-center">
            <h3 className="abel  text-lg">{meeting.title}</h3>
            <span className="mx-1 text-lg abel">-</span>
            <h1 className="abel text-lg">
              {formattedDate} - {format(startTime, "hh:mm a")}
            </h1>
          </div>
        </div>
        <h1 className="abel text-md text-[#a3a3a3]">{meeting.description}</h1>
        <h1 className="abel text-[1rem] ">{meeting.conferenceId}</h1>
        <div className="flex flex-wrap ">
          {meeting.participants.map((participant, index) => (
            <ParticipantsPreview
              email={participant.email}
              id={participant.id}
              index={index}
              name={participant.name}
              photo={participant.photo}
              key={participant.id}
              organizer={participant.id === meeting.organizerId}
            />
          ))}
        </div>
      </div>

      {isPast(startTime) && status === "pending" ? (
        <div className="flex items-end gap-x-3 h-full ">
          <div className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]">
            Expired
          </div>
        </div>
      ) : status === "pending" ? (
        <div className="flex items-end gap-x-3 h-full ">
          {isPending ? (
            <div className="h-[2rem] flex justify-end flex-col items-end">
              <CircularLoading button />
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  mutateMeetingInvitationRequest("rejected");
                }}
                className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all"
              >
                Reject
              </button>
              <button
                onClick={() => {
                  mutateMeetingInvitationRequest("accepted");
                }}
                className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]"
              >
                Accept
              </button>
            </>
          )}
        </div>
      ) : status === "accepted" ? (
        <div className="flex items-end gap-x-3 h-full ">
          <span className="abel text-[1rem] font-semibold text-green-500">
            Accepted
          </span>
        </div>
      ) : (
        <div className="flex items-end gap-x-3 h-full ">
          <span className="abel text-[1rem] font-semibold text-red-500 transition-all">
            Rejected
          </span>
        </div>
      )}
    </div>
  );
};

export default MeetingParticipantInvitations;
