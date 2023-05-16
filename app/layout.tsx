import Navbar from "@/components/Navbar";
import "./globals.css";
import TestBar from "@/components/TestBar";
import ScratchBar from "@/components/ScrathNavbar";
export const metadata = {
  title: "The Soul Space | Home",
  description: "Find your aesthetic enjoyment through art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <ScratchBar />
        {children}
      </body>
    </html>
  );
}
