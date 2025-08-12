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
          What will you get by contacting us?
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
                  Professional technicians
                </Typography>
                <Typography variant="p" weight="bold">
                  Always in clean uniforms, polite, well-groomed, and certified.
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
                  Reliable repairs
                </Typography>
                <Typography variant="p" weight="bold">
                  Accurate diagnostics and high-quality fixes done right the
                  first time.
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
                  Honest pricing
                </Typography>
                <Typography variant="p" weight="bold">
                  No surprises – you know the cost of labor and parts in
                  advance.
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
                  Guaranteed parts
                </Typography>
                <Typography variant="p" weight="bold">
                  We use only certified (OEM) parts backed by the manufacturer’s
                  warranty.
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
