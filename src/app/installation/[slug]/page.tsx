import BrandBlock from "@modules/brandBlock/brandBlock";
import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import RepairStartBlock from "@modules/repairPageModule/repairStartBlock/repairStartBlock";
import Form from "@modules/sendForm/form";
import RepairHelpBlock from "../../../modules/repairPageModule/repairHelpBlock/repairHelpBlock";
import MapBlock from "@modules/map/map";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";
import { Metadata } from "next";
import { getInstallations } from "@modules/repairPageModule/model/repairModel";
import { notFound } from "next/navigation";
import HelpBlock from "@modules/homePageModules/helpBlock/helpBlock";
import metaData from "public/meta-data.json";

type InstallationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: InstallationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const typedSlug = slug as 'refrigerator' | 'washing-machine'
    const exactMeta = metaData.applianceInstall[typedSlug] ?? `Installation ${slug}`;
    
    return {
      title: slug ? exactMeta.title : "Installation not found",
      description: slug ? exactMeta.description : "Installation not found",
    };
}

export default async function InstallationPage({
  params,
}: InstallationPageProps) {
  const { slug } = await params;
  const results = await getInstallations(slug);

  if (!results) return notFound();
  return (
    <main>
      <Breadcrumbs />
      <RepairStartBlock
        name={results.name}
        short_description={results.short_description}
      />
      <BrandBlock />
      <RepairHelpBlock full_description={results.full_description} />
      <MapBlock />
      <HelpBlock/>
      <QuestionsItems />
      <Form />
    </main>
  );
}
