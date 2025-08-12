import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./warrantyData.module.scss";
import { Typography } from "@typography/typography";
import { getWarranties } from "../model/warrantyModel";
import parse from "html-react-parser";

export default async function WarrantyData() {
  let res;

  try {
    res = await getWarranties();
  } catch (error) {
    console.error("Failed to fetch warranty data:", error);
    return null;
  }

  if (!res?.[0]?.full_text) return null;

  return (
    <section className={classes.warrantyData}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Warranty and Privacy Policy
        </Typography>
        <div className={classes.text}>{parse(res[0].full_text)}</div>
      </MultiContainer>
    </section>
  );
}
