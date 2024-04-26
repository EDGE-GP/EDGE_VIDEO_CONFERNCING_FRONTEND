import { useEffect, useState } from "react";
import DatePicker from "../utility/DatePicker";
import dummyAccount1 from "../../assets/account4.png";
import dummyAccount2 from "../../assets/account6.png";
import dummyAccount3 from "../../assets/account3.png";
import tempProfileImage from "../../assets/selfPortrait.jpg";
import Switch from "../utility/Switch";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IUser } from "../../types/Auth";
import { motion, AnimatePresence } from "framer-motion";
import CircularLoading from "../UI/CircularLoading";
import ParticipantSearchSelection from "../Schedule/ParticipantSearchSelection";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { scheduleActions } from "../../store/schedule/scheduleSlice";
import { ActivityFlagEnum } from "../../types/Meeting";
import defaultProfileImage from "../../assets/default.jpg";

const Schedule = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {
    title,
    description,
    participants,
    activityFlag,
    enableAvatar,
    enableInterpreter,
    language,
    saveConversation,
  } = useSelector((state: RootState) => state.schedule);

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
        setToggleParticipantsSelection(false);
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

  // const { isLoading, error, isSuccess } = useMutation({
  //   mutationKey: ["scheduleMeeting"],
  //   mutationFn: async () => {
  //    try{
  //     const res = await axios(`${process.env.BACKEND_SERVER}/api/v1/meetings/schedule`)
  //    }catch(error){
  //     isAxiosError(error){

  //     }
  //    }
  //   },
  // });

  useEffect(() => {
    const timer = setTimeout(() => {
      queryClient.invalidateQueries({
        queryKey: ["fetchParticipants"],
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [participantsSearchTerm, queryClient]);
  console.log({
    filteredParticipantsSearch,
    fetchParticipantsLoading,
  });
  return (
    <div className=" h-full card-shadow  pt-4 pb-2 bg-white ml-[17.5rem] rounded-3xl mr-[2rem] ">
      <h1 className="abel text-[3rem] leading-[3.5rem] px-8">Scehdule </h1>
      <h3 className="abel text-[1rem] px-8">
        Take the Lead: Start Planning Your Meetings Today!
      </h3>
      <div className="h-[85%] pb-4 mt-4 flex flex-col px-8 overflow-y-scroll justify-between">
        <div className="flex justify-between  w-full ">
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
                        className="absolute w-full  h-[15rem] top-[4.5rem] py-5 px-4 z-[100] rounded-xl bg-white drop-shadow-xl left-0 "
                      >
                        <div className="h-full flex flex-col gap-y-2 overflow-y-scroll w-full ">
                          {filteredParticipantsSearch.map(
                            (participantSearchItem) => (
                              <ParticipantSearchSelection
                                photo={participantSearchItem.photo}
                                name={participantSearchItem.name}
                                email={participantSearchItem.email}
                                selected={participants.some(
                                  (participant) =>
                                    participant.id === participantSearchItem.id
                                )}
                                id={participantSearchItem.id}
                                key={participantSearchItem.id}
                              />
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
                <div className="flex mt-3 flex-wrap ">
                  {participants.map((participant, index) => (
                    <img
                      style={{ transform: `translateX(-${index}rem)` }}
                      key={participant.id}
                      className={`w-[2.5rem] object-cover h-[2.5rem] rounded-full`}
                      src={participant.photo || defaultProfileImage}
                      alt=""
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
                        toggle={() => {
                          dispatch(scheduleActions.toggleEnableInterpreter());
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-1">
                  <h3 className="abel text-[1.25rem]">Pick Language</h3>
                  <div className="flex w-full gap-x-3 items-center justify-start px-1">
                    <button
                      onClick={() => {
                        dispatch(scheduleActions.setLanguage("English"));
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
                  <h3 className="abel text-[1.25rem] mb-1">
                    Pick Activity Flag
                  </h3>
                  <div className="flex flex-wrap gap-x-">
                    <div
                      className={`${
                        activityFlag === ActivityFlagEnum["#7986CB"] &&
                        "border-2 border-[#7986CB]  "
                      } w-8 h-8 flex justify-center rounded-full items-center`}
                    >
                      <button
                        onClick={() => {
                          dispatch(
                            scheduleActions.setActivityFlag(
                              ActivityFlagEnum["#7986CB"]
                            )
                          );
                        }}
                        className="w-5 h-5 rounded-full bg-[#7986CB]"
                      ></button>
                    </div>
                    <div
                      className={`${
                        activityFlag === ActivityFlagEnum["#8E24AA"] &&
                        "border-2 border-[#8E24AA]  "
                      } w-8 h-8  flex justify-center rounded-full items-center`}
                    >
                      <button
                        onClick={() => {
                          dispatch(
                            scheduleActions.setActivityFlag(
                              ActivityFlagEnum["#8E24AA"]
                            )
                          );
                        }}
                        className="w-5 h-5 rounded-full bg-[#8E24AA]"
                      ></button>
                    </div>
                    <div
                      className={`${
                        activityFlag === ActivityFlagEnum["#616161"] &&
                        "border-2 border-[#616161]  "
                      } w-8 h-8  flex justify-center rounded-full items-center`}
                    >
                      <button
                        onClick={() => {
                          dispatch(
                            scheduleActions.setActivityFlag(
                              ActivityFlagEnum["#616161"]
                            )
                          );
                        }}
                        className="w-5 h-5 rounded-full bg-[#616161]"
                      ></button>
                    </div>
                    <div
                      className={`${
                        activityFlag === ActivityFlagEnum["#039BE5"] &&
                        "border-2 border-[#039BE5]  "
                      } w-8 h-8  flex justify-center rounded-full items-center`}
                    >
                      <button
                        onClick={() => {
                          dispatch(
                            scheduleActions.setActivityFlag(
                              ActivityFlagEnum["#039BE5"]
                            )
                          );
                        }}
                        className="w-5 h-5 rounded-full bg-[#039BE5]"
                      ></button>
                    </div>
                    <div
                      className={`${
                        activityFlag === ActivityFlagEnum["#33B679"] &&
                        "border-2 border-[#33B679]  "
                      } w-8 h-8  flex justify-center rounded-full items-center`}
                    >
                      <button
                        onClick={() => {
                          dispatch(
                            scheduleActions.setActivityFlag(
                              ActivityFlagEnum["#33B679"]
                            )
                          );
                        }}
                        className="w-5 h-5 rounded-full bg-[#33B679]"
                      ></button>
                    </div>
                    <div
                      className={`${
                        activityFlag === ActivityFlagEnum["#E67C73"] &&
                        "border-2 border-[#E67C73]  "
                      } w-8 h-8  flex justify-center rounded-full items-center`}
                    >
                      <button
                        onClick={() => {
                          dispatch(
                            scheduleActions.setActivityFlag(
                              ActivityFlagEnum["#E67C73"]
                            )
                          );
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
                          dispatch(
                            scheduleActions.setActivityFlag(
                              ActivityFlagEnum["#F4511E"]
                            )
                          );
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
            <div className="">
              <DatePicker />
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
              <button className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-[8px] card-shadow px-6">
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
