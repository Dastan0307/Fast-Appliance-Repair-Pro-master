"use client";

import { getData, getHeaderBrands } from "../model/aboutBlockModel";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import { Typography } from "@typography/typography";
import Image from "next/image";
import Link from "next/link";
import classes from "./aboutBlock.module.scss";
import AboutBlockIcon from "@assets/images/AboutBlockImage.png";
import { BrandHeader } from "../types/types";
import { useEffect, useState } from "react";
import useMediaQuery from "@utils/hooks/useMediaQuery";

interface AboutBlockProps {
  translated_mission: string;
  translated_experience: string;
}

const AboutBlock = () => {
  const [results, setResults] = useState<AboutBlockProps>({
    translated_mission: "",
    translated_experience: "",
  });
  const [headersBrandData, setHeadersBrandData] = useState<BrandHeader[]>([]);
  const isMobile = useMediaQuery("(max-width: 430px)");

  const getAbout = async () => {
    try {
      const response = await getData();
      const headersBrandData = await getHeaderBrands();
      setResults(response[0] || {});
      setHeadersBrandData(headersBrandData);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);

  if (!results.translated_experience || !results.translated_mission) return;
  const { translated_mission, translated_experience } = results;

  return (
    <section className={classes.aboutBlock}>
      <MultiContainer>
        {isMobile ? (
          <div className={classes.aboutBlock}>
            <Typography variant="h1" weight="bold">
              About Fast Appliance Repair Pro
            </Typography>
            <div className={classes.aboutBlockTextContent}>
              {results && (
                <>
                  <Typography variant="p">{translated_mission}</Typography>
                  <Typography variant="p">{translated_experience}</Typography>
                </>
              )}
            </div>
            <Typography variant="h3">Brand we work with:</Typography>
            <div className={classes.aboutBlockMarkies}>
              <div>
                <Image src={AboutBlockIcon} alt="AboutBlockIcon" width={200} />
              </div>
              <div className={classes.aboutBlockMarkiesList}>
                {headersBrandData &&
                  headersBrandData
                    ?.slice(0, 12)
                    .map((item: BrandHeader, index: number) => (
                      <Link key={index} href={`/brands/${item.slug}`}>
                        <Typography variant="h5" weight="regular">
                          {item.name}
                        </Typography>
                      </Link>
                    ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <Typography variant="h1" weight="bold">
              About of Fast Appliance Repair Pro
            </Typography>

            <div className={classes.aboutBlockContent}>
              <div className={classes.aboutBlockImage}>
                <Image
                  src={AboutBlockIcon}
                  alt="О компании Fast Appliance Repair Pro"
                  width={487}
                  height={731}
                />
              </div>
              <div className={classes.aboutBlockText}>
                <div className={classes.aboutBlockTextContent}>
                  {results && (
                    <>
                      <Typography variant="p">{translated_mission}</Typography>
                      <Typography variant="p">
                        {translated_experience}
                      </Typography>
                    </>
                  )}
                </div>

                <div className={classes.aboutBlockMarkies}>
                  <Typography variant="h3">Brand we work with:</Typography>
                  <div className={classes.aboutBlockMarkiesList}>
                    {headersBrandData &&
                      headersBrandData
                        ?.slice(0, 12)
                        .map((item: BrandHeader, index: number) => (
                          <Link key={index} href={`/brands/${item.slug}`}>
                            <Typography variant="h5" weight="regular">
                              {item.name}
                            </Typography>
                          </Link>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </MultiContainer>
    </section>
  );
};

export default AboutBlock;
