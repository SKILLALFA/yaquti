import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import AnnouncementBar from "@/components/pricing/AnnouncementBar";
import Breadcrumb from "@/components/pricing/Breadcrumb";
import Community from "@/components/pricing/Community";
import CompleteRoutine from "@/components/pricing/CompleteRoutine";
import Evidence from "@/components/pricing/Evidence";
import ExpectedOutcomes from "@/components/pricing/ExpectedOutcomes";
import ForWhom from "@/components/pricing/ForWhom";
import Formula from "@/components/pricing/Formula";
import FromTheJournal from "@/components/pricing/FromTheJournal";
import Guarantee from "@/components/pricing/Guarantee";
import HowToTake from "@/components/pricing/HowToTake";
import Origin from "@/components/pricing/Origin";
import ProductFooter from "@/components/pricing/ProductFooter";
import ProductHero from "@/components/pricing/ProductHero";
import Questions from "@/components/pricing/Questions";
import Reviews from "@/components/pricing/Reviews";
import Standards from "@/components/pricing/Standards";
import StickyBuyBar from "@/components/pricing/StickyBuyBar";
import TrustStrip from "@/components/pricing/TrustStrip";
import Verification from "@/components/pricing/Verification";
import WhoMakesThis from "@/components/pricing/WhoMakesThis";
import WhyThisExists from "@/components/pricing/WhyThisExists";
import { PRODUCT } from "@/components/pricing/product";

export const metadata: Metadata = {
  title: "Product name — YAQUTI",
  description: PRODUCT.summary,
};

export default function PricingPage() {
  return (
    <>
      <StickyBuyBar />
      <AnnouncementBar />
      <Nav />
      <main id="main-content" className="flex-1">
        <Breadcrumb
          trail={[
            { label: "Home", href: "/" },
            { label: "Collections", href: "/action#featured" },
            { label: PRODUCT.name },
          ]}
        />
        <ProductHero />
        <TrustStrip />
        <WhyThisExists />
        <ForWhom />
        <ExpectedOutcomes />
        <Origin />
        <Formula />
        <Evidence />
        <Verification />
        <HowToTake />
        <Reviews />
        <Community />
        <Standards />
        <WhoMakesThis />
        <Questions />
        <Guarantee />
        <CompleteRoutine />
        <FromTheJournal />
      </main>
      <ProductFooter />
    </>
  );
}
