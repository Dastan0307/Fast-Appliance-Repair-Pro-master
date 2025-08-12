import { Typography } from "@typography/typography";
import classes from "./brandDetailTechnic.module.scss";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import parse from "html-react-parser";
const BrandDetailTechnic = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <section className={classes.brandDetailTechnic}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          {name}
        </Typography>
        <div className={classes.articleText}>{parse(description)}</div>
      </MultiContainer>
    </section>
  );
};

export default BrandDetailTechnic;
