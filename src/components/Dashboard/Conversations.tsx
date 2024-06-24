import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IMeeting, IMessageGroup } from "@/types/Meeting";
import axios from "axios";
import Conversation from "./conversations/Conversation";
import { useEffect, useState } from "react";
import CircularLoading from "../ui/CircularLoading";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import MessageGroup from "./conversations/MessageGroup";
import { useSearchParams } from "react-router-dom";
const Conversations = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useSelector((state: RootState) => state.auth);
  const [selectedConversation, setSelectedConversation] = useState<string>("");
  const { data: conversations, isLoading: loadingConversations } = useQuery<
    IMeeting[]
  >({
    queryKey: ["fetchConversations"],
    queryFn: async () => {
      const res = await axios(
        `${process.env.BACKEND_SERVER}/api/v1/meetings/conversations`,
        { withCredentials: true }
      );
      console.log({ res });
      console.log({ data: res.data.data });
      if (!searchParams.get("id")) {
        setSelectedConversation(res.data.data.meetings[0].id || "");
      }
      return res.data.data.meetings ?? [];
    },
    retry: 1,
  });
  console.log({ conversations, loadingConversations });
  const { data: messageGroups, isLoading: loadingConversation } = useQuery<
    IMessageGroup[]
  >({
    queryKey: ["fetchMessages", selectedConversation],
    queryFn: async () => {
      const res = await axios(
        `${process.env.BACKEND_SERVER}/api/v1/meetings/conversations/${selectedConversation}`,
        { withCredentials: true }
      );
      return res.data.data.messageGroups ?? [];
    },
    enabled: !!selectedConversation,
  });
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["fetchMessages"] });
  }, [selectedConversation]);
  useEffect(() => {
    if (searchParams.get("id")) {
      setSelectedConversation(searchParams.get("id") || "");
    }
  }, [searchParams]);
  return (
    <div className=" h-full card-shadow  pt-4 bg-white ml-[17.5rem] rounded-3xl  mr-[2rem] ">
      <h1 className="abel text-[3rem] leading-[3.5rem] px-8 ">Conversations</h1>
      <h3 className="abel capitalize text-[1rem] px-8">
        Meeting Minutes: Capturing Every Uttered Word or Signed Gesture for
        Future Reference
      </h3>
      {loadingConversations ? (
        <div className="w-full h-full flex justify-center items-center">
          <CircularLoading button />
        </div>
      ) : (
        <div className=" relative pb-4 h-[84.5%] rounded-3xl  mt-6 px-8 flex gap-x-4">
          <div className="w-[20rem] h-full overflow-y-scroll border-[#151515] flex flex-col gap-y-2">
            {conversations?.map((conversation) => (
              <Conversation
                {...conversation}
                selected={conversation.id === selectedConversation}
                key={conversation.id}
                setSelectedConversation={setSelectedConversation}
              />
            ))}
          </div>
          <div className="w-[54rem] h-full rounded-2xl  bg-[#F8F8F8]">
            {loadingConversation ? (
              <div className="w-full h-full flex items-center justify-center">
                <CircularLoading button />
              </div>
            ) : (
              <div className="w-full h-full px-6 py-4 ">
                <div className="h-[100%] flex w-full flex-col-reverse gap-y-1  overflow-y-scroll">
                  {messageGroups?.map((messageGroup, index) => (
                    <MessageGroup
                      {...messageGroup}
                      isMe={messageGroup.sender.id === user?.id}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Conversations;
