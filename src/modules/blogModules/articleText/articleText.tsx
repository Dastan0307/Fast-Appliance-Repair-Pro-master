import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import parse from "html-react-parser";
import classes from "./articleText.module.scss";

export default function ArticleText({ content }: { content: string }) {
  return (
    <section className={classes.articleText}>
      <MultiContainer>
        <div>{parse(content)}</div>
      </MultiContainer>
    </section>
  );
}
