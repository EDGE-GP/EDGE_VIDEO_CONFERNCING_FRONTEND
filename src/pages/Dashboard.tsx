import Meetings from "../components/Dashboard/Meetings";
import Schedule from "../components/Dashboard/Schedule";
import Sidebar from "../components/Dashboard/Sidebar";
import { motion, AnimatePresence } from "framer-motion";

import { useLocation, useParams } from "react-router";
import StageMeeting from "../components/Dashboard/StageMeeting";
import Stage from "../components/Dashboard/Stage";
import Conversations from "../components/Dashboard/Conversations";
import Networking from "../components/Dashboard/Networking";
const Dashboard = () => {
  const location = useLocation();
  const { section } = useParams();
  const params = new URLSearchParams(location.search);

  return (
    <div className="w-screen bg-[#F7F7F7] pl-[2rem] h-screen overflow-hidden items-center  flex justify-between ">
      <Sidebar />
      <div className="h-[92%] w-full">
        <AnimatePresence mode="wait">
          {section === "meetings" && (
            <motion.div
              key="meetings"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="h-[92vh]">
                <Meetings />
              </div>
            </motion.div>
          )}
          {section === "stage" && (
            <motion.div
              key="stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="h-[92vh]">
                {params.get("meetingId") ? <StageMeeting /> : <Stage />}
              </div>
            </motion.div>
          )}
          {section === "schedule" && (
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
          )}
          {section === "conversations" && (
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
          )}
          {section === "networking" && (
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
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
