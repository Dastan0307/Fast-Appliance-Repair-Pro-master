"use client";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./startBlock.module.scss";
import { Typography } from "@typography/typography";
import Image from "next/image";
import StartBlockImage from "@assets/images/StartBlockImageModule.png";
import ArrowIcon from "@assets/icons/arrowIcon.svg";
import { Modal } from "src/ui/modal/modal";
import Form from "@modules/sendForm/form";
import { useState } from "react";
import useMediaQuery from "@utils/hooks/useMediaQuery";

const StartBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 430px)");
  return (
    <section className={classes.startBlock}>
      <MultiContainer>
        {isMobile ? (
          <div>
            <div className={classes.startBlockContentTopRight}>
              <Typography variant="h1" weight="bold">
                FAST APPLIANCE REPAIR PRO
              </Typography>
              <Typography variant="h2" weight="regular">
                We help homeowners with appliance repairs in Toronto.
              </Typography>
              <div className={classes.startBlockImageMobile}>
                <Image src={StartBlockImage} alt="start block image" />
              </div>
              <div className={classes.startBlockAboutText}>
                <Typography variant="h3" weight="normal">
                  We work all around GTA and fixed more than 131,927 appliances
                </Typography>
                <a
                  href="#form"
                  className={classes.button}
                  onClick={() => setIsOpen(true)}
                >
                  <Typography variant="h4" weight="bold">
                    Book online
                  </Typography>
                  <div className={classes.buttonIcon}>
                    <Image src={ArrowIcon} alt="arrow icon" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.startBlockContent}>
            <div className={classes.startBlockContentTop}>
              <div className={classes.startBlockContentTopLeft}>
                <div className={classes.startBlockContentTopLeftNumber}>
                  <Typography variant="p" weight="regular">
                    Number of services
                  </Typography>
                  <Typography variant="h1" weight="bold">
                    5+
                  </Typography>
                </div>
                <Typography variant="h3" weight="regular">
                  We work all around GTA and fixed more than 131,927 appliances
                </Typography>
              </div>
              <div className={classes.startBlockContentTopRight}>
                <Typography variant="h1" weight="bold">
                  FAST APPLIANCE REPAIR PRO
                </Typography>
              </div>
            </div>
            <div className={classes.startBlockContentBottom}>
              <Typography variant="h2" weight="regular">
                We help homeowners with appliance repairs in Toronto.
              </Typography>
              <div className={classes.button} onClick={() => setIsOpen(true)}>
                <Typography variant="h3" weight="bold">
                  Book online
                </Typography>
                <div className={classes.buttonIcon}>
                  <Image src={ArrowIcon} alt="arrow icon" />
                </div>
              </div>
              {isOpen && (
                <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                  <Form isModal={true} />
                </Modal>
              )}
              <div className={classes.startBlockImage}>
                <Image
                  src={StartBlockImage}
                  alt="Start Block"
                  width={798}
                  height={609}
                />
              </div>
            </div>
          </div>
        )}
      </MultiContainer>
    </section>
  );
};

export default StartBlock;
