import Meetings from "../components/Dashboard/Meetings";
import Sidebar from "../components/Dashboard/Sidebar";
import { motion, AnimatePresence } from "framer-motion";

import { useParams } from "react-router";
const Dashboard = () => {
  const { section } = useParams();

  return (
    <div className="w-screen bg-[#F7F7F7] pl-[2rem] h-screen overflow-hidden items-center  flex justify-between ">
      <Sidebar />
      <AnimatePresence mode="wait">
        {section === "meetings" && (
          <motion.div
            key="meetings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Meetings />
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
            <Meetings />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
