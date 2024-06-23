import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import defaultProfileImage from "@/assets/default.jpg";
import { AnimatePresence, motion } from "framer-motion";
import CircularLoading from "@/components/ui/CircularLoading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, isAxiosError } from "axios";
import { IUser } from "@/types/User";
import ParticipantsPreview from "../ParticipantsPreview";
import Switch from "@/components/utility/Switch";
import { notify } from "@/utils/Toaster/notify";
import { useDispatch } from "react-redux";
import { meetingActions } from "@/store/meeting/meetingSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IMeeting } from "@/types/Meeting";
import { useNavigate } from "react-router";

const CreateInstantMeetingModal = () => {
  const history = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { meeting } = useSelector((state: RootState) => state.meeting);
  const [signer, setSigner] = useState<boolean>(false);
  console.log({ meeting });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescripiton] = useState<string>("");
  const [toggleParticipantsSelection, setToggleParticipantsSelection] =
    useState<boolean>(false);
  const [participantsSearchTerm, setParticipantsSearchTerm] =
    useState<string>("");
  const [participants, setParticipants] = useState<IUser[]>([]);
  const [saveConversationToggle, setSaveConversationsToggle] =
    useState<boolean>(true);
  const [enableInterpreter, setEnableInterpreter] = useState<boolean>(true);
  const [language, setLanguage] = useState<"English" | "Arabic">("Arabic");
  const [activityFlag, setActivityFlag] = useState<
    | "#7986CB"
    | "#8E24AA"
    | "#616161"
    | "#039BE5"
    | "#33B679"
    | "#E67C73"
    | "#F4511E"
  >("#7986CB");

  const [privacyStatus, setPrivacyStatus] = useState<"private" | "public">(
    "public"
  );
  const [enableAvatar, setEnableAvatar] = useState<boolean>(true);
  const [previewBeforeJoinToggle, setPreviewBeforeJoinToggle] =
    useState<boolean>(false);
  const {
    data: filteredParticipantsSearch,
    isFetching: fetchParticipantsLoading,
  } = useQuery<IUser[]>({
    queryKey: ["fetchParticipants"],
    queryFn: async () => {
      if (participantsSearchTerm.trim().length === 0) {
        return [];
      }
      const res = await axios.get(
        `${process.env.BACKEND_SERVER}/api/v1/users/search/${participantsSearchTerm}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setToggleParticipantsSelection(true);
      return res.data.data.users;
    },
    initialData: [],
    staleTime: Infinity,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      queryClient.invalidateQueries({
        queryKey: ["fetchParticipants"],
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [participantsSearchTerm, queryClient]);
  useEffect(() => {
    if (participants.length === 0 && filteredParticipantsSearch.length === 0) {
      setToggleParticipantsSelection(false);
    }
  }, [participants, filteredParticipantsSearch]);
  useEffect(() => {
    const handleCloseParticipantsSelectionOnEscape = (
      event: KeyboardEvent
    ): void => {
      if (event.key === "Escape") {
        if (toggleParticipantsSelection) {
          setToggleParticipantsSelection(false);
        }
      }
    };

    document.addEventListener(
      "keydown",
      handleCloseParticipantsSelectionOnEscape
    );
    return () => {
      document.removeEventListener(
        "keydown",
        handleCloseParticipantsSelectionOnEscape
      );
    };
  }, []);

  const addMeetingParticipant = (participant: IUser) => {
    const isParticipant = participants.some(
      (participant) => participant.id === participant.id
    );
    if (isParticipant) return;
    setParticipants([...participants, participant]);
  };
  const removeMeetingParticipant = (id: string) => {
    setParticipants(
      participants.filter((participant) => participant.id !== id)
    );
  };
  console.log({
    participants,
  });

  const { isPending, mutateAsync: createInstantMeeting } = useMutation({
    mutationKey: ["createInstantMeeting"],
    mutationFn: async () => {
      const res = await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/meetings/instant`,
        {
          title,
          description,
          participants: participants.map((participant) => participant.id),
          language,
          activityFlag,
          saveConversation: saveConversationToggle,
          enableInterpreter,
          enableAvatar,
          privacyStatus,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      return res.data.data.meeting;
    },
    onSuccess: (meeting: IMeeting) => {
      setTitle("");
      setDescripiton("");
      setParticipants([]);
      setParticipantsSearchTerm("");
      setSaveConversationsToggle(true);
      setEnableInterpreter(true);
      setLanguage("Arabic");
      setActivityFlag("#7986CB");
      setPrivacyStatus("public");
      setEnableAvatar(false);
      notify("Meeting was created successfully", "success", 3000);
      dispatch(meetingActions.setMeeting(meeting));
      setPreviewBeforeJoinToggle(true);
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
        notify(error.message, "error", 3000);
      }
    },
  });
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="outline-none flex gap-x-2 items-center label h-[2.375rem] mr-4 text-[.8rem] transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-lg card-shadow px-3 w-[13.5rem] justify-center ">
          <span className="flex-shrink-0 abel text-[1rem]">
            Create Instant Meeting
          </span>
          <span className="flex-shrink-0">
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
                d="M14 1.75C14 1.33579 14.3358 1 14.75 1H18.25C18.6642 1 19 1.33579 19 1.75V5.25C19 5.66421 18.6642 6 18.25 6C17.8358 6 17.5 5.66421 17.5 5.25V3.56066L11.5303 9.53033C11.2374 9.82322 10.7626 9.82322 10.4697 9.53033C10.1768 9.23744 10.1768 8.76256 10.4697 8.46967L16.4393 2.5H14.75C14.3358 2.5 14 2.16421 14 1.75ZM1 4.75C1 3.23122 2.23122 2 3.75 2H9C9.41421 2 9.75 2.33579 9.75 2.75C9.75 3.16421 9.41421 3.5 9 3.5H3.75C3.05964 3.5 2.5 4.05964 2.5 4.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H15.25C15.9404 17.5 16.5 16.9404 16.5 16.25V11C16.5 10.5858 16.8358 10.25 17.25 10.25C17.6642 10.25 18 10.5858 18 11V16.25C18 17.7688 16.7688 19 15.25 19H3.75C2.23122 19 1 17.7688 1 16.25V4.75Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </DialogTrigger>
      <DialogContent
        className={`${
          previewBeforeJoinToggle ? "sm:max-w-sm" : "sm:max-w-[50rem]"
        } gap-y-3 bg-white`}
      >
        <DialogHeader>
          <DialogTitle className="outline-none">
            {previewBeforeJoinToggle ? (
              <h1 className="text-[#151515] capitalize outline-none font-semibold abel text-[1.25rem]">
                Join "{meeting?.title}" Meeting
              </h1>
            ) : (
              <h1 className="text-[#151515] outline-none font-semibold abel">
                Create Instant Meeting
              </h1>
            )}
          </DialogTitle>
          <DialogDescription className="px-2">
            {!previewBeforeJoinToggle ? (
              <div className="w-full flex justify-between  gap-x-8">
                <div className="w-1/2 pr-[] mt-2">
                  <div className="flex flex-col gap-y-2">
                    <div>
                      <h3 className="abel text-[1.25rem] ">Title</h3>
                      <input
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        className={` border-black border-b-2 w-full py-2 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                        type="text"
                        placeholder="Enter meeting title"
                      />
                    </div>
                    <div>
                      <h3 className="abel text-[1.25rem] ">Description</h3>
                      <input
                        value={description}
                        onChange={(e) => {
                          setDescripiton(e.target.value);
                        }}
                        className={` border-black border-b-2 w-full py-2 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                        type="text"
                        placeholder="Notifiy your meeting participants with a brief description"
                      />
                    </div>
                    <div className="relative">
                      <AnimatePresence>
                        {toggleParticipantsSelection && (
                          <>
                            <div
                              className="fixed z-[100] w-full h-full top-0 left-0"
                              onClick={() => {
                                setToggleParticipantsSelection(false);
                              }}
                            ></div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              onClick={() => {}}
                              className="absolute w-full  h-[15rem] top-[4.5rem] py-5 px-4 z-[100] rounded-xl bg-white card-shadow left-0 "
                            >
                              <div className="h-full flex flex-col gap-y-2 overflow-y-scroll w-full z-[100]">
                                {fetchParticipantsLoading ? (
                                  <CircularLoading button />
                                ) : filteredParticipantsSearch.length === 0 &&
                                  participants.length > 0 ? (
                                  participants.map((participant: IUser) => (
                                    <div
                                      onClick={() => {
                                        console.log("adding participant");
                                        addMeetingParticipant(participant);
                                      }}
                                      key={participant.id}
                                      className={`w-full z-[100] flex justify-between items-center cursor-pointer ${
                                        participants.some(
                                          (p) => p.id === participant.id
                                        ) && "bg-[#F7F7F7]"
                                      } py-4 px-3 rounded-xl`}
                                    >
                                      <div className="flex w-full items-center h-full gap-x-3">
                                        <div className="h-[3rem] w-[3rem]">
                                          <img
                                            src={
                                              participant.avatar ||
                                              defaultProfileImage
                                            }
                                            className="h-full w-full rounded-full"
                                            alt=""
                                          />
                                        </div>
                                        <div className="flex flex-col ">
                                          <span className="abel text-[1.25rem] leading-6">
                                            {participant.name}
                                          </span>
                                          <span className="text-[1rem] abel w-full leading-6 text-ellipsis overflow-hidden whitespace-nowrap">
                                            {participant.email}
                                          </span>
                                        </div>
                                      </div>
                                      {participants.some(
                                        (participant) =>
                                          participant.id === participant.id
                                      ) && (
                                        <div className="flex items-center h-full">
                                          <button
                                            onClick={() => {
                                              removeMeetingParticipant(
                                                participant.id
                                              );
                                            }}
                                            className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                  ))
                                ) : (
                                  filteredParticipantsSearch.map(
                                    (participant) => (
                                      <div
                                        onClick={() => {
                                          console.log("adding participant");
                                          addMeetingParticipant(participant);
                                        }}
                                        key={participant.id}
                                        className={`w-full z-[100] flex justify-between items-center cursor-pointer ${
                                          participants.some(
                                            (p) => p.id === participant.id
                                          ) && "bg-[#F7F7F7]"
                                        } py-4 px-3 rounded-xl`}
                                      >
                                        <div className="flex w-full items-center h-full gap-x-3">
                                          <div className="h-[3rem] w-[3rem]">
                                            <img
                                              src={
                                                participant.avatar ||
                                                defaultProfileImage
                                              }
                                              className="h-full w-full rounded-full"
                                              alt=""
                                            />
                                          </div>
                                          <div className="flex flex-col ">
                                            <span className="abel text-[1.25rem] leading-6">
                                              {participant.name}
                                            </span>
                                            <span className="text-[1rem] abel w-full leading-6 text-ellipsis overflow-hidden whitespace-nowrap">
                                              {participant.email}
                                            </span>
                                          </div>
                                        </div>
                                        {participants.some(
                                          (participant) =>
                                            participant.id === participant.id
                                        ) && (
                                          <div className="flex items-center h-full">
                                            <button
                                              onClick={() => {
                                                removeMeetingParticipant(
                                                  participant.id
                                                );
                                              }}
                                              className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all"
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        )}
                                      </div>
                                    )
                                  )
                                )}
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                      <h3 className="abel text-[1.25rem] ">Participants</h3>
                      <div className="border-black border-b-2 mb-1 h-[2rem] px-2 flex justify-between items-center">
                        <input
                          value={participantsSearchTerm}
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              setToggleParticipantsSelection(false);
                            }
                          }}
                          onFocus={() => {
                            if (filteredParticipantsSearch.length > 0) {
                              setToggleParticipantsSelection(true);
                            }
                          }}
                          onChange={(e) => {
                            const allowedCharactersRegex =
                              /^[a-zA-Z0-9@._ -]*$/;
                            if (allowedCharactersRegex.test(e.target.value)) {
                              setParticipantsSearchTerm(e.target.value);
                            }
                          }}
                          className={`w-full abel text-md outline-none z-[100] placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                          type="text"
                          placeholder="Invite meeting participants"
                        />
                        {fetchParticipantsLoading && (
                          <div className="w-8">
                            <CircularLoading button />
                          </div>
                        )}
                      </div>
                      <div
                        className="flex mt-3 h-[rem] flex-wrap cursor-pointer"
                        onClick={() => {
                          setToggleParticipantsSelection(true);
                        }}
                      >
                        {participants.map((participant, index) => (
                          <ParticipantsPreview
                            key={participant.id}
                            name={participant.name}
                            email={participant.email}
                            id={participant.id}
                            avatar={participant.avatar}
                            index={index}
                            organizer={false}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col mb-3 ">
                        <h3 className="abel text-[1.25rem] ">
                          Save meeting conversation
                        </h3>
                        <div className="w-full flex justify-between items-end">
                          <h3 className="abel text-[0.9rem] w-[85%]">
                            Every interpreted word/sign will be saved as a
                            message in your converstations
                          </h3>
                          <div>
                            <Switch
                              selected={saveConversationToggle}
                              toggle={() => {
                                setSaveConversationsToggle(
                                  (prevState) => !prevState
                                );
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col mb-3">
                        <h3 className="abel text-[1.25rem] ">
                          Enable Sign Language Interpreter
                        </h3>
                        <div className="w-full flex justify-between items-end">
                          <h3 className="abel text-[0.9rem] w-[85%]">
                            User's sign gestures will be detected and translated
                            automatically for deaf users
                          </h3>
                          <div>
                            <Switch
                              selected={enableInterpreter}
                              disabled={language === "English"}
                              toggle={() => {
                                setEnableInterpreter((prevState) => !prevState);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="abel text-[1.25rem] mt-3">
                          Pick Activity Flag
                        </h3>
                        <div className="flex flex-wrap gap-x- mt-1">
                          <div
                            className={`${
                              activityFlag === "#7986CB" &&
                              "border-2 border-[#7986CB]  "
                            } w-8 h-8 flex justify-center rounded-full items-center`}
                          >
                            <button
                              onClick={() => {
                                setActivityFlag("#7986CB");
                              }}
                              className="w-5 h-5 rounded-full bg-[#7986CB]"
                            ></button>
                          </div>
                          <div
                            className={`${
                              activityFlag === "#8E24AA" &&
                              "border-2 border-[#8E24AA]  "
                            } w-8 h-8  flex justify-center rounded-full items-center`}
                          >
                            <button
                              onClick={() => {
                                setActivityFlag("#8E24AA");
                              }}
                              className="w-5 h-5 rounded-full bg-[#8E24AA]"
                            ></button>
                          </div>
                          <div
                            className={`${
                              activityFlag === "#616161" &&
                              "border-2 border-[#616161]  "
                            } w-8 h-8  flex justify-center rounded-full items-center`}
                          >
                            <button
                              onClick={() => {
                                setActivityFlag("#616161");
                              }}
                              className="w-5 h-5 rounded-full bg-[#616161]"
                            ></button>
                          </div>
                          <div
                            className={`${
                              activityFlag === "#039BE5" &&
                              "border-2 border-[#039BE5]  "
                            } w-8 h-8  flex justify-center rounded-full items-center`}
                          >
                            <button
                              onClick={() => {
                                setActivityFlag("#039BE5");
                              }}
                              className="w-5 h-5 rounded-full bg-[#039BE5]"
                            ></button>
                          </div>
                          <div
                            className={`${
                              activityFlag === "#33B679" &&
                              "border-2 border-[#33B679]  "
                            } w-8 h-8  flex justify-center rounded-full items-center`}
                          >
                            <button
                              onClick={() => {
                                setActivityFlag("#33B679");
                              }}
                              className="w-5 h-5 rounded-full bg-[#33B679]"
                            ></button>
                          </div>
                          <div
                            className={`${
                              activityFlag === "#E67C73" &&
                              "border-2 border-[#E67C73]  "
                            } w-8 h-8  flex justify-center rounded-full items-center`}
                          >
                            <button
                              onClick={() => {
                                setActivityFlag("#E67C73");
                              }}
                              className="w-5 h-5 rounded-full bg-[#E67C73]"
                            ></button>
                          </div>
                          <div
                            className={`${
                              activityFlag === "#F4511E" &&
                              "border-2 border-[#F4511E]  "
                            } w-8 h-8  flex justify-center rounded-full items-center`}
                          >
                            <button
                              onClick={() => {
                                setActivityFlag("#F4511E");
                              }}
                              className="w-5 h-5 rounded-full bg-[#F4511E]"
                            ></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 h-full flex flex-col gap-y-4">
                  <div className="flex flex-col">
                    <h3 className="abel text-[1.25rem] ">
                      Enable Speech Avatar Display
                    </h3>
                    <div className="w-full flex justify-between items-end">
                      <h3 className="abel text-[0.9rem] w-[85%] ">
                        Every interpreted word will be displayed to deaf users
                        via a 3d-model sign gestures
                      </h3>
                      <div>
                        <Switch
                          selected={enableAvatar}
                          toggle={() => {
                            setEnableAvatar((prevState) => !prevState);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <h3 className="abel text-[1.25rem] ">Privacy Status</h3>
                    <div className="w-full flex justify-between items-end">
                      <h3 className="abel text-[0.9rem] ">
                        Manage your meeting privacy status and wether members
                        can join uninvited or not
                      </h3>
                      <div></div>
                    </div>
                    <div className="flex w-full gap-x-3 items-center justify-start mt-1">
                      <button
                        onClick={() => {
                          setPrivacyStatus("private");
                        }}
                        className={`abel md:flex transition-all hidden md:text-[1rem] font-semibold text-[1rem] ${
                          privacyStatus === "private"
                            ? "text-[#212121]"
                            : "text-[#cbcaca]"
                        }`}
                      >
                        Private
                      </button>
                      <button
                        onClick={() => {
                          setPrivacyStatus("public");
                        }}
                        className={`abel md:flex transition-all hidden md:text-[1rem] font-semibold text-[1rem] ${
                          privacyStatus === "public"
                            ? "text-[#212121]"
                            : "text-[#cbcaca]"
                        }`}
                      >
                        Public
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <h3 className="abel text-[1.25rem]">Pick Language</h3>
                    <div className="flex w-full gap-x-3 items-center justify-start px-1 mt-1">
                      <button
                        onClick={() => {
                          return notify(
                            "English is not yet supported on the platform",
                            "inform",
                            3000
                          );
                        }}
                        className={`abel md:flex transition-all hidden md:text-[1rem] font-semibold text-[1rem] ${
                          language === "English"
                            ? "text-[#212121]"
                            : "text-[#cbcaca]"
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage("Arabic");
                        }}
                        className={`abel md:flex transition-all hidden md:text-[1rem] font-semibold text-[1rem] ${
                          language === "Arabic"
                            ? "text-[#212121]"
                            : "text-[#cbcaca]"
                        }`}
                      >
                        Arabic
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full mt-1 flex flex-col gap-y-1">
                <div className="flex w-full justify-start items-center gap-x-2">
                  <h1 className="text-[#151515] outline-none text-[1rem] font-semibold abel ">
                    Join as a:
                  </h1>
                  <div className="flex  gap-x-3 items-center justify-start ">
                    <button
                      onClick={() => {
                        setSigner(false);
                      }}
                      className={`abel md:flex transition-all  hidden font-semibold text-[1rem]  ${
                        !signer ? "text-[#212121]" : "text-[#cbcaca]"
                      }`}
                    >
                      speaker
                    </button>
                    <button
                      onClick={() => {
                        setSigner(true);
                      }}
                      className={`abel md:flex transition-all  hidden font-semibold text-[1rem]  ${
                        signer ? "text-[#212121]" : "text-[#cbcaca]"
                      }`}
                    >
                      signer
                    </button>
                  </div>
                </div>
                <div className="flex gap-x-2 justify-start items-center mt-2">
                  <h1 className="abel text-[1rem] flex items-center h-[1rem] font-semibold   ">
                    Conference ID:
                  </h1>
                  <h1 className="abel text-[1rem] flex items-center h-[1rem]  ">
                    {meeting?.conferenceId}
                  </h1>
                </div>
                {meeting?.password && (
                  <div className="flex gap-x-2 justify-start items-center mt-2">
                    <h1 className="abel text-[1rem] flex items-center h-[1rem] font-semibold  ">
                      Password:
                    </h1>
                    <h1 className="abel text-[1rem] flex items-center h-[1rem] ">
                      {meeting?.password}
                    </h1>
                  </div>
                )}
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          {/* submit goes in here */}
          {previewBeforeJoinToggle ? (
            <button
              onClick={() => {
                dispatch(meetingActions.setSigner(signer));
                history(
                  `/conference/${meeting?.conferenceId}?signer=${signer}`
                );
              }}
              className="flex gap-x-1 items-center abel h-[2.375rem]  w-[10rem] justify-center text-center transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-[8px] drop-shadow-lg px-6"
            >
              Join meeting
            </button>
          ) : (
            <button
              onClick={() => {
                createInstantMeeting();
              }}
              className="flex gap-x-2 items-center label h-[2.375rem] mr-4 text-[.8rem] transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-lg card-shadow px-3 w-[13.5rem] justify-center"
            >
              {isPending ? (
                <CircularLoading button />
              ) : (
                <>
                  <span className="flex-shrink-0 abel text-[1rem]">
                    Create Instant Meeting
                  </span>
                  <span className="flex-shrink-0">
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
                        d="M14 1.75C14 1.33579 14.3358 1 14.75 1H18.25C18.6642 1 19 1.33579 19 1.75V5.25C19 5.66421 18.6642 6 18.25 6C17.8358 6 17.5 5.66421 17.5 5.25V3.56066L11.5303 9.53033C11.2374 9.82322 10.7626 9.82322 10.4697 9.53033C10.1768 9.23744 10.1768 8.76256 10.4697 8.46967L16.4393 2.5H14.75C14.3358 2.5 14 2.16421 14 1.75ZM1 4.75C1 3.23122 2.23122 2 3.75 2H9C9.41421 2 9.75 2.33579 9.75 2.75C9.75 3.16421 9.41421 3.5 9 3.5H3.75C3.05964 3.5 2.5 4.05964 2.5 4.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H15.25C15.9404 17.5 16.5 16.9404 16.5 16.25V11C16.5 10.5858 16.8358 10.25 17.25 10.25C17.6642 10.25 18 10.5858 18 11V16.25C18 17.7688 16.7688 19 15.25 19H3.75C2.23122 19 1 17.7688 1 16.25V4.75Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </>
              )}
            </button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateInstantMeetingModal;
