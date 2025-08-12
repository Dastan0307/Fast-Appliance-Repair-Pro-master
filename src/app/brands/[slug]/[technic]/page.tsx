import { Metadata } from "next";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";
import { notFound } from "next/navigation";
import BrandDetailTechnic from "@modules/brandModules/brandDetailTechnic/view/brandDetailTechnic";
import { getTechnicDetail } from "@modules/brandModules/brandDetailTechnic/model/technicDetail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; technic: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Technic ${resolvedParams.slug} — ${resolvedParams.technic}`,
  };
}

export default async function BrandDetailTechnicPage({
  params,
}: {
  params: Promise<{ slug: string; technic: string }>;
}) {
  const resolvedParams = await params;
  const response = await getTechnicDetail(resolvedParams.technic);
  if (!resolvedParams.slug || !resolvedParams.technic) {
    return notFound();
  }

  return (
    <main>
      <Breadcrumbs />
      <BrandDetailTechnic
        name={response.name}
        description={response.description}
      />
    </main>
  );
}
