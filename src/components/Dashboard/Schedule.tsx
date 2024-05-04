import { useEffect, useState } from "react";
import DatePicker from "../utility/DatePicker";
import Switch from "@/components/utility/Switch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, isAxiosError } from "axios";
import { IUser } from "@/types/User";
import { motion, AnimatePresence } from "framer-motion";
import CircularLoading from "@/components/ui/CircularLoading";
import ParticipantSearchSelection from "@/components/dashboard/schedule/ParticipantSearchSelection";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useDispatch } from "react-redux";
import { scheduleActions } from "@/store/schedule/scheduleSlice";
import { notify } from "@/utils/Toaster/notify";
import { addMinutes, addYears, isAfter, isBefore } from "date-fns";
import { useNavigate } from "react-router";
import ParticipantsPreview from "@/components/dashboard/ParticipantsPreview";

const Schedule = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useSelector((state: RootState) => state.auth);
  const {
    title,
    description,
    participants,
    activityFlag,
    enableAvatar,
    enableInterpreter,
    language,
    saveConversation,
    startTime,
  } = useSelector((state: RootState) => state.schedule);
  console.log({
    startTime,
  });
  const {
    isPending: scheduleLoading,
    mutateAsync: scheduleSubmitHandler,
    reset,
    isSuccess,
  } = useMutation({
    mutationKey: ["scheduleMeeting"],
    mutationFn: async () => {
      console.log({
        startTime: new Date(startTime),
        dateToCompare: addMinutes(new Date(), 15),
      });
      if (!isAfter(new Date(startTime), addMinutes(new Date(), 15))) {
        throw new Error("Start time can't be less than 15 minutes from now");
      }
      if (!isBefore(new Date(startTime), addYears(new Date(), 1))) {
        throw new Error("Start time can't be more than one year from now");
      }
      await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/meetings/schedule`,
        {
          title,
          description,
          startTime,
          activityFlag,
          enableAvatar,
          enableInterpreter,
          saveConversation,
          language,
          participants: participants.map((participant) => participant.id),
        },
        {
          withCredentials: true,
        }
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["fetchMeetings", user?.id],
      });
      dispatch(scheduleActions.emptyInput());
      setParticipantsSearchTerm("");
      setToggleParticipantsSelection(false);
      notify("Meeting created successfully", "success", 3000);
      history("/dashboard/meetings");
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

  const [participantsSearchTerm, setParticipantsSearchTerm] =
    useState<string>("");
  const [toggleParticipantsSelection, setToggleParticipantsSelection] =
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

  console.log({
    participants,
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
  }, []); // Empty dependency array ensures the effect runs only once when component mounts

  return (
    <div className=" h-full card-shadow  pt-4 pb-2 bg-white ml-[17.5rem] rounded-3xl mr-[2rem] ">
      <h1 className="abel text-[3rem] leading-[3.5rem] px-8">Scehdule </h1>
      <h3 className="abel text-[1rem] px-8">
        Take the Lead: Start Planning Your Meetings Today!
      </h3>
      <div className="h-[85%] pb-4 mt-4 flex flex-col px-8 overflow-y-scroll justify-between">
        <div className="flex justify-between h-full w-full ">
          <div className="w-1/2 pr-[4.5rem]">
            <div className="flex flex-col gap-y-4">
              <div>
                <h3 className="abel text-[1.25rem] ">Title</h3>
                <input
                  value={title}
                  onChange={(e) => {
                    dispatch(scheduleActions.setTitle(e.target.value));
                  }}
                  className={` border-black border-b-2 w-full py-1 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                  type="text"
                  placeholder="Enter meeting title"
                />
              </div>
              <div>
                <h3 className="abel text-[1.25rem] ">Description</h3>
                <input
                  value={description}
                  onChange={(e) => {
                    dispatch(scheduleActions.setDescripiton(e.target.value));
                  }}
                  className={` border-black border-b-2 w-full py-1 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
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
                        className="absolute w-full  h-[15rem] top-[4.5rem] py-5 px-4 z-[100] rounded-xl bg-white card-shadow left-0 "
                      >
                        <div className="h-full flex flex-col gap-y-2 overflow-y-scroll w-full ">
                          {fetchParticipantsLoading ? (
                            <CircularLoading button />
                          ) : filteredParticipantsSearch.length === 0 &&
                            participants.length > 0 ? (
                            participants.map((participant) => (
                              <ParticipantSearchSelection
                                photo={participant.photo}
                                name={participant.name}
                                email={participant.email}
                                selected={participants.some(
                                  (participant) =>
                                    participant.id === participant.id
                                )}
                                id={participant.id}
                                key={participant.id}
                              />
                            ))
                          ) : (
                            filteredParticipantsSearch.map(
                              (participantSearchItem) => (
                                <ParticipantSearchSelection
                                  photo={participantSearchItem.photo}
                                  name={participantSearchItem.name}
                                  email={participantSearchItem.email}
                                  selected={participants.some(
                                    (participant) =>
                                      participant.id ===
                                      participantSearchItem.id
                                  )}
                                  id={participantSearchItem.id}
                                  key={participantSearchItem.id}
                                />
                              )
                            )
                          )}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
                <h3 className="abel text-[1.25rem] ">Participants</h3>
                <div className="border-black border-b-2 mb-1 py-1 px-2 flex justify-between items-center">
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
                      const allowedCharactersRegex = /^[a-zA-Z0-9@._ -]*$/;
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
                  className="flex mt-3 flex-wrap cursor-pointer"
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
                      photo={participant.photo}
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
                  <div className="w-full flex justify-between items-center">
                    <h3 className="abel text-[0.9rem] ">
                      Every interpreted word/sign will be saved as a message in
                      your converstations
                    </h3>
                    <div>
                      <Switch
                        selected={saveConversation}
                        toggle={() => {
                          dispatch(scheduleActions.toggleSaveConversation());
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-3">
                  <h3 className="abel text-[1.25rem] ">
                    Enable Sign Language Interpreter
                  </h3>
                  <div className="w-full flex justify-between items-center">
                    <h3 className="abel text-[0.9rem] ">
                      User's sign gestures will be detected and translated
                      automatically for deaf users
                    </h3>
                    <div>
                      <Switch
                        selected={enableInterpreter}
                        disabled={language === "English"}
                        toggle={() => {
                          dispatch(
                            scheduleActions.toggleEnableInterpreter(
                              !enableInterpreter
                            )
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <h3 className="abel text-[1.25rem]">Pick Language</h3>
                  <div className="flex w-full gap-x-3 items-center justify-start px-1">
                    <button
                      onClick={() => {
                        dispatch(scheduleActions.setLanguage("English"));
                        dispatch(
                          scheduleActions.toggleEnableInterpreter(false)
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
                        dispatch(scheduleActions.setLanguage("Arabic"));
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
                <div>
                  <h3 className="abel text-[1.25rem] mb-">
                    Pick Activity Flag
                  </h3>
                  <div className="flex flex-wrap gap-x-">
                    <div
                      className={`${
                        activityFlag === "#7986CB" &&
                        "border-2 border-[#7986CB]  "
                      } w-8 h-8 flex justify-center rounded-full items-center`}
                    >
                      <button
                        onClick={() => {
                          dispatch(scheduleActions.setActivityFlag("#7986CB"));
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
                          dispatch(scheduleActions.setActivityFlag("#8E24AA"));
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
                          dispatch(scheduleActions.setActivityFlag("#616161"));
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
                          dispatch(scheduleActions.setActivityFlag("#039BE5"));
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
                          dispatch(scheduleActions.setActivityFlag("#33B679"));
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
                          dispatch(scheduleActions.setActivityFlag("#E67C73"));
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
                          dispatch(scheduleActions.setActivityFlag("#F4511E"));
                        }}
                        className="w-5 h-5 rounded-full bg-[#F4511E]"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-between">
            <div className="h-full w-full">
              <DatePicker resetSuccess={reset} success={isSuccess} />
              <div className="flex flex-col">
                <h3 className="abel text-[1.25rem] ">
                  Enable Speech Avatar Display
                </h3>
                <div className="w-full flex justify-between items-center">
                  <h3 className="abel text-[0.9rem] ">
                    Every interpreted word will be displayed to deaf users via a
                    3d-model sign gestures
                  </h3>
                  <div>
                    <Switch
                      selected={enableAvatar}
                      toggle={() => {
                        dispatch(scheduleActions.toggleEnableAvatar());
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-4">
              <button className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all font-semibold bg-transparent border-2 border-[#151515] duration-200 text-black rounded-[8px] card-shadow px-6">
                <span>Reset</span>
              </button>
              <button
                onClick={() => {
                  scheduleSubmitHandler();
                }}
                className="abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-[8px] card-shadow w-[11rem]"
              >
                {scheduleLoading ? (
                  <CircularLoading button />
                ) : (
                  <div className="w-full flex gap-x-1 items-center justify-center">
                    <span>Schedule Meeting</span>
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H12M12 12H18M12 12V18M12 12V6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center items-center flex-col mt-12">
          <div className="relative  w-[45%]">
            <span className="bottom-3 rotate-180 right-0 absolute"></span>
            <img src={illustration_404} className="w-full" alt="" />
          </div>
          <h1 className="abel text-[1.3em] mt-2 capitalize">
            You Have No Meetings Yet? start planning Yours!
          </h1>
        </div> */}
    </div>
  );
};

export default Schedule;
