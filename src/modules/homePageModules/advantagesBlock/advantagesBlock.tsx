import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./advantagesBlock.module.scss";
import { Typography } from "@typography/typography";
import Image from "next/image";
import AdvantageImage from "@assets/images/AdvantagesImage.png";

const AdvantagesBlock = () => {
  return (
    <section className={classes.advantagesBlock}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Our
          <Typography variant="span" weight="bold">
            {" "}
            advantages
          </Typography>
        </Typography>
        <div className={classes.advantagesBlockItems}>
          <div className={classes.advantagesTopBlock}>
            <div className={classes.advantagesBlockItem}>
              <div>
                <Typography variant="h4" weight="regular">
                  1
                </Typography>
              </div>
              <Typography variant="p" weight="regular">
                Prompt response and troubleshooting on the first visit.
              </Typography>
            </div>
            <div className={classes.advantagesBlockItem}>
              <div>
                <Typography variant="h4" weight="regular">
                  2
                </Typography>
              </div>
              <Typography variant="p" weight="regular">
                Experienced specialists with professional training.
              </Typography>
            </div>
          </div>
          <div className={classes.advantagesBottomBlock}>
            <div className={classes.advantagesBlockItem}>
              <div>
                <Typography variant="h4" weight="regular">
                  3
                </Typography>
              </div>
              <Typography variant="p" weight="regular">
                Up to three months warranty.
              </Typography>
            </div>
            <div className={classes.advantagesBlockItem}>
              <div>
                <Typography variant="h4" weight="regular">
                  4
                </Typography>
              </div>
              <Typography variant="p" weight="regular">
                Local, GTA-based business that understands the community
              </Typography>
            </div>
          </div>
        </div>
      </MultiContainer>
      <Image
        src={AdvantageImage}
        alt="advantages"
        className={classes.advantagesImage}
      />
    </section>
  );
};

export default AdvantagesBlock;
