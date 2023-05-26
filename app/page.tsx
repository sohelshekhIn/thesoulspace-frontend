import AboutSection from "@/components/HomePage/AboutSection";
import BestSeller from "@/components/HomePage/BestSeller";
import HeroBanner from "@/components/HomePage/HeroBanner";
import PopularCategories from "@/components/HomePage/PopularCategories";
import RequestArtBanner from "@/components/HomePage/RequestArtBanner";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BestSeller />
      <PopularCategories />
      <RequestArtBanner />
      <AboutSection />
      <h1>Stats</h1>
    </div>
  );
}
