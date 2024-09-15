"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// Create a context to manage the socket connection
const SocketContext = createContext<Socket | null>(null);

// Provider to wrap around the app or components
export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Connect to the socket server at port 8484
    const socketIo = io('ws://localhost:8484');
    console.log("sockect is connected pudongi")
    setSocket(socketIo);

    // Cleanup when the component unmounts
    return () => {
      socketIo.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom hook to use the socket
export const useSocket = () => {
  return useContext(SocketContext);
};
