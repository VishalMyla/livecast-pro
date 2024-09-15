export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body





    // className={clsx(`${geistSans.variable}` , `${geistMono.variable}`,  "antialiased")}


      className=" bg-black">
        {children}
      </body>
    </html>
  );
}
