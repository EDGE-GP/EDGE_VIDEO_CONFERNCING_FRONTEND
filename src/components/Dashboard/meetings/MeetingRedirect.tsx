import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CircularLoading from "@/components/ui/CircularLoading";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { notify } from "@/utils/Toaster/notify";
import { IMeeting } from "@/types/Meeting";
import { useNavigate } from "react-router";
import { meetingActions } from "@/store/meeting/meetingSlice";
import { useDispatch } from "react-redux";
const MeetingRedirect: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const { meeting, passwordRequirement, signer } = useSelector(
    (state: RootState) => state.meeting
  );
  const dispatch = useDispatch();
  const history = useNavigate();
  const [password, setPassword] = useState<string>("");
  console.log({ meeting });
  const { isPending, mutateAsync: checkMeetingPassword } =
    useMutation<IMeeting>({
      mutationKey: ["checkMeetingPassword"],
      mutationFn: async () => {
        const res = await axios.post(
          `${process.env.BACKEND_SERVER}/api/v1/meetings/check-password`,
          {
            password,
            meetingId: meeting?.id,
          },
          {
            withCredentials: true,
          }
        );
        console.log(res);
        return res.data.data.meeting;
      },
      onSuccess: (meeting) => {
        notify(`You can join the meeting now`, "success", 3000);
        setIsOpen(false);
        history(`/conference/${meeting.conferenceId}?signer=${signer}`);
      },
      onError: () => {
        notify("Password is incorrect", "error", 3000);
      },
      retry: false,
    });
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={`sm:max-w-sm ${
          passwordRequirement ? "gap-y-4" : "gap-y-2"
        }  bg-white`}
      >
        <DialogHeader>
          <DialogTitle className="outline-none">
            <h1 className="text-[#151515] capitalize outline-none font-semibold abel text-[1.25rem]">
              Join "{meeting?.title}" Meeting
            </h1>
          </DialogTitle>
          <DialogDescription className="px-2">
            {/* inputs go in here */}
            <h1 className="text-[#151515] outline-none text-[1rem] font-semibold abel mt-1">
              Join as a:
            </h1>
            <div className="flex w-full gap-x-3 items-center justify-start px-1">
              <button
                onClick={() => {
                  dispatch(meetingActions.setSigner(false));
                }}
                className={`abel md:flex transition-all  hidden font-semibold  ${
                  !signer ? "text-[#212121]" : "text-[#cbcaca]"
                }`}
              >
                Speaker
              </button>
              <button
                onClick={() => {
                  dispatch(meetingActions.setSigner(true));
                }}
                className={`abel md:flex transition-all  hidden font-semibold  ${
                  signer ? "text-[#212121]" : "text-[#cbcaca]"
                }`}
              >
                Signer
              </button>
            </div>
            {passwordRequirement && (
              <div className="w-full flex flex-col justify-center mt-1">
                <h3 className="abel font-semibold text-[1rem]">Password:</h3>
                <div className="w-full px-2">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={` border-black border-b-2 w-full py-1 px-1 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                    type="password"
                    placeholder="Please enter your meeting password"
                  />
                </div>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <button
            onClick={() => {
              if (!passwordRequirement) {
                setIsOpen(false);
                return history(
                  `/conference/${meeting?.conferenceId}?signer=${signer}`
                );
              }

              checkMeetingPassword();
            }}
            className="flex gap-x-1 items-center abel h-[2.375rem]  w-[10rem] justify-center text-center transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-[8px] drop-shadow-lg px-6"
          >
            {isPending ? <CircularLoading button /> : "Join meeting"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingRedirect;
