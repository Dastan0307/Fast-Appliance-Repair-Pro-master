import BrandBlock from "@modules/brandBlock/brandBlock";
import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import RepairStartBlock from "@modules/repairPageModule/repairStartBlock/repairStartBlock";
import Form from "@modules/sendForm/form";
import RepairHelpBlock from "../../../modules/repairPageModule/repairHelpBlock/repairHelpBlock";
import MapBlock from "@modules/map/map";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";
import { Metadata } from "next";
import { getRepair } from "@modules/repairPageModule/model/repairModel";
import { notFound } from "next/navigation";
import HelpBlock from "@modules/homePageModules/helpBlock/helpBlock";
import metaData from "public/meta-data.json";

type RepairPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: RepairPageProps): Promise<Metadata> {
  const { slug } = await params;
  const typedSlug = slug as 'refrigerator' | 'washing-machine'
  const exactMeta = metaData.applianceRepair[typedSlug] ?? `Repair ${slug}`;
  
  return {
    title: slug ? exactMeta.title : "Repair not found",
    description: slug ? exactMeta.description : "Repair not found",
  };
}

export default async function RepairPage({ params }: RepairPageProps) {
  const { slug } = await params;
  const response = await getRepair(slug);

  if (!response) return notFound();
  return (
    <main>
      <Breadcrumbs />
      <RepairStartBlock
        name={response.name}
        short_description={response.short_description}
      />
      <BrandBlock />
      <RepairHelpBlock full_description={response.full_description} />
      <MapBlock />
      <HelpBlock/>
      <QuestionsItems />
      <Form />
    </main>
  );
}
