import MeetingParticipantInvitations from "@/components/dashboard/networking/invitations/MeetingParticipantInvitations";
import CircularLoading from "@/components/ui/CircularLoading";
import { IMeetingInvitation } from "@/types/Meeting";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
const MeetingsInvitations = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const {
    isLoading,
    isError,
    data: meetingInvitations = [],
  } = useQuery<IMeetingInvitation[]>({
    queryKey: ["UserMeetingInvitations", user?.id],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.BACKEND_SERVER}/api/v1/meetings/invitations`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      return res.data.data.invitations ?? [];
    },
    retry: 1,
  });
  console.log({
    isLoading,
    isError,
    meetingInvitations,
  });
  return (
    <div className=" rounded-2xl w-full col-span-4 h-full bg-white card-shadow px-4 pt-3 ">
      <h3 className="abel text-[1.3rem] mb-1">Meeting Invitations</h3>
      <div className="flex flex-col gap-y-2 h-[17em] overflow-y-scroll px-2">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <CircularLoading button={false} />
          </div>
        ) : meetingInvitations.length > 0 ? (
          meetingInvitations?.map((invitation) => (
            <MeetingParticipantInvitations
              key={invitation.id}
              {...invitation}
            />
          ))
        ) : (
          <div className="w-full h-full  justify-center items-center abel text-xl flex flex-col relative">
            <h1 className="abel text-xl w-full text-center mb-5">
              It looks like you have no meeting invitations at the moment.
            </h1>

            {/* <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <svg
                width="143"
                height="64"
                viewBox="0 0 143 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.178 1.086L28.498 0L0 44.043H42.338V42.043H3.67599L30.178 1.086Z"
                  fill="black"
                />
                <path
                  d="M30.338 22.543V63.043H32.338V22.543H30.338ZM130.178 1.086L128.498 0L100 44.043H142.338V42.043H103.676L130.178 1.086Z"
                  fill="black"
                />
                <path
                  d="M71.338 62.043C80.7269 62.043 88.338 48.3877 88.338 31.543C88.338 14.6983 80.7269 1.04297 71.338 1.04297C61.9492 1.04297 54.338 14.6983 54.338 31.543C54.338 48.3877 61.9492 62.043 71.338 62.043Z"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M130.338 22.543V63.043H132.338V22.543H130.338Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="absolute left-[40%] top-[50%] -translate-y-1/2 -translate-x-1/2">
              <img src={noneFoundIllustration} className="h-[14rem]" alt="" />
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingsInvitations;
