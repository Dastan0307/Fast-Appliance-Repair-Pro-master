import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./brandTechnic.module.scss";
import { Typography } from "@typography/typography";
import TechnicCard from "src/ui/technicCard/technicCard";
interface Product {
  image: string;
  name: string;
  slug: string;
  technicName: string;
}
const BrandTechnic = ({
  brandName,
  products,
}: {
  brandName: string;
  products: Product[];
}) => {
  return (
    <section className={classes.brandTechnic}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Technic of {brandName}
        </Typography>
        <div className={classes.brandTechnicItems}>
          {products &&
            products.map((item: Product, index) => (
              <TechnicCard
                key={index}
                image={item.image}
                title={item.name}
                href={item.slug}
                technicName={brandName}
              />
            ))}
        </div>
      </MultiContainer>
    </section>
  );
};

export default BrandTechnic;
