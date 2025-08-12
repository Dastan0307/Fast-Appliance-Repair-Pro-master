import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./warrantyStartBlock.module.scss";
import { Typography } from "@typography/typography";

const WarrantyStartBlock = () => {
  return (
    <section className={classes.warrantyStartBlock}>
      <MultiContainer className={classes.container}>
        <div className={classes.content}>
          <Typography variant="h1" weight="semibold">
            Warranty and Privacy Policy
          </Typography>
          <Typography
            variant="p"
            weight="regular"
            className={classes.textBlock}
          >
            Warranty and privacy At Fast Appliance Repair Pro, we value our
            customers’ trust and strive to deliver a high level of service. We
            provide official warranties for all completed work and take the
            protection of your personal data seriously. Below, you’ll find the
            full details of our warranty and privacy policy.
          </Typography>
        </div>
        <div></div>
      </MultiContainer>
    </section>
  );
};

export default WarrantyStartBlock;
