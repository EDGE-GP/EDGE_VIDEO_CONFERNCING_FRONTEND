import React, { createContext, useEffect, useState, ReactNode } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { RootState } from ".";

interface SocketContextProps {
  socket: Socket | null;
}

const SocketContext = createContext<SocketContextProps | undefined>(undefined);

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
  const [socket, setSocket] = useState<Socket | null>(null);
  console.log({ user, isLoggedIn });
  useEffect(() => {
    if (!user) return;
    const socketInstance: Socket = io(`${process.env.BACKEND_SERVER}`, {
      query: {
        id: user?.id,
      },
    });

    setSocket(socketInstance);
    console.log("socket connected");

    return () => {
      socketInstance.disconnect();
    };
  }, [isLoggedIn, user]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
