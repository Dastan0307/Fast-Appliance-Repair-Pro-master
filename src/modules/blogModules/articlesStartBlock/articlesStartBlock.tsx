import { Typography } from "@typography/typography";
import Image from "next/image";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import RepairStartBlockImage from "@assets/images/RepairBlockcopy.png";
import classes from "./articlesStartBlock.module.scss";

export default function ArticlesStartBlock({
  startTitle,
  startDescription,
}: {
  startTitle: string;
  startDescription: string;
}) {
  return (
    <section className={classes.articlesStartBlock}>
      <MultiContainer>
        <Typography variant="h1" weight="semibold">
          {startTitle}
        </Typography>
        <div className={classes.articlesStartBlockContent}>
          <Typography variant="p" weight="regular">
            {startDescription}
          </Typography>
          <div className={classes.articlesStartBlockImage}>
            <Image src={RepairStartBlockImage} alt="alt" width={480} />
          </div>
        </div>
      </MultiContainer>
    </section>
  );
}
