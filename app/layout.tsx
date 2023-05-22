import Provider from "@/components/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Session } from "next-auth";
import { ToastMessageContainer } from "@/components/Toast";

export const metadata = {
  title: "The Soul Space | Home",
  description: "Find your aesthetic enjoyment through art",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body className=" overflow-x-hidden">
        <Provider session={session}>
          <Navbar />
          {children}
          <ToastMessageContainer />
        </Provider>
      </body>
    </html>
  );
}
