import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import Science from "@/components/sections/Science";
import WhyYaquti from "@/components/sections/WhyYaquti";
import Lifestyle from "@/components/sections/Lifestyle";
import Testimonials from "@/components/sections/Testimonials";
import Journal from "@/components/sections/Journal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustBadges />
        <FeaturedCategories />
        <Science />
        <WhyYaquti />
        <Lifestyle />
        <Testimonials />
        <Journal />
      </main>
      <Footer />
    </>
  );
}
