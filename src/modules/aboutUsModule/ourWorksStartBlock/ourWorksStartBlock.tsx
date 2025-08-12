import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./ourWorksStartBlock.module.scss";
import { Typography } from "@typography/typography";

const OurWorksStartBlock = () => {
  return (
    <section className={classes.ourWorksStartBlock}>
      <MultiContainer className={classes.container}>
        <Typography variant="p" weight="regular" className={classes.textBlock}>
          We are proud of the quality of our work and the trust of our
          customers. Here, you can see real examples of how we solve various
          household appliance malfunctions quickly, accurately, and with a
          guarantee. Each case is unique, but the result is always the same: the
          appliance is working again, and the customer is satisfied.
        </Typography>
      </MultiContainer>
    </section>
  );
};

export default OurWorksStartBlock;
