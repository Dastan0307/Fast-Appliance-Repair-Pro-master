import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./privilegeBlock.module.scss";
import { Typography } from "@typography/typography";
import Image from "next/image";
import PrivilegeImageOne from "@assets/icons/PrivilegeIcon1.png";
import PrivilegeImageTwo from "@assets/icons/PrivilegeIcon2.png";
import PrivilegeImageThree from "@assets/icons/PrivilegeIcon3.png";
import PrivilegeImageFour from "@assets/icons/PrivilegeIcon4.png";
const PrivilegeBlock = () => {
  return (
    <section className={classes.privilegeBlock}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          What You Can Expect When You Call Fast Appliance Repair Pro
        </Typography>
        <div className={classes.privilegeBlockItems}>
          <div className={classes.privilegeBlockItemsLeft}>
            <div className={classes.privilegeBlockItem}>
              <div className={classes.privilegeBlockItemImage}>
                <Typography variant="h2" weight="bold">
                  01
                </Typography>
                <div>
                  <Image src={PrivilegeImageOne} alt="privilege Image" />
                </div>
              </div>
              <div className={classes.privilegeBlockItemText}>
                <Typography variant="h3" weight="bold">
                  Professional Technicians
                </Typography>
                <Typography variant="p" weight="bold">
                  Certified experts who arrive on time, in clean uniforms, ready to deliver fast, reliable appliance repairs.
                </Typography>
              </div>
            </div>
            <div className={classes.privilegeBlockItem}>
              <div className={classes.privilegeBlockItemImage}>
                <Typography variant="h2" weight="bold">
                  03
                </Typography>
                <div>
                  <Image src={PrivilegeImageThree} alt="privilege Image" />
                </div>
              </div>
              <div className={classes.privilegeBlockItemText}>
                <Typography variant="h3" weight="bold">
                  Reliable Repairs
                </Typography>
                <Typography variant="p" weight="bold">
                  Accurate diagnostics and quality fixes done right the first time.
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.privilegeBlockItemsRight}>
            <div className={classes.privilegeBlockItem}>
              <div className={classes.privilegeBlockItemImage}>
                <Typography variant="h2" weight="bold">
                  02
                </Typography>
                <div>
                  <Image src={PrivilegeImageTwo} alt="privilege Image" />
                </div>
              </div>
              <div className={classes.privilegeBlockItemText}>
                <Typography variant="h3" weight="bold">
                   Honest Pricing
                </Typography>
                <Typography variant="p" weight="bold">
                  Upfront costs for labor and parts — no hidden fees, no surprises.
                </Typography>
              </div>
            </div>
            <div className={classes.privilegeBlockItem}>
              <div className={classes.privilegeBlockItemImage}>
                <Typography variant="h2" weight="bold">
                  04
                </Typography>
                <div>
                  <Image src={PrivilegeImageFour} alt="privilege Image" />
                </div>
              </div>
              <div className={classes.privilegeBlockItemText}>
                <Typography variant="h3" weight="bold">
                  Guaranteed Parts
                </Typography>
                <Typography variant="p" weight="bold">
                  We use only certified OEM parts backed by the manufacturer’s warranty.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};

export default PrivilegeBlock;
