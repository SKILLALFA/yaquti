import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import AnnouncementBar from "@/components/pricing/AnnouncementBar";
import Guarantee from "@/components/pricing/Guarantee";
import ProductFooter from "@/components/pricing/ProductFooter";
import BatchBoard from "@/components/category/BatchBoard";
import CatalogBrowser from "@/components/category/CatalogBrowser";
import CategoryHero from "@/components/category/CategoryHero";
import Glossary from "@/components/category/Glossary";
import NotStocked from "@/components/category/NotStocked";
import OnsetChart from "@/components/category/OnsetChart";
import StackBuilder from "@/components/category/StackBuilder";
import { CATEGORY } from "@/components/category/category-data";

export const metadata: Metadata = {
  title: `${CATEGORY.name} — YAQUTI`,
  description: `Four standardised ${CATEGORY.latin} formulations, compared by dose, extract and cost per 100 mg of active.`,
};

export default function CategoriesPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main id="main-content" className="flex-1">
        <CategoryHero />
        <CatalogBrowser />
        <OnsetChart />
        <StackBuilder />
        <NotStocked />
        <BatchBoard />
        <Glossary />
        <Guarantee />
      </main>
      <ProductFooter />
    </>
  );
}
