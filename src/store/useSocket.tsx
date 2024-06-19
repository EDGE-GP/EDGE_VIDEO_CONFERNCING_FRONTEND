import { useContext } from "react";
import SocketContext from "./SocketContext";
import { Socket } from "socket.io-client";

const useSocket = (): Socket | null => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context.socket;
};

export default useSocket;
