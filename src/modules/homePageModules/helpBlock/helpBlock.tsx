import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./helpBlock.module.scss";
import HelpBlockCard from "src/ui/helpBlockCard/helpBlockCard";
import { Typography } from "@typography/typography";
import { getHelpBlock } from "./model/helpBlockModel";
import emptyStateImage from "@assets/images/emptyStateImage.png";

interface IHelpBlock {
  name: string | null;
  cart_description: string | null;
  slug: string | null;
  icon: string | null;
  href?: string;
}

const HelpBlock = async () => {
  const response = await getHelpBlock();

  const installations = response?.installations || [];
  const repairs = response?.repairs || [];

  const transformedInstallations = installations
    .filter((item: IHelpBlock) => item.slug && typeof item.slug === "string" && item.slug.trim() !== "")
    .map((item: IHelpBlock) => ({
      ...item,
      href: `/installation/${item.slug}`, 
    }));

  const transformedRepairs = repairs
    .filter((item: IHelpBlock) => item.slug && typeof item.slug === "string" && item.slug.trim() !== "")
    .map((item: IHelpBlock) => ({
      ...item,
      href: `/repair/${item.slug}`,
    }));

  const allServices = [...transformedInstallations, ...transformedRepairs];
if (allServices.length === 0) return null
  return (
    <section className={classes.helpBlock}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          What can we <Typography variant="span">help with?</Typography>
        </Typography>
        <div className={classes.helpBlockCardsItems}>
          {allServices.map((item, index) => (
            <HelpBlockCard
              key={index}
              title={item.name || "Unnamed Service"}
              description={item.cart_description || "No description available"}
              image={item.icon || emptyStateImage}
              href={item.href || "/"}
            />
          ))}
        </div>
      </MultiContainer>
    </section>
  );
};

export default HelpBlock;