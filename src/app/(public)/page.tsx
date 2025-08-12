import AboutBlock from "@modules/aboutBlock/view/aboutBlock";
import AchievementsBlock from "@modules/homePageModules/achievementsBlock/achievementsBlock";
import AdvantagesBlock from "@modules/homePageModules/advantagesBlock/advantagesBlock";
import BrandBlock from "@modules/brandBlock/brandBlock";
import HelpBlock from "@modules/homePageModules/helpBlock/helpBlock";
import SalesBlock from "@modules/homePageModules/salesBlock/salesBlock";
import StartBlock from "@modules/homePageModules/startBlock/startBlock";
import MapBlock from "@modules/map/map";
import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import Form from "@modules/sendForm/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Fast Appliance Repair Pro | Canada‑Wide Appliance Repair & Installation",
  description:
    "Fast Appliance Repair Pro provides fast, reliable appliance repair and installation across Canada. Appliance repair in North York, ON. Appliance repair near me. Licensed, certified techs, transparent pricing, and 90‑day warranty.",
};

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <StartBlock />
      <HelpBlock />
      <AboutBlock />
      <MapBlock />
      <AchievementsBlock />
      <AdvantagesBlock />
      <BrandBlock />
      <SalesBlock />
      <QuestionsItems />
      <Form />
    </main>
  );
}
