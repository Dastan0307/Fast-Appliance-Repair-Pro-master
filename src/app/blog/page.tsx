import ArticlesModule from "@modules/articlesModule/view/articlesModule";
import AboutBlock from "@modules/aboutBlock/view/aboutBlock";
import StartBlock from "@modules/homePageModules/startBlock/startBlock";
import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import Form from "@modules/sendForm/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Appliance Care Tips & Troubleshooting Canada‑Wide",
  description: "Get expert maintenance tips, DIY troubleshooting guides, warranty news, and seasonal appliance advice from Fast Appliance Repair Pro.",
};

export default function BlogPage() {
  return (
    <main>
      <StartBlock />
      <ArticlesModule />
      <AboutBlock />
      <QuestionsItems />
      <Form />
    </main>
  );
}
