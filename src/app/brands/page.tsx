import AboutUsStartBlock from "@modules/aboutUsModule/aboutUsStartBlock/aboutUsStartBlock";
import BrandsBlock from "@modules/brandsBlock/brandsBlock";
import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import Form from "@modules/sendForm/form";
import ServiceBlock from "@modules/serviceBlock/serviceBlock";
import { Metadata } from "next";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title: "Brands We Service | Samsung, LG, Bosch & More — Canada",
  description: "Fast Appliance Repair Pro services all major brands—Samsung, LG, Bosch, Whirlpool, GE, Miele—nationwide with OEM parts and certified techs.",
};

export default function Brands() {
  return (
    <main>
      <Breadcrumbs />
      <AboutUsStartBlock isBrand={true} />
      <ServiceBlock />
      <BrandsBlock />
      <QuestionsItems />
      <Form />
    </main>
  );
}
