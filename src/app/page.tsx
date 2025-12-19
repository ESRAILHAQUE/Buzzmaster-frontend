
import FeatureGrid from "./Components/HomePageComponents/FeatureGrid";
import FeaturedProducts from "./Components/HomePageComponents/FeaturedProducts";
import HeroSection from "./Components/HomePageComponents/HeroSection";


export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />

      <FeatureGrid />
      <FeaturedProducts />
    </main>
  );
}
