// import illustration_404 from "../../assets/404.svg";
import header from "@/assets/ambition.svg";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, isAxiosError } from "axios";
import CircularLoading from "../ui/CircularLoading";
import { useDispatch } from "react-redux";
import { meetingActions } from "@/store/meeting/meetingSlice";
import { notify } from "@/utils/Toaster/notify";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { IMeeting } from "@/types/Meeting";
import CreateInstantMeetingModal from "./meetings/CreateInstantMeetingModal";
import { start } from "repl";
const Stage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [conferenceId, setConferenceId] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const {
    mutateAsync: createInstantMeeting,
    isPending: isCreateInstantMeetingPending,
  } = useMutation({
    mutationKey: ["createInstantMeeting"],
    mutationFn: async () => {
      const res = await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/meetings/instant`,
        {
          title: "instant meeting trial",
          description: "Testing creation of instant meetings",
          activityFlag: "#7986CB",
          enableAvatar: true,
          enableInterpreter: true,
          saveConversation: true,
          privacyStatus: "private",
          language: "Arabic",
          participants: [],
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      return res.data.data.meeting;
    },
    onSuccess: (meeting) => {
      dispatch(meetingActions.setMeeting(meeting));
      history(`/dashboard/stage/${meeting.id}`);
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
  const { isPending: isJoinMeetingPending, mutateAsync: joinMeeting } =
    useMutation<IMeeting>({
      mutationKey: ["joinMeeting"],
      mutationFn: async () => {
        const res = await axios.post(
          `${process.env.BACKEND_SERVER}/api/v1/meetings/join`,
          {
            conferenceId,
          },
          {
            withCredentials: true,
          }
        );
        console.log(res);
        console.log({ date: new Date(res.data.data.meeting.startTime) });
        return res.data.data.meeting;
      },
      onSuccess: (meeting) => {
        notify(`you can join ${meeting.title}`, "success", 3000);
        //TODO: redirect to zego meeting or create one
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
            notify(error.response?.data.message, "error", 3000);
          }
        } else {
          notify("Something went wrong", "error", 3000);
        }
      },
    });
  useEffect(() => {
    setDisabled(/^[A-Z]{4}-[A-Z]{4}-[A-Z]{4}$/.test(conferenceId.trim()));
  }, [conferenceId]);
  return (
    <div className=" h-full card-shadow  pt-4 bg-white md:ml-[17.5rem] ml-auto rounded-3xl  mr-[2rem] ">
      <h1 className="abel text-[3rem] leading-[3.5rem] px-8 ">Stage</h1>
      <h3 className="abel text-[1rem] px-8">
        Edge Stage: Seamlessly Create or Join Meetings for Instant Collaboration
      </h3>
      <div className=" relative pb-4 h-[85%]  flex justify-center   items-start">
        <div className="md:w-[40rem] w-[22rem] mt-3">
          <h1 className="abel md:text-[2.5rem] text-[1.8rem] text-center capitalize leading-[3rem]">
            empowering connection, connecting you to the world where every hand
            speaks
          </h1>
          <div className="w-full flex justify-center items-center">
            <h3 className="abel text-[1rem] text-center max-w-[28rem]">
              Edge Stage provide secure, inclusive, easy-to-use video
              conferencing capabilities for everyone, on any device.
            </h3>
          </div>
          <div className="flex md:justify-center  items-center md:flex-row flex-col   mt-3">
            <CreateInstantMeetingModal />
            <div className="mr-3 flex flex-row  border-2 px-3 rounded-lg border-[#151515] md:w-[15rem] w-[12.9rem] h-[2.375rem] items-center md:mt-auto mt-3">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_5065)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.91957 3H16.0804C16.6146 2.99999 17.0604 2.99998 17.4247 3.02974C17.8046 3.06078 18.1612 3.12789 18.4985 3.29973C19.0159 3.56339 19.4366 3.98408 19.7003 4.50153C19.8721 4.83879 19.9392 5.19545 19.9703 5.57533C20 5.93956 20 6.3854 20 6.91955V13.0805C20 13.6146 20 14.0604 19.9703 14.4247C19.9392 14.8046 19.8721 15.1612 19.7003 15.4985C19.4366 16.0159 19.0159 16.4366 18.4985 16.7003C18.1612 16.8721 17.8046 16.9392 17.4247 16.9703C17.0604 17 16.6146 17 16.0805 17H3.91955C3.3854 17 2.93956 17 2.57533 16.9703C2.19545 16.9392 1.83879 16.8721 1.50153 16.7003C0.984081 16.4366 0.563385 16.0159 0.299733 15.4985C0.127889 15.1612 0.0607778 14.8046 0.02974 14.4247C-1.90884e-05 14.0604 -1.02672e-05 13.6146 4.02008e-07 13.0804V6.91957C-1.02672e-05 6.38541 -1.90884e-05 5.93956 0.02974 5.57533C0.0607778 5.19545 0.127889 4.83879 0.299733 4.50153C0.563385 3.98408 0.984081 3.56338 1.50153 3.29973C1.83879 3.12789 2.19545 3.06078 2.57533 3.02974C2.93956 2.99998 3.38541 2.99999 3.91957 3ZM2.69748 4.52476C2.41036 4.54822 2.27307 4.5901 2.18251 4.63624C1.94731 4.75608 1.75608 4.94731 1.63624 5.18251C1.5901 5.27307 1.54822 5.41036 1.52476 5.69748C1.50058 5.99336 1.5 6.37757 1.5 6.95V13.05C1.5 13.6224 1.50058 14.0066 1.52476 14.3025C1.54822 14.5896 1.5901 14.7269 1.63624 14.8175C1.75608 15.0527 1.94731 15.2439 2.18251 15.3638C2.27307 15.4099 2.41036 15.4518 2.69748 15.4752C2.99336 15.4994 3.37757 15.5 3.95 15.5H16.05C16.6224 15.5 17.0066 15.4994 17.3025 15.4752C17.5896 15.4518 17.7269 15.4099 17.8175 15.3638C18.0527 15.2439 18.2439 15.0527 18.3638 14.8175C18.4099 14.7269 18.4518 14.5896 18.4752 14.3025C18.4994 14.0066 18.5 13.6224 18.5 13.05V6.95C18.5 6.37757 18.4994 5.99336 18.4752 5.69748C18.4518 5.41036 18.4099 5.27307 18.3638 5.18251C18.2439 4.94731 18.0527 4.75608 17.8175 4.63624C17.7269 4.5901 17.5896 4.54822 17.3025 4.52476C17.0066 4.50058 16.6224 4.5 16.05 4.5H3.95C3.37757 4.5 2.99336 4.50058 2.69748 4.52476ZM3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H4.25C4.66421 6.5 5 6.83579 5 7.25C5 7.66421 4.66421 8 4.25 8H3.75C3.33579 8 3 7.66421 3 7.25ZM7 7.25C7 6.83579 7.33579 6.5 7.75 6.5H8.25C8.66422 6.5 9 6.83579 9 7.25C9 7.66421 8.66422 8 8.25 8H7.75C7.33579 8 7 7.66421 7 7.25ZM11 7.25C11 6.83579 11.3358 6.5 11.75 6.5H12.25C12.6642 6.5 13 6.83579 13 7.25C13 7.66421 12.6642 8 12.25 8H11.75C11.3358 8 11 7.66421 11 7.25ZM15 7.25C15 6.83579 15.3358 6.5 15.75 6.5H16.25C16.6642 6.5 17 6.83579 17 7.25C17 7.66421 16.6642 8 16.25 8H15.75C15.3358 8 15 7.66421 15 7.25ZM3 10.25C3 9.83579 3.33579 9.5 3.75 9.5H4.25C4.66421 9.5 5 9.83579 5 10.25C5 10.6642 4.66421 11 4.25 11H3.75C3.33579 11 3 10.6642 3 10.25ZM7 10.25C7 9.83579 7.33579 9.5 7.75 9.5H8.25C8.66422 9.5 9 9.83579 9 10.25C9 10.6642 8.66422 11 8.25 11H7.75C7.33579 11 7 10.6642 7 10.25ZM11 10.25C11 9.83579 11.3358 9.5 11.75 9.5H12.25C12.6642 9.5 13 9.83579 13 10.25C13 10.6642 12.6642 11 12.25 11H11.75C11.3358 11 11 10.6642 11 10.25ZM15 10.25C15 9.83579 15.3358 9.5 15.75 9.5H16.25C16.6642 9.5 17 9.83579 17 10.25C17 10.6642 16.6642 11 16.25 11H15.75C15.3358 11 15 10.6642 15 10.25ZM6 13.75C6 13.3358 6.33579 13 6.75 13H13.25C13.6642 13 14 13.3358 14 13.75C14 14.1642 13.6642 14.5 13.25 14.5H6.75C6.33579 14.5 6 14.1642 6 13.75Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_5065">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <input
                type="text"
                value={conferenceId}
                onChange={(e) => setConferenceId(e.target.value)}
                className="outline-none bg-transparent px-2  text-[1rem]  abel"
                placeholder="Enter Meeting Code"
              />
              <button
                onClick={() => {}}
                className={`abel md:hidden flex md:text-[1.25rem] text-[1rem] ${
                  conferenceId.trim().length > 0
                    ? "text-[#151515]"
                    : "text-[#cbcaca]"
                } `}
              >
                Join
              </button>
            </div>
            <button
              onClick={() => {
                joinMeeting();
              }}
              className={`abel md:flex hidden md:text-[1.25rem] w-[2rem] text-[1rem] ${
                disabled ? "text-[#151515] font-semibold" : " text-[#cbcaca]"
              }`}
            >
              {isJoinMeetingPending ? <CircularLoading button /> : "Join"}
            </button>
          </div>
          <div className="w-[40rem] mt-16 ml-[-8.5rem] md:mt-4 md:ml-auto flex justify-center">
            <img src={header} alt="" className="md:w-[385px] w-[300px] " />
          </div>
        </div>
        {/* <div className="pt-[2rem] relative">
          <svg
            width="460"
            height="500"
            viewBox="0 0 460 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M236.036 0C234.647 0 233.521 1.12603 233.521 2.51507V459.749C233.521 461.138 234.647 462.264 236.036 462.264C237.425 462.264 238.551 461.138 238.551 459.749V2.51509C238.551 1.12604 237.425 0 236.036 0ZM116.821 19.8113C105.709 19.8113 96.7002 28.8197 96.7002 39.9321V461.955C96.7002 473.067 105.709 482.075 116.821 482.075C127.933 482.075 136.942 473.067 136.942 461.955V39.932C136.942 28.8197 127.933 19.8113 116.821 19.8113ZM343.179 79.2453C332.067 79.2453 323.058 88.2537 323.058 99.366V521.389C323.058 532.501 332.067 541.509 343.179 541.509C354.291 541.509 363.3 532.501 363.3 521.389V99.366C363.3 88.2536 354.291 79.2453 343.179 79.2453ZM144.99 51.6951C144.99 45.0277 150.395 39.6226 157.062 39.6226C163.73 39.6226 169.135 45.0277 169.135 51.6951V489.814C169.135 496.482 163.73 501.887 157.062 501.887C150.395 501.887 144.99 496.482 144.99 489.814V51.6951ZM302.938 59.434C296.27 59.434 290.865 64.839 290.865 71.5064V509.626C290.865 516.293 296.27 521.698 302.938 521.698C309.605 521.698 315.01 516.293 315.01 509.626V71.5064C315.01 64.839 309.605 59.434 302.938 59.434ZM178.189 65.1555C178.189 61.2661 181.342 58.1132 185.231 58.1132C189.121 58.1132 192.274 61.2661 192.274 65.1555V513.335C192.274 517.224 189.121 520.377 185.231 520.377C181.342 520.377 178.189 517.224 178.189 513.335V65.1555ZM274.769 39.6226C270.879 39.6226 267.726 42.7756 267.726 46.6649V494.845C267.726 498.734 270.879 501.887 274.769 501.887C278.658 501.887 281.811 498.734 281.811 494.845V46.6649C281.811 42.7756 278.658 39.6226 274.769 39.6226ZM201.328 84.7785C201.328 81.7226 203.805 79.2453 206.861 79.2453C209.917 79.2453 212.394 81.7226 212.394 84.7785V535.976C212.394 539.032 209.917 541.509 206.861 541.509C203.805 541.509 201.328 539.032 201.328 535.976V84.7785ZM253.139 19.8113C250.083 19.8113 247.606 22.2886 247.606 25.3445V476.542C247.606 479.598 250.083 482.075 253.139 482.075C256.195 482.075 258.672 479.598 258.672 476.542V25.3445C258.672 22.2886 256.195 19.8113 253.139 19.8113ZM221.449 100.251C221.449 98.8619 222.575 97.7358 223.964 97.7358C225.353 97.7358 226.479 98.8619 226.479 100.251V557.485C226.479 558.874 225.353 560 223.964 560C222.575 560 221.449 558.874 221.449 557.485V100.251Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M39 22C39 9.84973 48.8497 0 61 0V0C73.1503 0 83 9.84974 83 22V440C83 452.15 73.1503 462 61 462V462C48.8497 462 39 452.15 39 440V22Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M376 120C376 107.85 385.85 98 398 98V98C410.15 98 420 107.85 420 120V538C420 550.15 410.15 560 398 560V560C385.85 560 376 550.15 376 538V120Z"
              fill="black"
            />
          </svg>
        </div> */}
      </div>
      {/* <div className="w-full flex justify-center items-center flex-col mt-12">
          <div className="relative  w-[45%]">
            <span className="bottom-3 rotate-180 right-0 absolute"></span>
            <img src={illustration_404} className="w-full" alt="" />
          </div>
          <h1 className="abel text-[1.3em] mt-12 capitalize">
            You Have No Meetings Yet? start planning Yours!
          </h1>
        </div> */}
    </div>
  );
};

export default Stage;
