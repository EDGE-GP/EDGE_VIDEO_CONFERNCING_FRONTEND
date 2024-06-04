import Meetings from "@/components/dashboard/Meetings";
import Schedule from "@/components/dashboard/Schedule";
import Sidebar from "@/components/dashboard/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router";
import StageMeeting from "@/components/dashboard/StageMeeting";
import Stage from "@/components/dashboard/Stage";
import Conversations from "@/components/dashboard/Conversations";
import Networking from "@/components/dashboard/Networking";
import Settings from "@/components/dashboard/Settings";

import edgeLogo from "@/assets/edge.png";
import { useState } from "react";
const Dashboard = () => {
  const [SideBar, setSideBar] = useState(false);

  return (
    <>
      <div className="roundedbox bg-black w-[85%]  m-[3rem] ml-[2rem] top-[-2rem] md:hidden flex flex-row fixed   justify-between px-6">
        <button
          data-drawer-target="default-sidebar"
          onClick={() => {
            setSideBar(!SideBar);
          }}
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center mb-[] p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden  "
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div className=" h-full flex items-center mt-[.6rem] mr-3 ">
          <img src={edgeLogo} className="w-[4rem]" alt="" />
        </div>
      </div>
      <div className="w-screen bg-[#F7F7F7] pl-[2rem] h-screen overflow-hidden items-center mt-[4rem] md:mt-auto  flex justify-between ">
        <Sidebar sideVisibality={SideBar} />
        <div className="h-[92%] w-full">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="meetings"
                element={
                  <motion.div
                    key="meetings"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="h-[92vh] w-full">
                      <Meetings />
                    </div>
                  </motion.div>
                }
              />
              <Route
                path="stage/*"
                element={
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <motion.div
                          key="stage"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.1 }}
                        >
                          <div className="h-[92vh] w-full">
                            <Stage />
                          </div>
                        </motion.div>
                      }
                    />
                    <Route
                      path="/:conferenceId"
                      element={
                        <motion.div
                          key="stageMeeting"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.1 }}
                        >
                          <div className="h-[92vh] w-full">
                            <StageMeeting />
                          </div>
                        </motion.div>
                      }
                    />
                  </Routes>
                }
              />
              <Route
                path="schedule"
                element={
                  <motion.div
                    key="schedule"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="h-[92vh]">
                      <Schedule />
                    </div>
                  </motion.div>
                }
              />
              <Route
                path="conversations"
                element={
                  <motion.div
                    key="conversations"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="h-[92vh]">
                      <Conversations />
                    </div>
                  </motion.div>
                }
              />
              <Route
                path="networking"
                element={
                  <motion.div
                    key="networking"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="h-[92vh]">
                      <Networking />
                    </div>
                  </motion.div>
                }
              />
              <Route
                path="settings"
                element={
                  <motion.div
                    key="settings"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="h-[92vh]">
                      <Settings />
                    </div>
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
