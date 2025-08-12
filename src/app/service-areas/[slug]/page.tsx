import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import Form from "@modules/sendForm/form";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMapData } from "@modules/map/model/mapModel";
import HelpBlock from "@modules/homePageModules/helpBlock/helpBlock";
import metaData from "public/meta-data.json";
import ServiceLocations from "@modules/mapService/mapService";

type AreasProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: AreasProps): Promise<Metadata> {
  const { slug } = await params;
  const typedSlug = slug as "toronto" | "ottawa";
  const exactMeta = metaData.serviceAreas[typedSlug] ?? `Brand ${slug}`;

  return {
    title: slug ? exactMeta.title : "Brand not found",
    description: slug ? exactMeta.description : "Brand not found",
  };
}

export default async function ServicePage({ params }: AreasProps) {
  const { slug } = await params;
  const response = await getMapData();
  if (!response) return notFound();
  return (
    <main>
      <Breadcrumbs />
      <ServiceLocations slug={slug} />
      <HelpBlock />
      <QuestionsItems />
      <Form />
    </main>
  );
}
