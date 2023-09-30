import Provider from "@/components/Global/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Session } from "next-auth";
import { ToastMessageContainer } from "@/components/Global/Toast";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { StateProvider } from "@/context/StateContext";
import { LaunchingSoon } from "@/components/Global/CommingSoon";
import Head from "next/head";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Soul Space | Home",
  description: "Find your aesthetic enjoyment through art",
  keywords: [
    "art",
    "painting",
    "art gallery",
    "nadiad",
    "gujarat",
    "india",
    "canvas painting for table decor",
    "aesthetic art",
    "aesthetic table painting",
    "aesthetic wall painting",
    "nature wall painting and decor",
    "nature wall painting",
    "nature wall decor",
    "sketch wall painting",
    "trusted art store",
    "cutom art",
    "custom painting",
    "custom art work online",
    "cutom phone case",
    "custom phone case online",
    "custom phone case india",
    "online art store",
    "online art store india",
    "art decor online",
    "handmade art",
    "handmade phone case",
    "handmade phone covers",
    "handmade phone covers india",
    "contemporary art",
    "affordable art",
    "affordable art online",
    "unique art",
    "unique art online",
    "unique art gifts",
    "art in nadiad",
    "art in gujarat",
    "art in india",
    "vadodara",
    "baroda",
    "jamnagar",
    "The Soul Space",
    "The Soul Space nadiad",
    "The Soul Space gujarat",
    "The Soul Space india",
    "The Soul Space art",
    "The Chocolate Room",
    "The Chocolate Room nadiad",
    "Tomatoes The Diner",
    "Tomatoes The Diner nadiad",
    "Shere Radheshyam Hospitality",
    "Shere Radheshyam Hospitality nadiad",
    "Shree Radheshya Ventures",
  ],
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en" className={montserrat.className + " scroll-smooth"}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,
          user-scalable=no"
        />
      </Head>
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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-C671RSM83P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C671RSM83P');`}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "j3doy1qlj8");`}
      </Script>
    </html>
  );
}
