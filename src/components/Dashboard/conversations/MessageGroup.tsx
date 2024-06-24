import defaultProfileImage from "@/assets/default.jpg";
import { IMessageGroup } from "@/types/Meeting";
import React from "react";
interface IMessageGroupPreview extends IMessageGroup {
  isMe: boolean;
}
const MessageGroup: React.FC<IMessageGroupPreview> = ({
  sender,
  messages,
  isMe,
}) => {
  console.log({ messages });
  return (
    <>
      {isMe ? (
        <div className="flex  justify-start flex-row-reverse w-full gap-x-2">
          <div className="w-[3.25rem] flex justify-center items-center rounded-full h-[3.25rem]">
            <img
              className="w-[3rem] object-cover h-[3rem] rounded-full"
              src={sender.avatar || defaultProfileImage}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full justify-end items-end">
            <h1 className="text-[1rem] abel font-semibold text-start ">
              {sender.name}
            </h1>
            {messages.map((message) => (
              <div
                key={message.id}
                className="px-3 abel bg-[#151515] text-white py-2 rounded-[10px] flex justify-start items-center"
              >
                <span>{message.content}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex  justify-start w-full gap-x-2">
          <div className="w-[3.25rem] flex justify-center items-center rounded-full h-[3.25rem]">
            <img
              className="w-[3rem] object-cover h-[3rem] rounded-full"
              src={sender.avatar || defaultProfileImage}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full justify-start items-start">
            <h1 className="text-[1rem] abel font-semibold "> {sender.name}</h1>
            {messages.map((message) => (
              <div
                key={message.id}
                className="px-3 abel bg-[#ebebeb] py-2 rounded-[10px] flex justify-start items-center"
              >
                <span>{message.content}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MessageGroup;
