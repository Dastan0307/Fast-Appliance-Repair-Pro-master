import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";
import BrandStartBlock from "@modules/brandModules/brandStartBlock/brandStartBlock";
import Form from "@modules/sendForm/form";
import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import AdvantagesBlock from "@modules/homePageModules/advantagesBlock/advantagesBlock";
import BrandBlock from "@modules/brandBlock/brandBlock";
import BrandTechnic from "@modules/brandModules/brandTechnic/view/brandTechnic";
import { getBrandData } from "@modules/brandModules/model/brandModel";
import metaData from "public/meta-data.json";

type BrandPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const typedSlug = slug as 'samsung' | 'lg'
  const exactMeta = metaData.brands[typedSlug] ?? `Brand ${slug}`;
  
  return {
    title: slug ? exactMeta.title : "Brand not found",
    description: slug ? exactMeta.description : "Brand not found",
  };
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const response = await getBrandData(slug);

  if (!slug) return notFound();
  return (
    <main>
      <Breadcrumbs />
      <BrandStartBlock
        brandName={slug}
        brandDescription={response.translated_description}
      />
      <AdvantagesBlock />
      {response.products && response.products.length > 0 && (
        <BrandTechnic brandName={slug} products={response.products} />
      )}
      <BrandBlock />
      <QuestionsItems />
      <Form />
    </main>
  );
}
