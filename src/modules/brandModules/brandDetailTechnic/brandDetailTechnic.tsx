import { Typography } from "@typography/typography";
import classes from "./brandDetailTechnic.module.scss";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
const BrandDetailTechnic = () => {
  return (
    <section className={classes.brandDetailTechnic}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Техника
        </Typography>
        <div></div>
      </MultiContainer>
    </section>
  );
};

export default BrandDetailTechnic;
