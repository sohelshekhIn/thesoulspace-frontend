import BestSeller from "@/components/HomePage/BestSeller";
import HeroBanner from "@/components/HomePage/HeroBanner";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BestSeller />
      <h1>Offer Banner</h1>
      <h1>About</h1>
      <h1>Stats</h1>
    </div>
  );
}
