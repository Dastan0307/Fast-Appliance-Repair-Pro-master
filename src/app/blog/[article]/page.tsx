import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import {
  getArticleData,
  getArticlesData,
} from "@modules/articlesModule/model/articlesModel";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";
import ArticlesStartBlock from "@modules/blogModules/articlesStartBlock/articlesStartBlock";
import { notFound } from "next/navigation";
import ArticlesImages from "@modules/blogModules/articlesImages/articlesImages";
import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import Form from "@modules/sendForm/form";
import ArticlesInstruction from "@modules/blogModules/articlesInstruction/articlesInstruction";
import ArticleText from "@modules/blogModules/articleText/articleText";
import OtherArticles from "@modules/articlesModule/otherArticles/otherArticles";

interface ArticleDetailPageProps {
  params: Promise<{ article: string }>;
}

export async function generateStaticParams(): Promise<{ article: string }[]> {
  try {
    const data = await getArticlesData();
    if (!data || !data.results) {
      console.error("getArticlesData returned invalid data:", data);
      return [];
    }
    return data.results.map((article: { slug: string }) => ({
      article: article.slug,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { article } = await params;
  const response = await getArticleData(article);
  console.log(response);
  if (!response) return notFound();
  return (
    <main>
      <MultiContainer>
        <Breadcrumbs />
        <ArticlesStartBlock
          startDescription={response.short_description}
          startTitle={response.title}
        />
        <ArticlesImages images={response.images} />
        <ArticlesInstruction url={response.video_on_youtube} />
        <ArticleText content={response.content} />
        <OtherArticles />
        <QuestionsItems />
        <Form />
      </MultiContainer>
    </main>
  );
}
