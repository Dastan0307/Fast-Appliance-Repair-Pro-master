import AboutBlock from "@modules/aboutBlock/view/aboutBlock";
import AboutUsStartBlock from "@modules/aboutUsModule/aboutUsStartBlock/aboutUsStartBlock";
import PrivilegeBlock from "@modules/aboutUsModule/privilegeBlock/privilegeBlock";
import BrandBlock from "@modules/brandBlock/brandBlock";
import MapBlock from "@modules/map/map";
import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import Form from "@modules/sendForm/form";
import { Metadata } from "next";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us | Licensed Appliance Experts Across Canada",
  description: "Fast Appliance Repair Pro delivers expert, factory‑trained service nationwide. Learn about our certified technicians, honest pricing, and customer‑first guarantee.",
};
export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs />
      <AboutUsStartBlock />
      <PrivilegeBlock />
      <AboutBlock />
      <MapBlock />
      <BrandBlock />
      <QuestionsItems />
      <Form />
    </main>
  );
}
