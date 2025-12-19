import Banner from "./Components/HomePageComponents/Banner";
import CtaStrip from "./Components/HomePageComponents/CtaStrip";
import FeatureGrid from "./Components/HomePageComponents/FeatureGrid";
import FeaturedProducts from "./Components/HomePageComponents/FeaturedProducts";
import HeroSection from "./Components/HomePageComponents/HeroSection";
import PricingSection from "./Components/HomePageComponents/PricingSection";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <Banner />
      <FeatureGrid />
      <FeaturedProducts />
      <PricingSection />
      <CtaStrip />
    </main>
  );
}
