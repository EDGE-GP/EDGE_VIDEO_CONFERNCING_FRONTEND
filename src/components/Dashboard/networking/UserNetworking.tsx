import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import UserFriendships from "./friendships/UserFriendships";
import AddFriendships from "./friendships/AddFriendships";

const UserNetworking = () => {
  return (
    <div className="col-span-2 w-full px-4 pt-3 rounded-2xl h-full bg-white card-shadow">
      <AnimatePresence mode="wait">
        <Tabs defaultValue="userFriendships" className="w-full abel py-0 ">
          <TabsList className="flex gap-x-4 justify-start mb-0">
            <TabsTrigger
              value="userFriendships"
              className={`px-0 py-0 text-[1.3rem] rounded-0 `}
            >
              Friendships
            </TabsTrigger>
            <TabsTrigger
              value="userSearch"
              className={`px-0 py-0 text-[1.3rem] rounded-0`}
            >
              Add Friends
            </TabsTrigger>
          </TabsList>
          <TabsContent value="userFriendships">
            <motion.div
              key="friendships"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <UserFriendships />
            </motion.div>
          </TabsContent>
          <TabsContent value="userSearch">
            <motion.div
              key="search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AddFriendships />
            </motion.div>
          </TabsContent>
        </Tabs>
      </AnimatePresence>
    </div>
  );
};

export default UserNetworking;
