import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./aboutUsStartBlock.module.scss";
import Image from "next/image";
import AboutUsStartBlockImage from "@assets/images/AboutStartBlockImage.png";
import { Typography } from "@typography/typography";
import ArrowIcon from "@assets/icons/arrowIcon.svg";

interface AboutUsStartBlockProps {
  isVacancies?: boolean;
  isBrand?: boolean;
}

const AboutUsStartBlock: React.FC<AboutUsStartBlockProps> = ({
  isVacancies = false,
  isBrand = false,
}) => {
  return (
    <section className={classes.aboutUsStartBlock}>
      <MultiContainer>
        <div className={classes.aboutUsStartBlockContent}>
          <div className={classes.aboutUsStartBlockContentText}>
            <Typography variant="h1" weight="semibold">
              Fast Appliance Repair Pro
            </Typography>
            <Typography variant="p" weight="regular">
              {isBrand &&
                "We are a trusted local service company with years of experience helping Toronto residents resolve a wide range of appliance problems. Our team of certified technicians is committed to delivering fast, honest, and high-quality repair services—right in the comfort of your home. Whether it's a malfunctioning fridge, stove, washer, or any other appliance, we’re here to get things back up and running smoothly."}
              {isVacancies &&
                "We are a dedicated team of experienced professionals who genuinely love what we do. With every service call, we strive to deliver exceptional results and build long-term trust with our clients. As a company, we’re constantly evolving, expanding our reach, and improving the quality of our work. That’s why we’re always on the lookout for new talented specialists—people who are ready to work with honesty, efficiency, and a strong sense of respect for every customer we serve."}
              {!isVacancies &&
                !isBrand &&
                " Here at Fast Appliance Repair Pro we help with all of your household and commercial appliance repairs. We have been servicing the Toronto area for over the past 13 years and continue to be the best appliance repair in Toronto, Canada. We continue to have parts on hand to help with any appliance repair needs such as washing machine appliance repairs, dryer repairs, stove and oven repair and fridge repairs. Give Fast Appliance Repair Pro a call today to see what we are the most trusted repair company in Toronto County, Canada."}
            </Typography>
            {!isVacancies && (
              <a className={classes.button} href="#form">
                <Typography variant="h3" weight="bold">
                  Contact us
                </Typography>
                <div className={classes.buttonIcon}>
                  <Image src={ArrowIcon} alt="arrow icon" />
                </div>
              </a>
            )}
          </div>
          <div className={classes.aboutUsStartBlockImage}>
            <Image src={AboutUsStartBlockImage} alt="AboutUsStartBlockImage" />
          </div>
        </div>
        <div className={classes.aboutUsStartBlockMobile}>
          <Typography variant="h1" weight="semibold">
            Fast Appliance Repair Pro
          </Typography>
          <div className={classes.aboutUsStartBlockImage}>
            <Image
              src={AboutUsStartBlockImage}
              alt="AboutUsStartBlockImage"
              width={300}
            />
          </div>
          <Typography
            variant="p"
            weight="regular"
            className={classes.aboutUsStartBlockMobileText}
          >
            {isBrand &&
              "We are a trusted local service company with years of experience helping Toronto residents resolve a wide range of appliance problems. Our team of certified technicians is committed to delivering fast, honest, and high-quality repair services—right in the comfort of your home. Whether it's a malfunctioning fridge, stove, washer, or any other appliance, we’re here to get things back up and running smoothly."}
            {isVacancies &&
              "We are a dedicated team of experienced professionals who genuinely love what we do. With every service call, we strive to deliver exceptional results and build long-term trust with our clients. As a company, we’re constantly evolving, expanding our reach, and improving the quality of our work. That’s why we’re always on the lookout for new talented specialists—people who are ready to work with honesty, efficiency, and a strong sense of respect for every customer we serve."}
            {!isVacancies &&
              !isBrand &&
              " Here at Fast Appliance Repair Pro we help with all of your household and commercial appliance repairs. We have been servicing the Toronto area for over the past 13 years and continue to be the best appliance repair in Toronto, Canada. We continue to have parts on hand to help with any appliance repair needs such as washing machine appliance repairs, dryer repairs, stove and oven repair and fridge repairs. Give Fast Appliance Repair Pro a call today to see what we are the most trusted repair company in Toronto County, Canada."}
          </Typography>
          {!isVacancies && (
            <a className={classes.button} href="#form">
              <Typography variant="h3" weight="bold">
                Contact us
              </Typography>
              <div className={classes.buttonIcon}>
                <Image src={ArrowIcon} alt="arrow icon" />
              </div>
            </a>
          )}
        </div>
      </MultiContainer>
    </section>
  );
};

export default AboutUsStartBlock;
