import { useEffect, useRef, useState } from "react";
import Switch from "@/components/utility/Switch";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { notify } from "@/utils/Toaster/notify";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, isAxiosError } from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/auth/authSlice";
import CircularLoading from "../ui/CircularLoading";
import ChangeYourPasswordSettingsModal from "../Auth/ChangeYourPasswordSettingsModal";
const Settings = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [sendEmailNotificationsToggle, setSendEmailNotificationsToggle] =
    useState(false);
  const [sendRemindersViaEmailToggle, setSendRemindersViaEmailToggle] =
    useState(false);
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const profileImageRef = useRef<HTMLInputElement | null>(null);

  const { mutateAsync: changePersonalInformation, isPending } = useMutation({
    mutationKey: ["changePersonalInformation"],
    mutationFn: async () => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("bio", bio);
      formData.append("location", location);
      if (selectedImage) {
        formData.append("avatar", selectedImage);
      }
      formData.append(
        "remindersViaEmail",
        sendRemindersViaEmailToggle.toString()
      );
      formData.append("notifyEmail", sendEmailNotificationsToggle.toString());
      const res = await axios.put(
        `${process.env.BACKEND_SERVER}/api/v1/users/update`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      return res;
    },
    onSuccess: (res) => {
      console.log({
        res,
      });
      dispatch(authActions.setUser({ user: res.data.data.user }));
      notify("Profile updated successfully", "success", 3000);
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

  useEffect(() => {
    if (!user) return;
    setSendEmailNotificationsToggle(user?.notifyEmail || true);
    setSendRemindersViaEmailToggle(user?.remindersViaEmail || true);
    setBio(user?.bio || "");
    setName(user?.name || "");
    setLocation(user?.location || "");
    setPreviewImage(user?.avatar || null);
  }, [user]);
  useEffect(() => {
    const isDisabled =
      user?.notifyEmail === sendEmailNotificationsToggle &&
      user?.remindersViaEmail === sendRemindersViaEmailToggle &&
      user?.bio === bio &&
      user?.name === name &&
      user?.location === location &&
      user?.avatar === previewImage;

    setDisabled(isDisabled);
  }, [
    sendEmailNotificationsToggle,
    sendRemindersViaEmailToggle,
    name,
    location,
    bio,
    selectedImage,
    user,
    previewImage,
  ]);

  return (
    // <div className=" h-full grid grid-cols-6 grid-rows-2 ml-[17.5rem] gap-y-4 gap-x-4 rounded-2xl  mr-[2rem] ">
    //   {/* meeting header */}
    //   <div className=" rounded-2xl w-full col-span-4 h-full bg-white card-shadow px-4 pt-3 ">
    //     <h3 className="abel text-[1.3rem] mb-2">Personal Infromation</h3>
    //     <div className="flex flex-col gap-x-4 h-[17.5em]  overflow-y-scroll px-2">
    //       <div className="flex  gap-x-8 w-full items-center">
    // <div className="flex items-center justify-center  border-2 h-[8rem] p- w-[8rem] relative border[#eaeaea] rounded-full">
    //   <button className="absolute top-0 right-0 bg-white rounded-full p-1 card-shadow">
    //     <svg
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <g clipPath="url(#clip0_1_20890)">
    //         <path
    //           d="M16.9999 7.00004L6.99994 17"
    //           stroke="#212121"
    //           strokeWidth="2"
    //           stroke-linecap="round"
    //           strokeLinejoin="round"
    //         />
    //         <path
    //           d="M7.00006 7.00003L17.0001 17"
    //           stroke="#212121"
    //           strokeWidth="2"
    //           stroke-linecap="round"
    //           strokeLinejoin="round"
    //         />
    //       </g>
    //       <defs>
    //         <clipPath id="clip0_1_20890">
    //           <rect width="24" height="24" fill="white" />
    //         </clipPath>
    //       </defs>
    //     </svg>
    //   </button>
    //   <img
    //     className="h-[7.5rem] w-[7.5rem] rounded-full"
    //     src={tempProfileImage}
    //     alt=""
    //   />
    // </div>
    //         <div className="h-full flex  flex-col gap-y-2 justify-center items-start">
    //           <div className="w-[20rem]">
    //             <h3 className="abel text-[1rem] ">Name</h3>
    //             <input
    //               className={` border-black border-b-2 w-full py-1 px-2  abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
    //               type="text"
    //               placeholder="Pleas enter your name"
    //               value={"Ibrahim Askar"}
    //             />
    //           </div>
    //           <div className="w-[26rem] ">
    //             <h3 className="abel text-[1rem] ">Email</h3>
    //             <div className=" flex items-end gap-x-4">
    //               <div className="w-[20rem]">
    //                 <input
    //                   className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
    //                   type="text"
    //                   placeholder="Please enter your email"
    //                   value={"Ibrahemhani2014@gmail.com"}
    //                 />
    //               </div>
    //               <button className="abel text-[1rem] text-[#212121] font-semibold leading-5  ">
    //                 Change
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full mt-4 flex gap-x-8">
    //         <div className="w-1/2">
    //           <h3 className="abel text-[1rem] ">Location</h3>
    //           <input
    //             className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
    //             type="text"
    //             placeholder="Please enter your location"
    //             value={"Tanta, Egypt"}
    //           />
    //         </div>
    //         <div className="w-1/2">
    //           <h3 className="abel text-[1rem] ">Bio</h3>
    //           <input
    //             className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
    //             type="text"
    //             placeholder="Please enter your location"
    //             value={"Leader of the edge battalion"}
    //           />
    //         </div>
    //       </div>
    //       <div className="w-full mt-6 flex justify-end h-[4.5rem] items-center">
    //         <button className="flex gap-x-1 items-center abel h-[2.375rem]   justify-center text-center transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-[8px] drop-shadow-md px-6">
    //           Change Personal Information
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-full col-span-2 row-span-1 h-full px-4 py-3 rounded-2xl card-shadow bg-white">
    //     <h3 className="abel text-[1.3rem]">Account</h3>
    //     <div className="flex flex-col gap-x-4 mt-2 h-[17.5em] gap-y-6  overflow-y-scroll px-2">
    //       <div className="flex justify-between items-center ">
    //         <h3 className="abel text-[1.1rem] ">
    //           Send Notifications to your email
    //         </h3>
    //         <Switch
    //           selected={sendEmailNotificationsToggle}
    //           toggle={() => {
    //             setSendEmailNotificationsToggle((prevState) => !prevState);
    //           }}
    //         />
    //       </div>
    //       <div className="flex justify-between items-center ">
    //         <h3 className="abel text-[1.1rem] ">
    //           Send Meeting Reminders via Email
    //         </h3>
    //         <Switch
    //           selected={snedMRemindersViaEmailToggle}
    //           toggle={() => {
    //             setSendMRemindersViaEmailToggle((prevState) => !prevState);
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="col-span-2 w-full px-4 pt-3 rounded-2xl h-full bg-white card-shadow ">
    //     <h3 className="abel text-[1.3rem] ">Change your Password</h3>
    //     <div className="h-[17rem] flex flex-col justify-between mt-2 px-2">
    // <div className="flex flex-col gap-y-4">
    //   <div className="w-full">
    //     <h3 className="abel text-[1rem] ">Current Password</h3>
    //     <input
    //       className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
    //       type="text"
    //       placeholder="Please enter your current password"
    //     />
    //   </div>
    //   <div className="w-full">
    //     <h3 className="abel text-[1rem] ">New Password</h3>
    //     <input
    //       className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
    //       type="text"
    //       placeholder="Please enter your new password"
    //     />
    //   </div>
    //   <div className="w-full">
    //     <h3 className="abel text-[1rem] ">Confirm New Password</h3>
    //     <input
    //       className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
    //       type="text"
    //       placeholder="Please confirm your new password"
    //     />
    //   </div>
    // </div>
    //       <div className="w-full flex justify-end ">
    //         <button className="flex gap-x-1 items-center abel h-[2.375rem]  w-[10rem] justify-center text-center transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-[8px] drop-shadow-lg px-6">
    //           Change Password
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="col-span-4 w-full px-4 pt-3 rounded-2xl h-full bg-white card-shadow">
    //     <h3 className="abel text-[1.3rem] mb-2">Meetings</h3>
    //     <div className="h-[17rem] flex flex-col px-2 gap-y-6">
    //       <div className="flex justify-between items-center ">
    //         <h3 className="abel text-[1.1rem] ">
    //           Allow meetings conversations to be saved on meeting's participants
    //           accounts
    //         </h3>
    //         <Switch
    //           selected={saveConversationsToggle}
    //           toggle={() => {
    //             setSaveConversationsToggle((prevState) => !prevState);
    //           }}
    //         />
    //       </div>
    //       <div className="flex justify-between items-center ">
    //         <h3 className="abel text-[1.1rem] ">
    //           Save conversations of accepted meeting invitations you did not
    //           attend
    //         </h3>
    //         <Switch
    //           selected={saveConversationsNotAttendedToggle}
    //           toggle={() => {
    //             setSaveConversationsNotAttendedToggle(
    //               (prevState) => !prevState
    //             );
    //           }}
    //         />
    //       </div>
    //       <div className="flex justify-between items-center ">
    //         <h3 className="abel text-[1.1rem] ">
    //           By default Start your meetings with video camera on
    //         </h3>
    //         <Switch
    //           selected={defaultVideoOnToggle}
    //           toggle={() => {
    //             setDefaultVideoOnToggle((prevState) => !prevState);
    //           }}
    //         />
    //       </div>
    //       <div className="flex justify-between items-center ">
    //         <h3 className="abel text-[1.1rem] ">
    //           By default Start your meetings with audio mic camera on
    //         </h3>
    //         <Switch
    //           selected={defaultAudioOnToggle}
    //           toggle={() => {
    //             setDefaultAudioOnToggle((prevState) => !prevState);
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   {/* <div className=" col-span-2 w-full h-full flex flex-col justify-between bg-white card-shadow rounded-2xl px-4 pt-3">
    //       <h3 className="abel text-[1.3rem] mb-2">User Activity</h3>
    //     </div> */}
    // </div>
    <div className="w-full h-full flex items-center pl-[19rem] ">
      <div className="w-[95%] h-[40.75rem] overflow-y-scroll card-shadow pt-4  items-center  bg-white rounded-[30px] ">
        <h1 className="abel text-[3rem] leading-[3.5rem] px-8 ">Settings</h1>
        <h3 className="abel capitalize text-[1rem] px-8">
          Mangage your profile settings: Customize your profile and adjust
          settings to meet your needs
        </h3>
        <div className="w-full flex justify-center items-center">
          <div className="max-w-[80%] h-[33.25rem] px-12 mt-6 flex flex-col justify-between">
            <div className="w-full">
              <div className="w-full flex items-center mb-5 gap-x-8">
                {previewImage ? (
                  <div className="flex items-center min-w-[9rem] h-[9rem] justify-center border-2 relative border[#eaeaea] rounded-full">
                    <button
                      onClick={() => setPreviewImage(null)}
                      className="absolute top-0 right-0 bg-white rounded-full p-1 card-shadow"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_20890)">
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
                      className="h-[8.5rem] w-[8.5rem] object-cover rounded-full"
                      src={previewImage}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="flex items-center min-w-[9rem] h-[9rem] justify-center border-2 relative border[#eaeaea] rounded-full">
                    <div className="w-full h-full bg-[#f2f2f2] relative  rounded-full flex flex-col justify-center items-center cursor-pointer ">
                      <input
                        ref={profileImageRef}
                        onChange={(event) => {
                          console.log(event);
                          const file = event.target.files?.[0];
                          if (!file) return;
                          console.log({ file });
                          setSelectedImage(file);
                          setPreviewImage(URL.createObjectURL(file));
                        }}
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        className="opacity-0 cursor-pointer absolute w-full h-full left-0 top-0"
                        name=""
                        id=""
                      />
                      <div className="mb-1">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 24.4922C19.0391 24.4922 24.4531 19.0781 24.4531 12.5391C24.4531 6.01172 19.0273 0.585938 12.4883 0.585938C5.96094 0.585938 0.546875 6.01172 0.546875 12.5391C0.546875 19.0781 5.97266 24.4922 12.5 24.4922ZM12.5 16.5352C8.97266 16.5352 6.26562 17.7891 5.07031 19.1953C3.5 17.4375 2.55078 15.1055 2.55078 12.5391C2.55078 7.01953 6.95703 2.57812 12.4883 2.57812C18.0195 2.57812 22.4492 7.01953 22.4609 12.5391C22.4727 15.1172 21.5117 17.4492 19.9297 19.207C18.7461 17.8008 16.0273 16.5352 12.5 16.5352ZM12.5 14.543C14.75 14.5664 16.5195 12.6445 16.5195 10.125C16.5195 7.75781 14.75 5.78906 12.5 5.78906C10.25 5.78906 8.46875 7.75781 8.48047 10.125C8.49219 12.6445 10.25 14.5195 12.5 14.543Z"
                            fill="#828282"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-[#828282] flex flex-col justify-center items-center text-[8px] text-center w-[75%] font-[400] ">
                        <span className="text-[#29AEF8] mr-[2px] ">
                          Select image
                        </span>
                        drag and drop one here
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col text-[#4F4F4F] gap-y-2 abel text-[0.9375rem]  justify-start items-start">
                  <span className="">
                    Change Your Profile Picture: Personalize your experience and
                    stand out by uploading a photo from your device that best
                    represents you.
                  </span>
                  <button
                    onClick={() => {
                      setPreviewImage(null);
                      setTimeout(() => {
                        profileImageRef.current?.click();
                      }, 300);
                    }}
                    className="text-[#29AEF8] font-semibold abel"
                  >
                    Change your profile picture
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-6">
                <div className="flex w-full justify-betweem items-start gap-x-12">
                  <div className="w-1/2">
                    <h3 className="abel text-[1.25rem] ">Name</h3>
                    <input
                      className={` border-black border-b-2 w-full py-1 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="w-1/2">
                    <h3 className="abel text-[1.25rem] ">Bio</h3>
                    <input
                      className={`border-black border-b-2 w-full py-1 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                      type="text"
                      value={bio}
                      onChange={(e) => {
                        setBio(e.target.value);
                      }}
                      placeholder="Enter your bio"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-betweem items-start gap-x-12">
                  <div className="w-1/2">
                    <h3 className="abel text-[1.25rem] ">Email</h3>
                    <div
                      className={`cursor-not-allowed border-black border-b-2 w-full py-1 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                    >
                      {user?.email}
                    </div>
                    {/* <div className="w-full flex mt-1 justify-end items-center">
                      <button className="abel text-[1rem] text-[#212121] font-semibold leading-5  ">
                        Change
                      </button>
                    </div> */}
                  </div>
                  <div className="w-1/2">
                    <h3 className="abel text-[1.25rem] ">Location</h3>
                    <input
                      className={` border-black border-b-2 w-full py-1 px-2 mb-1 abel text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                      type="text"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                      placeholder="Enter your loca"
                    />
                  </div>
                </div>
                <div className="flex justify-between w-fulll items-start gap-x-12">
                  <div className="flex justify-between items-center w-1/2">
                    <h3 className="abel text-[1.1rem] ">
                      Send Notifications to your email
                    </h3>
                    <Switch
                      selected={sendEmailNotificationsToggle}
                      toggle={() => {
                        setSendEmailNotificationsToggle(
                          (prevState) => !prevState
                        );
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center w-1/2">
                    <h3 className="abel text-[1.1rem] ">
                      Send Meeting Reminders via Email
                    </h3>
                    <Switch
                      selected={sendRemindersViaEmailToggle}
                      toggle={() => {
                        setSendRemindersViaEmailToggle(
                          (prevState) => !prevState
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-end pr-1 w-fulll items-start gap-x-12">
                  <ChangeYourPasswordSettingsModal />
                </div>
              </div>
            </div>
            <div className="w-full gap-x-4 flex justify-end h-[4.5rem] items-center">
              <button
                onClick={() => {
                  setSendEmailNotificationsToggle(user?.notifyEmail || true);
                  setSendRemindersViaEmailToggle(
                    user?.remindersViaEmail || true
                  );
                  setBio(user?.bio || "");
                  setName(user?.name || "");
                  setLocation(user?.location || "");
                  setPreviewImage(user?.avatar || null);
                }}
                className="flex gap-x-1 items-center abel h-[2.375rem]   justify-center text-center transition-all text-[#151515] border-[1px] border-[#E0E0E0] bg-transparent duration-200 rounded-[8px] drop-shadow-md px-6"
              >
                Reset default
              </button>
              <button
                onClick={() => {
                  changePersonalInformation();
                }}
                className={`flex gap-x-1 items-center abel h-[2.375rem]   justify-center text-center transition-all text-white ${
                  disabled ? "bg-[#a8a8a8]" : "bg-[#151515] hover:bg-[#282828]"
                } duration-200 rounded-[8px] drop-shadow-md w-[14rem] text-center`}
              >
                {isPending ? (
                  <CircularLoading button />
                ) : (
                  "Change Personal Information"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
