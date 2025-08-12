import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./serviceBlock.module.scss";
import { Typography } from "@typography/typography";

export default function ServiceBlock() {
  return (
    <section className={classes.serviceBlock}>
      <MultiContainer>
        <div className={classes.serviceBlockContent}>
          <Typography variant="h3" weight="semibold">
            We service almost all appliance brands
          </Typography>
          <Typography variant="p" weight="regular">
            —from well-known to less common ones. Our technicians have
            experience with different models and know how to handle each
            appliance regardless of the manufacturer. We use only original or
            approved parts to ensure your appliances last longer.
          </Typography>
        </div>
      </MultiContainer>
    </section>
  );
}
