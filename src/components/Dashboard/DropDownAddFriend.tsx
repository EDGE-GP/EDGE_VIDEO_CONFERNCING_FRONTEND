import React from 'react';

import dummyAccount1 from "../../assets/account4.png";
import dummyAccount2 from "../../assets/account6.png";

import tempProfileImage from "../../assets/selfPortrait.jpg";

import notifacions from "../../assets/addFriend.png"
import { AnimatePresence, motion } from "framer-motion";


interface DropDownAddFriendProps {
    isOpen: boolean;
    toggleDropdown: () => void;
}


const DropDownAddFriend: React.FC<DropDownAddFriendProps> = ({ isOpen, toggleDropdown }) => {
    // Add your component logic here

    return (
        <div className="relative">
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
           className="absolute top-full right-[-120%] z-50 h-auto   col-span-2 w-full px-4 pt-3 rounded-2xl min-w-[35vh] bg-white card-shadow">
           <h3 className="abel text-[1.3rem] mb-2">Friend Requests</h3>
           <div className="flex flex-col px-2 gap-y-2 h-[17.5em] overflow-y-scroll">
             <div className="flex justify-between ">
               <div className="flex justify-start items-center gap-x-2">
                 <img
                   className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                   src={tempProfileImage}
                   alt=""
                 />
                 <h1 className="text-[1.1rem] abel">Ibrahim Askar</h1>
               </div>
               <div className="flex items-center gap-x-3 h-full ">
                 <button className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all">
                   Delete
                 </button>
                 <button className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]">
                   Accept
                 </button>
               </div>
             </div>
             <div className="flex justify-between ">
               <div className="flex justify-start items-center gap-x-2">
                 <img
                   className="w-[2.rem] object-cover h-[2.5rem] rounded-full"
                   src={dummyAccount1}
                   alt=""
                 />
                 <h1 className="text-[1.1rem] abel">Feyd Rutha</h1>
               </div>
               <div className="flex items-center gap-x-3 h-full ">
                 <button className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all">
                   Delete
                 </button>
                 <button className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]">
                   Accept
                 </button>
               </div>
             </div>
             <div className="flex justify-between ">
               <div className="flex justify-start items-center gap-x-2">
                 <img
                   className="w-[2.rem] object-cover h-[2.5rem] rounded-full"
                   src={dummyAccount2}
                   alt=""
                 />
                 <h1 className="text-[1.1rem] abel">Paul Atreides</h1>
               </div>
               <div className="flex items-center gap-x-3 h-full ">
                 <button className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all">
                   Delete
                 </button>
                 <button className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]">
                   Accept
                 </button>
               </div>
             </div>
           </div>
         </motion.div>
          )}
        </AnimatePresence>
        </div>
    );
};

export default DropDownAddFriend;