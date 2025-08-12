import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./repairHelpBlock.module.scss";
import { Typography } from "@typography/typography";
import WeAreHelp from "@assets/images/WeAreHelp.png";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const RepairHelpBlock = ({
  full_description,
}: {
  full_description: string;
}) => {
  return (
    <section className={classes.repairHelpBlock}>
      <MultiContainer>
        <div className={classes.repairHelpBlockContentWrapper}>
          <Typography variant="h1" weight="bold">
            Is something broken?
          </Typography>
          <Typography variant="h2" weight="bold">
            We will help!
          </Typography>
          <div className={classes.repairHelpBlockContent}>
            <div className={classes.repairHelpBlockContentText}>
              <div className={classes.repairHelpBlockContentTextDescription}>
                {parse(full_description)}
              </div>
              <Link
                href="tel:+14169003727"
                className={classes.repairHelpBlockContentTextLink}
              >
                <Typography variant="h3" weight="bold">
                  +1 416-900-3727
                </Typography>
              </Link>
            </div>
            <div>
              <Image src={WeAreHelp} alt="WeAreHelp" />
            </div>
          </div>
        </div>
        <div className={classes.repairHelpBlockMobile}>
            <Typography variant="h1" weight="bold">
                Is something broken?
            </Typography>
            <Typography variant="h2" weight="bold">
              We will help!
            </Typography>
            <div className={classes.repairHelpBlockContentImage}>
              <Image src={WeAreHelp} alt="WeAreHelp" />
            </div>
            <div className={classes.repairHelpBlockContentText}>
              <div className={classes.repairHelpBlockContentTextDescription}>
                {parse(full_description)}
              </div>
              <Link
                href="tel:+14169003727"
                className={classes.repairHelpBlockContentTextLink}
              >
                <Typography variant="h3" weight="bold">
                  +1 416-900-3727
                </Typography>
              </Link>
            </div>
        </div>
      </MultiContainer>
    </section>
  );
};

export default RepairHelpBlock;
