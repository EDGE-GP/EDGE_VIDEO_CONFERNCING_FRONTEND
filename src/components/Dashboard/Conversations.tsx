import tempProfileImage from "../../assets/selfPortrait.jpg";
import dummyAccount1 from "../../assets/account4.png";
import dummyAccount2 from "../../assets/account6.png";
import dummyAccount3 from "../../assets/account3.png";
import { useState } from "react";
const Conversations = () => {
  const [hidden, setHidden] = useState(false);


  // Function to handle click events
  const handleHideClick = () => {
    setHidden(!hidden);  // This will hide the div when any <a> is clicked
  };
      return (
        <div className=" h-full card-shadow  pt-4 md:ml-[17.5rem] bg-white ml-[0rem] rounded-3xl  mr-[2rem] ">
  <button 
    onClick={handleHideClick}  // This is the function to navigate back in history
      type="button" 
      className={`inline-flex items-center justify-center p-2 ml-5 text-sm text-white bg-black rounded-lg  ${hidden ? "flex" : "hidden"} md:hidden `}
  >
      <span className="sr-only ">Go back</span>
      <svg className="w-6 h-6 mr-[.3rem]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M13.707 4.293a1 1 0 010 1.414L10.414 9H17a1 1 0 110 2h-6.586l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
  </button>
  
        <h1 className={`abel text-[3rem] leading-[3.5rem] px-8 mt-4 md:mt-auto ${hidden ? "hidden" : "flex"} md:flex `}>Conversations</h1>
        <h3 className={`abel capitalize text-[1rem] px-8 ${hidden ? "hidden" : "flex"} md:flex`}>
          Meeting Minutes: Capturing Every Uttered Word or Signed Gesture for
          Future Reference
        </h3>
        <div className=" relative pb-4 md:h-[84.5%]  rounded-3xl  mt-6 px-8 flex gap-x-4">
        <div className={`w-[20rem] h-full overflow-y-scroll border-[#151515] flex flex-col gap-y-2 ${hidden ? "hidden" : "flex"} md:flex`}>
        <a onClick={handleHideClick} className="flex flex-col gap-y-1 bg-[#F8F8F8] rounded-xl py-3 px-3 w-full justify-center items-center cursor-pointer">
          <div className="w-full px-2">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                <div className="w-6 h-6 rounded-full bg-[#7986CB]"></div>
                <h3 className="text-lg">Project Kickoff Meeting</h3>
              </div>
            </div>
            <h1 className="text-[#a3a3a3] text-sm">
              Thursday, 11<sub className="align-super">th</sub> April 2024
            </h1>
            {/* Assuming images are part of your state or props */}
          </div>
        </a>
        <a onClick={handleHideClick} className="flex flex-col gap-y-1 rounded-xl py-3 px-3 w-full justify-center items-center cursor-pointer">
          <div className="w-full px-2">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2 items-center">
                <div className="w-6 h-6 rounded-full bg-[#616161]"></div>
                <h3 className="text-lg">Standup Meeting</h3>
              </div>
            </div>
            <h1 className="text-[#a3a3a3] text-sm">
              Thursday, 11<sub className="align-super">th</sub> April 2024
            </h1>
            {/* Assuming images are part of your state or props */}
          </div>
        </a>
      </div>
          <div className={`${hidden ? "flex" : "hidden"} md:flex w-[54rem]  h-full rounded-2xl bg-[#F8F8F8]`}>
            <div className="w-full h-full px-6 py-4 ">
              <div className="h-[100%] flex w-full flex-col-reverse gap-y-1  overflow-y-scroll">
                <div className="flex  justify-start flex-row-reverse w-full gap-x-2">
                  <div className="w-[3.25rem] md:flex hidden justify-center items-center rounded-full h-[3.25rem]">
                    <img
                      className="w-[3rem] object-cover h-[3rem] rounded-full"
                      src={tempProfileImage}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 w-full justify-end items-end my-2 md:my-auto ">
                    <h1 className="text-[1rem] abel font-semibold text-start m ">
                      Ibrahim Askar
                    </h1>
                    <div className="px-3 abel bg-[#151515] text-white py-2 rounded-[10px] flex justify-start items-center">
                      <span>
                        Oh wow? we don't have that much time then, don't you
                        think?
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-start w-full gap-x-2">
                  <div className="w-[3.25rem] md:flex hidden justify-center items-center rounded-full h-[3.25rem]">
                    <img
                      className="w-[3rem] object-cover h-[3rem] rounded-full"
                      src={tempProfileImage}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 w-full justify-start items-start">
                    <h1 className="text-[1rem] abel font-semibold ">
                      Ibrahim Askar
                    </h1>
                    <div className="px-3 abel bg-[#ebebeb] py-2 rounded-[10px] flex justify-start items-center">
                      <span>Well, i think we should be finished by May</span>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-start flex-row-reverse w-full gap-x-2">
                  <div className="w-[3.25rem] md:flex hidden justify-center items-center rounded-full h-[3.25rem]">
                    <img
                      className="w-[3rem] object-cover h-[3rem] rounded-full"
                      src={tempProfileImage}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 w-full justify-end items-end my-2 md:my-auto">
                    <h1 className="text-[1rem] abel font-semibold text-start ">
                      Ibrahim Askar
                    </h1>
                    <div className="px-3 abel bg-[#151515] text-white py-2 rounded-[10px] flex justify-start items-center">
                      <span>What is the avilable timeline for the project?</span>
                    </div>
                  </div>
                </div>
  
                <div className="flex  justify-start w-full gap-x-2">
                  <div className="w-[3.25rem] md:flex hidden justify-center items-center rounded-full h-[3.25rem]">
                    <img
                      className="w-[3rem] object-cover h-[3rem] rounded-full"
                      src={tempProfileImage}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 w-full justify-start items-start">
                    <h1 className="text-[1rem] abel font-semibold ">
                      Ibrahim Askar
                    </h1>
                    <div className="px-3 abel bg-[#ebebeb] py-2 rounded-[10px] flex justify-start items-center">
                      <span>Okay Let's kick it off!</span>
                    </div>
                  </div>
                </div>
  
                <div className="flex  justify-start flex-row-reverse w-full gap-x-2">
                  <div className="w-[3.25rem] md:flex hidden justify-center items-center rounded-full h-[3.25rem]">
                    <img
                      className="w-[3rem] object-cover h-[3rem] rounded-full"
                      src={tempProfileImage}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 w-full justify-end items-end my-2 md:my-auto">
                    <h1 className="text-[1rem] abel font-semibold text-start ">
                      Ibrahim Askar
                    </h1>
                    <div className="px-3  abel bg-[#151515] text-white py-2 rounded-[10px] flex justify-start items-center">
                      <span>All good thank you</span>
                    </div>
                    <div className="px-3 abel bg-[#151515] text-white py-2 rounded-[10px] flex justify-start items-center">
                      <span>We need to start planning for the project</span>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-start w-full gap-x-2">
                  <div className="w-[3.25rem] md:flex hidden justify-center items-center rounded-full h-[3.25rem]">
                    <img
                      className="w-[3rem] object-cover h-[3rem] rounded-full"
                      src={tempProfileImage}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-y-1 w-full justify-start items-start">
                    <h1 className="text-[1rem] abel font-semibold ">
                      Ibrahim Askar
                    </h1>
                    <div className="px-3 abel bg-[#ebebeb] py-2  rounded-[10px] flex justify-start items-center">
                      <span>Hello, World!</span>
                    </div>
                    <div className="px-3 abel bg-[#ebebeb] py-2 rounded-[10px] flex justify-start items-center">
                      <span>How are you doing today?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
};

export default Conversations;
