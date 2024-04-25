import React from 'react';
import dummyAccount1 from "../../assets/account4.png";
import dummyAccount2 from "../../assets/account6.png";
import dummyAccount3 from "../../assets/account3.png";
import tempProfileImage from "../../assets/selfPortrait.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { Variants } from "framer-motion";

import notifacions from "../../assets/notification.png"

interface DropDownNotificationsProps {
  isOpen: boolean;
  toggleDropdown: () => void;
}


const DropDownNotifications: React.FC<DropDownNotificationsProps> = ({ isOpen, toggleDropdown }) => {

  
    return (
        <div className="relative  hideButtons">
        <button
      className="flex items-center rounded bg-black bg-primary p-2 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      type="button"
      onClick={toggleDropdown}
    >
      <span className="ms-2"> {/* Adjust width here */}
      <img src={notifacions} className=" w-6 mr-2" alt="" /> {/* Adjust width here */}
    
      </span>
    </button>
    <AnimatePresence mode='wait'>
          {isOpen && (
            
            <motion.div
            transition={{ ease: "easeOut", duration: 0.3 }}
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            
            className="absolute top-full right-[2%]  transition  z-50 h-auto min-w-[35vh]  w-full col-span-2 row-span-2  px-4 py-3 rounded-2xl card-shadow bg-white">
            <h3 className="abel text-[1.3rem] dropdown-menu mb-2">Notifications</h3>
            <div className="flex flex-col gap-y-2 h-[94.5%] overflow-y-scroll">
              <div className="flex flex-col   justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
                <div className="w-full flex items-center gap-x-2 min-h-[3.5rem] ">
                  <img
                    className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                    src={tempProfileImage}
                    alt=""
                  />
    
                  <h3 className="abel text-[1.1rem] h-full w-full ">
                    Ibrahim Askar accepted your friend request
                  </h3>
                </div>
                <div className="w-full flex justify-end items-center">
                  <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                    8 Apr 7:41PM
                  </h1>
                </div>
              </div>
              <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
                <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
                  <img
                    className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                    src={dummyAccount1}
                    alt=""
                  />
    
                  <h3 className="abel text-[1.1rem] ">
                    Ibrahim Askar accepted your friend request
                  </h3>
                </div>
                <div className="w-full flex justify-end items-center">
                  <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                    8 Apr 7:41PM
                  </h1>
                </div>
              </div>
              <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
                <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
                  <img
                    className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                    src={tempProfileImage}
                    alt=""
                  />
    
                  <h3 className="abel text-[1.1rem] ">
                    Feyd Rutha accepted your friend request
                  </h3>
                </div>
                <div className="w-full flex justify-end items-center">
                  <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                    8 Apr 7:41PM
                  </h1>
                </div>
              </div>
              <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
                <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
                  <img
                    className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                    src={dummyAccount1}
                    alt=""
                  />
    
                  <h3 className="abel text-[1.1rem] ">
                    Paul Atreides accepted your friend request
                  </h3>
                </div>
                <div className="w-full flex justify-end items-center">
                  <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                    8 Apr 7:41PM
                  </h1>
                </div>
              </div>
              <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
                <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
                  <img
                    className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                    src={dummyAccount2}
                    alt=""
                  />
    
                  <h3 className="abel text-[1.1rem] ">
                    Ibrahim Askar accepted your friend request
                  </h3>
                </div>
                <div className="w-full flex justify-end items-center">
                  <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                    8 Apr 7:41PM
                  </h1>
                </div>
              </div>
              <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
                <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
                  <img
                    className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                    src={dummyAccount3}
                    alt=""
                  />
    
                  <h3 className="abel text-[1.1rem] ">
                    Paul Atreides accepted your friend request
                  </h3>
                </div>
                <div className="w-full flex justify-end items-center">
                  <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                    8 Apr 7:41PM
                  </h1>
                </div>
              </div>
              <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
                <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
                  <img
                    className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                    src={dummyAccount1}
                    alt=""
                  />
    
                  <h3 className="abel text-[1.1rem] ">
                    Feyd Rutha accepted your friend request
                  </h3>
                </div>
                <div className="w-full flex justify-end items-center">
                  <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                    8 Apr 7:41PM
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
          )}</AnimatePresence>
        </div>
      );
};

export default DropDownNotifications;