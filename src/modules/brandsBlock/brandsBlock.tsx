import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./brandsBlock.module.scss";
import BrandCard from "src/ui/brandCard/brandCard";
import { getHeaderBrands } from "@modules/aboutBlock/model/aboutBlockModel";

interface Brand {
  logo: string;
  slug: string;
}

export default async function BrandsBlock() {
  const results = await getHeaderBrands();

  if (!results) {
    return null;
  }

  return (
    <section className={classes.brandsBlock}>
      <MultiContainer>
        <div className={classes.brandsBlockItems}>
          {results &&
            results.map((item: Brand, index: number) => (
              <BrandCard
                logo={item.logo}
                href={`${item.slug}`}
                isBrandPage={true}
                key={index}
              />
            ))}
        </div>
      </MultiContainer>
    </section>
  );
}
