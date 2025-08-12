import { Typography } from "@typography/typography";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import { YouTubePlayer } from "src/ui/youTubePlayer/youTubePlayer";
import classes from "./articlesInstruction.module.scss";

export default function ArticlesInstruction({ url }: { url: string }) {
  return (
    <section className={classes.articlesInstruction}>
      <MultiContainer>
        <Typography variant="h1" weight="semibold">
          Detailed video
        </Typography>
        <YouTubePlayer url={url} className={classes.video}/>
      </MultiContainer>
    </section>
  );
}
