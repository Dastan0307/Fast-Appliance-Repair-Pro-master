import ArrowIcon from "@assets/icons/arrowIcon.svg";
import notFound from "@assets/images/NotFound.png";
import { Typography } from "@typography/typography";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./notFoundBlock.module.scss";

const NotFoundBlock: FC = () => {
  return (
    <>
      <MultiContainer className={classes.notFound}>
        <div>
          <div className={classes.notFoundTextBlock}>
            <Typography variant="span" className={classes.notFoundTitle}>
              Oops!
            </Typography>
            <div className={classes.notFoundMobileImg}>
              <Image src={notFound} alt="not found" width={867} height={867} />
            </div>
            <Typography variant="p" className={classes.notFoundText}>
              It looks like this page is under repair.
              <br /> Sometimes even web-sites have a glitch.
              <br /> But do not worry - we know how to fix it.
            </Typography>
            <Link href="/">
              <button className={classes.button}>
                <Typography variant="h3" weight="bold">
                  Home
                </Typography>
                <div className={classes.buttonIcon}>
                  <Image src={ArrowIcon} alt="arrow icon" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className={classes.notFoundImg}>
          <Image src={notFound} alt="not found" width={867} height={867} />
        </div>
      </MultiContainer>
    </>
  );
};

export default NotFoundBlock;
