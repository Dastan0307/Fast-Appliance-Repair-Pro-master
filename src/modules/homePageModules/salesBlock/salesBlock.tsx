"use client";

import { Typography } from "@typography/typography";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import { Carousel } from "src/ui/rotatingCarusel/carusel/carousel";
import SalesCard from "src/ui/salesCard/salesCard";
import classes from "./salesBlock.module.scss";
import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";
import { useEffect, useState } from "react";

interface Sales {
  title: string;
  description: string;
  date: string;
}

const SalesBlock = () => {
  const [saleData, setSaleData] = useState<Sales[]>([]);
  const getPromotions = async () => {
    try {
      const response = await requester(generateBaseUrl("promotions"));
      if (response) {
        setSaleData(response);
      } else {
        setSaleData([]);
      }
    } catch (error) {
      console.error("Error fetching promotions:", error);
    }
  };

  useEffect(() => {
    getPromotions();
  }, []);

  if (saleData.length === 0 || !saleData) return;

  return (
    <section className={classes.salesBlock}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Promotions and special offers
        </Typography>
      </MultiContainer>
      <div>
        <Carousel
          items={saleData}
          direction="left"
          speed={200}
          renderItem={(item) => (
            <SalesCard
              title={item.title}
              description={item.description}
              date={item.date}
            />
          )}
        />
      </div>
    </section>
  );
};

export default SalesBlock;
