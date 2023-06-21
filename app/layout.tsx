import Provider from "@/components/Global/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Session } from "next-auth";
import { ToastMessageContainer } from "@/components/Global/Toast";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { StateProvider } from "@/context/StateContext";
import { LaunchingSoon } from "@/components/Global/CommingSoon";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className={montserrat.className}>
      <body className="overflow-x-hidden">
        {/* and also check the domain name */}
        {process.env.SITE_STATUS === "live" ? (
          <Provider session={session}>
            <StateProvider>
              <Navbar />
              {children}
              <Footer />
            </StateProvider>
          </Provider>
        ) : (
          <LaunchingSoon />
        )}
        <ToastMessageContainer />
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";
