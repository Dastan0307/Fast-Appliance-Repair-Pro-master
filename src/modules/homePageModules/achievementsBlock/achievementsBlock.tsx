import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./achievementsBlock.module.scss";
import { Typography } from "@typography/typography";

const AchievementsBlock = () => {
  return (
    <section className={classes.achievementsBlock}>
      <MultiContainer>
        <div className={classes.achievementsBlockItems}>
          <div className={classes.achievementsBlockItem}>
            <Typography variant="h2" weight="normal">
              10+ brands
            </Typography>
            <Typography variant="p" weight="regular">
              We work with
            </Typography>
          </div>
          <div className={classes.achievementsBlockItem}>
            <Typography variant="h2" weight="normal">
              1 month
            </Typography>
            <Typography variant="p" weight="regular">
              Warranties for details
            </Typography>
          </div>
          <div className={classes.achievementsBlockItem}>
            <Typography variant="h2" weight="normal">
              5+
            </Typography>
            <Typography variant="p" weight="regular">
              Provided services
            </Typography>
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};

export default AchievementsBlock;
