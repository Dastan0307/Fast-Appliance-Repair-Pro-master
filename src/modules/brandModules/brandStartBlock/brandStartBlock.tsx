import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./brandStartBlock.module.scss";
import { Typography } from "@typography/typography";
const BrandStartBlock = ({
  brandName,
  brandDescription,
}: {
  brandName: string;
  brandDescription: string;
}) => {
  return (
    <section className={classes.ourWorksStartBlock}>
      <MultiContainer className={classes.container}>
        <div>
          <Typography variant="h1" weight="semibold">
            {brandName}
          </Typography>
          <Typography
            variant="p"
            weight="regular"
            className={classes.textBlock}
          >
            {brandDescription}
          </Typography>
        </div>
      </MultiContainer>
    </section>
  );
};

export default BrandStartBlock;
