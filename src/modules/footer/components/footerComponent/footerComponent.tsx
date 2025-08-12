import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./footerComponent.module.scss";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "@assets/icons/FooterLogo.svg";
import { Typography } from "@typography/typography";
import {
  aboutFooter,
  footerLinkDays,
  footerLinks,
  footerSocials,
} from "@utils/constants";
import useMediaQuery from "@utils/hooks/useMediaQuery";

const FooterComponent = () => {
  const isMobile = useMediaQuery("(max-width: 430px)");
  return (
    <footer className={classes.footer}>
      <MultiContainer>
        <div className={classes.footerTopContent}>
          <Link href={"/"}>
            <Image src={FooterLogo} alt="Logo"
              width={isMobile? 150: 395}
              height={isMobile? 50: 126}/>
          </Link>
          <div className={classes.footerAbout}>
            {aboutFooter &&
              aboutFooter.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={classes.footerAboutLink}
                >
                  <Typography variant="h4" weight="regular">
                    {item.title}
                  </Typography>
                </Link>
              ))}
          </div>
        </div>
        <div className={classes.footerBottomContent}>
          <ul className={classes.footerLinks}>
            {footerLinks &&
              footerLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <Typography variant="h3" weight="regular">
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              ))}
          </ul>
          <ul className={classes.footerWorkingHours}>
            {footerLinkDays &&
              footerLinkDays.map((item, index) => (
                <li key={index}>
                  <Typography variant="h3" weight="regular">
                    {item.day}
                  </Typography>
                  <Typography variant="h3" weight="regular">
                    {item.time}
                  </Typography>
                </li>
              ))}
          </ul>
          <div className={classes.footerSocials}>
            <div className={classes.footerContacts}>
              <Link href={"tel:+14169003727"}>
                <Typography variant="h3" weight="regular">
                  +1 416-900-3727
                </Typography>
              </Link>
              <Link href={"mailto:info@fastrepairpro.ca"}>
                <Typography variant="h3" weight="regular">
                  info@fastrepairpro.ca
                </Typography>
              </Link>
            </div>
            <div className={classes.footerSocialsIcons}>
              {footerSocials &&
                footerSocials.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <Image src={item.icon} alt="Logo" width={40} height={40} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </MultiContainer>
    </footer>
  );
};

export default FooterComponent;
