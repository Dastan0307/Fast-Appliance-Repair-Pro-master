import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./otherArticles.module.scss";
import { Article } from "../types/types";
import BlogCard from "src/ui/blogCard/blogCard";
import { getOtherArticles } from "../model/articlesModel";
import { Typography } from "@typography/typography";

const getRandomItems = <T,>(arr: T[], count: number): T[] => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const OtherArticles = async () => {
  const res = await getOtherArticles();
  const { results } = res;

  if (!results || results.length === 0) return null;

  const randomArticles = getRandomItems<Article>(results, 3);

  return (
    <section className={classes.otherArticles}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Other Articles
        </Typography>
        <div className={classes.cards}>
          {randomArticles.map((item: Article) => (
            <BlogCard
              key={item.id}
              title={item.title}
              description={item.text_for_cover}
              image={item.images[0]?.image}
              href={item.slug}
            />
          ))}
        </div>
      </MultiContainer>
    </section>
  );
};

export default OtherArticles;
