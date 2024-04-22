import tempProfileImage from "../../assets/selfPortrait.jpg";
import { useState } from "react";
import Switch from "../utility/Switch";

const Settings = () => {
  const [saveConversationsToggle, setSaveConversationsToggle] = useState(false);
  useState(false);
  const [
    saveConversationsNotAttendedToggle,
    setSaveConversationsNotAttendedToggle,
  ] = useState(false);
  const [defaultVideoOnToggle, setDefaultVideoOnToggle] = useState(false);
  const [defaultAudioOnToggle, setDefaultAudioOnToggle] = useState(false);
  const [sendEmailNotificationsToggle, setSendEmailNotificationsToggle] =
    useState(false);
  const [snedMRemindersViaEmailToggle, setSendMRemindersViaEmailToggle] =
    useState(false);
  const [
    hideFromMeetingConversationsToggle,
    setHideFromMeetingConversationsToggle,
  ] = useState(false);
  return (
    <div className=" h-full grid grid-cols-6 grid-rows-2 ml-[17.5rem] gap-y-4 gap-x-4 rounded-2xl  mr-[2rem] ">
      {/* meeting header */}
      <div className=" rounded-2xl w-full col-span-4 h-full bg-white card-shadow px-4 pt-3 ">
        <h3 className="abel text-[1.3rem] mb-2">Personal Infromation</h3>
        <div className="flex flex-col gap-x-4 h-[17.5em]  overflow-y-scroll px-2">
          <div className="flex  gap-x-8 w-full items-center">
            <div className="flex items-center justify-center  border-2 h-[8rem] p- w-[8rem] relative border[#eaeaea] rounded-full">
              <button className="absolute top-0 right-0 bg-white rounded-full p-1 card-shadow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_20890)">
                    <path
                      d="M16.9999 7.00004L6.99994 17"
                      stroke="#212121"
                      strokeWidth="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.00006 7.00003L17.0001 17"
                      stroke="#212121"
                      strokeWidth="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_20890">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <img
                className="h-[7.5rem] w-[7.5rem] rounded-full"
                src={tempProfileImage}
                alt=""
              />
            </div>
            <div className="h-full flex  flex-col gap-y-2 justify-center items-start">
              <div className="w-[20rem]">
                <h3 className="abel text-[1rem] ">Name</h3>
                <input
                  className={` border-black border-b-2 w-full py-1 px-2  abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                  type="text"
                  placeholder="Pleas enter your name"
                  value={"Ibrahim Askar"}
                />
              </div>
              <div className="w-[26rem] ">
                <h3 className="abel text-[1rem] ">Email</h3>
                <div className=" flex items-end gap-x-4">
                  <div className="w-[20rem]">
                    <input
                      className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                      type="text"
                      placeholder="Please enter your email"
                      value={"Ibrahemhani2014@gmail.com"}
                    />
                  </div>
                  <button className="abel text-[1rem] text-[#212121] font-semibold leading-5  ">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 flex gap-x-8">
            <div className="w-1/2">
              <h3 className="abel text-[1rem] ">Location</h3>
              <input
                className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                type="text"
                placeholder="Please enter your location"
                value={"Tanta, Egypt"}
              />
            </div>
            <div className="w-1/2">
              <h3 className="abel text-[1rem] ">Bio</h3>
              <input
                className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                type="text"
                placeholder="Please enter your location"
                value={"Leader of the edge battalion"}
              />
            </div>
          </div>
          <div className="w-full mt-6 flex justify-end h-[4.5rem] items-center">
            <button className="flex gap-x-1 items-center abel h-[2.375rem]   justify-center text-center transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-[8px] drop-shadow-md px-6">
              Update Personal Information
            </button>
          </div>
        </div>
      </div>
      <div className="w-full col-span-2 row-span-1 h-full px-4 py-3 rounded-2xl card-shadow bg-white">
        <h3 className="abel text-[1.3rem]">Account</h3>
        <div className="flex flex-col gap-x-4 mt-2 h-[17.5em] gap-y-6  overflow-y-scroll px-2">
          <div className="flex justify-between items-center ">
            <h3 className="abel text-[1.1rem] ">
              Send Notifications to your email
            </h3>
            <Switch
              selected={sendEmailNotificationsToggle}
              setSelect={setSendEmailNotificationsToggle}
            />
          </div>
          <div className="flex justify-between items-center ">
            <h3 className="abel text-[1.1rem] ">
              Send Meeting Reminders via Email
            </h3>
            <Switch
              selected={snedMRemindersViaEmailToggle}
              setSelect={setSendMRemindersViaEmailToggle}
            />
          </div>
          <div className="flex justify-between items-center ">
            <h3 className="abel text-[1.1rem] ">
              hide from meeting conversations
            </h3>
            <Switch
              selected={hideFromMeetingConversationsToggle}
              setSelect={setHideFromMeetingConversationsToggle}
            />
          </div>
        </div>
      </div>
      <div className="col-span-2 w-full px-4 pt-3 rounded-2xl h-full bg-white card-shadow ">
        <h3 className="abel text-[1.3rem] ">Change your Password</h3>
        <div className="h-[17rem] flex flex-col justify-between mt-2 px-2">
          <div className="flex flex-col gap-y-4">
            <div className="w-full">
              <h3 className="abel text-[1rem] ">Current Password</h3>
              <input
                className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                type="text"
                placeholder="Please enter your current password"
              />
            </div>
            <div className="w-full">
              <h3 className="abel text-[1rem] ">New Password</h3>
              <input
                className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                type="text"
                placeholder="Please enter your new password"
              />
            </div>
            <div className="w-full">
              <h3 className="abel text-[1rem] ">Confirm New Password</h3>
              <input
                className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                type="text"
                placeholder="Please confirm your new password"
              />
            </div>
          </div>
          <div className="w-full flex justify-end ">
            <button className="flex gap-x-1 items-center abel h-[2.375rem]  w-[10rem] justify-center text-center transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-[8px] drop-shadow-lg px-6">
              Update Password
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-4 w-full px-4 pt-3 rounded-2xl h-full bg-white card-shadow">
        <h3 className="abel text-[1.3rem] mb-2">Meetings</h3>
        <div className="h-[17rem] flex flex-col px-2 gap-y-6">
          <div className="flex justify-between items-center ">
            <h3 className="abel text-[1.1rem] ">
              Allow meetings conversations to be saved on meeting's participants
              accounts
            </h3>
            <Switch
              selected={saveConversationsToggle}
              setSelect={setSaveConversationsToggle}
            />
          </div>
          <div className="flex justify-between items-center ">
            <h3 className="abel text-[1.1rem] ">
              Save conversations of accepted meeting invitations you did not
              attend
            </h3>
            <Switch
              selected={saveConversationsNotAttendedToggle}
              setSelect={setSaveConversationsNotAttendedToggle}
            />
          </div>
          <div className="flex justify-between items-center ">
            <h3 className="abel text-[1.1rem] ">
              By default Start your meetings with video camera on
            </h3>
            <Switch
              selected={defaultVideoOnToggle}
              setSelect={setDefaultVideoOnToggle}
            />
          </div>
          <div className="flex justify-between items-center ">
            <h3 className="abel text-[1.1rem] ">
              By default Start your meetings with audio mic camera on
            </h3>
            <Switch
              selected={defaultAudioOnToggle}
              setSelect={setDefaultAudioOnToggle}
            />
          </div>
        </div>
      </div>

      {/* <div className=" col-span-2 w-full h-full flex flex-col justify-between bg-white card-shadow rounded-2xl px-4 pt-3">
          <h3 className="abel text-[1.3rem] mb-2">User Activity</h3>
        </div> */}
    </div>
  );
};

export default Settings;
