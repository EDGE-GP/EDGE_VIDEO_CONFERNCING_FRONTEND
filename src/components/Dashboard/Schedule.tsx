import { useState } from "react";
import DatePicker from "../utility/DatePicker";
import dummyAccount1 from "../../assets/account4.png";
import dummyAccount2 from "../../assets/account6.png";
import dummyAccount3 from "../../assets/account3.png";
import tempProfileImage from "../../assets/selfPortrait.jpg";
import Switch from "../utility/Switch";
import { format } from "date-fns";

const Schedule = () => {
  const [meetingMinutes, setMeetingMinutes] = useState<boolean>(false);
  const [signInterpretedToggle, setSignInterpreterToggle] =
    useState<boolean>(false);
  const [avatarToggle, setAvatarToggle] = useState<boolean>(false);
  const [activityFlag, setActivityFlag] = useState<
    | "#7986CB"
    | "#8E24AA"
    | "#616161"
    | "#039BE5"
    | "#33B679"
    | "#E67C73"
    | "#F4511E"
  >("#7986CB");
  const [date, setDate] = useState<string>(
    `${format(new Date(), "yyyy-MM-dd")}T${format(new Date(), "HH:mm")}:00.000Z`
  );
  console.log({
    date,
  });
  return (
    <div className=" h-full card-shadow px-8 pt-4 pb-2 bg-white ml-[17.5rem] rounded-3xl mr-[2rem] ">
      <h1 className="abel text-[3rem] leading-[3.5rem]">Scehdule </h1>
      <h3 className="abel text-[1rem]">
        Take the Lead: Start Planning Your Meetings Today!
      </h3>
      <div className="h-[85%] pb-4 mt-4 flex flex-col overflow-y-scroll justify-between">
        <div className="flex justify-between  w-full ">
          <div className="w-1/2 pr-[4.5rem]">
            <div className="flex flex-col gap-y-4">
              <div>
                <h3 className="abel text-[1.25rem] ">Title</h3>
                <input
                  className={` border-black border-b-2 w-full py-1 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                  type="text"
                  placeholder="Enter meeting title"
                />
              </div>
              <div>
                <h3 className="abel text-[1.25rem] ">Description</h3>
                <input
                  className={` border-black border-b-2 w-full py-1 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                  type="text"
                  placeholder="Notifiy your meeting participants with a brief description"
                />
              </div>
              <div className="">
                <h3 className="abel text-[1.25rem] ">Participants</h3>
                <input
                  className={` border-black border-b-2 w-full py-1 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                  type="text"
                  placeholder="Invite meeting participants"
                />
                <div className="flex mt-3 flex-wrap ">
                  <img
                    className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                    src={tempProfileImage}
                    alt=""
                  />
                  <img
                    className="w-[2.5rem] object-cover  h-[2.5rem] translate-x-[-1rem] rounded-full"
                    src={dummyAccount1}
                    alt=""
                  />
                  <img
                    className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-2rem] rounded-full"
                    src={dummyAccount2}
                    alt=""
                  />
                  <img
                    className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-3rem] rounded-full"
                    src={dummyAccount3}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col mb-3">
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
                        selected={meetingMinutes}
                        setSelect={setMeetingMinutes}
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
                        selected={signInterpretedToggle}
                        setSelect={setSignInterpreterToggle}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="abel text-[1.25rem] mb-1">
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
          <div className="w-1/2">
            <DatePicker dateChangeStateHandler={setDate} />
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
                  <Switch selected={avatarToggle} setSelect={setAvatarToggle} />
                </div>
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
