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
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Soul Space | Home",
  description:
    "Custom Artwork eCommerce Store | The Soul Space - Nadiad / Vadodara Gujarat",
  openGraph: {
    title: "The Soul Space | Home",
    description:
      "Custom Artwork eCommerce Store | The Soul Space - Nadiad / Vadodara Gujarat",
    type: "website",
    locale: "en_IN",
    url: "https://thesoulspace.in",
    images: [
      {
        url: "https://thesoulspace.in/og-image.jpg",
        width: 800,
        height: 600,
        alt: "The Soul Space",
      },
    ],
  },
  twitter: {
    site: "https://thesoulspace.in",
    card: "summary_large_image",
    title: "The Soul Space | Home",
    description:
      "Custom Artwork eCommerce Store | The Soul Space - Nadiad / Vadodara Gujarat",
    images: "https://thesoulspace.in/og-image.jpg",
  },
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
