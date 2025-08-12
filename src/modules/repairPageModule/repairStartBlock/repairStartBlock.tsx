import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./repairStartBlock.module.scss";
import { Typography } from "@typography/typography";
import Image from "next/image";
import RepairStartBlockImage from "@assets/images/RepairBlockcopy.png";
import ArrowIcon from "@assets/icons/arrowIcon.svg";

const RepairStartBlock = ({
  name,
  short_description,
}: {
  name: string;
  short_description: string;
}) => {
  return (
    <section className={classes.repairStartBlock}>
      <MultiContainer>
        <div className={classes.repairStartBlockContent}>
          <div>
            <Typography variant="h1" weight="bold">
              {name}
            </Typography>
            <Typography variant="p">{short_description}</Typography>
            <a href="#form" className={classes.button}>
              <Typography variant="h3" weight="bold">
                Contact us
              </Typography>
              <div>
                <Image src={ArrowIcon} alt="arrow icon" />
              </div>
            </a>
          </div>
          <div className={classes.repairStartBlockImage}>
            <Image
              src={RepairStartBlockImage}
              alt="RepairStartBlockImage"
              width={380}
            />
          </div>
        </div>
        <div className={classes.repairStartBlockMobile}>
          <Typography variant="h1" weight="bold">
            {name}
          </Typography>
          <div className={classes.repairStartBlockImage}>
            <Image
              src={RepairStartBlockImage}
              alt="RepairStartBlockImage"
              width={380}
            />
          </div>
          <Typography variant="p">{short_description}</Typography>
          <a href="#form" className={classes.button}>
            <Typography variant="h3" weight="bold">
              Contact us
            </Typography>
            <div>
              <Image src={ArrowIcon} alt="arrow icon" />
            </div>
          </a>
        </div>
      </MultiContainer>
    </section>
  );
};

export default RepairStartBlock;
