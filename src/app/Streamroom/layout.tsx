import { SocketProvider } from "@/context/SocketContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div   className=" bg-black">
         <SocketProvider>
          {children}
        </SocketProvider>
      </div>
 
  );
}
