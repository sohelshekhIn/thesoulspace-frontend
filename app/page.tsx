import AboutSection from "@/components/HomePage/AboutSection";
import BestSeller from "@/components/HomePage/BestSeller";
import HeroBanner from "@/components/HomePage/HeroBanner";
import PopularCategories from "@/components/HomePage/PopularCategories";
import RequestArtBanner from "@/components/HomePage/RequestArtBanner";
import TestimonialSection from "@/components/HomePage/TestimonialSection";
import { getStaticData } from "@/utils/global";

const Home = async () => {
  // set cache for 1 hour
  const data = await getStaticData("/homepage?populate=deep,3", 3600);

  return (
    <div>
      <HeroBanner bannerData={data.attributes.HeroBanner} />
      <BestSeller bestSellerData={data.attributes.BestSellers} />
      <PopularCategories categoriesData={data.attributes.PopularCategories} />
      <RequestArtBanner />
      <AboutSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
