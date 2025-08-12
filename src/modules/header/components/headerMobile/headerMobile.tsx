"use client";

import { useState } from "react";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./headerMobile.module.scss";
import Image from "next/image";
import Logo from "@assets/icons/FastLogoMobile.svg";
import burgerIcon from "@assets/icons/burgericon.svg";
import { Typography } from "@typography/typography";
import Link from "next/link";
import MobileNav from "../mobileNav/mobileNav";
import { navItems } from "@utils/constants";
import CloseMenuIcon from "@assets/icons/closeMenuIcon.svg";

const HeaderMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleNav = () => {
    if (isNavOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsNavOpen(false);
        setIsClosing(false);
      }, 200);
    } else {
      setIsNavOpen(true);
    }
  };

  return (
    <>
      <header className={classes.header}>
        <MultiContainer>
          <div className={classes.headerContainer}>
            <div>
              <Link href="/">
                <Image src={Logo} alt="Logo" width={94} height={30} />
              </Link>
            </div>
            <div className={classes.headerContent}>
              {!isNavOpen && !isClosing && (
                <>
                  <div className={classes.burgerIcon} onClick={toggleNav}>
                    <Image
                      src={burgerIcon}
                      alt="BurgerIcon"
                      width={34}
                      height={34}
                    />
                  </div>
                  <a href="#form" className={classes.contactButton}>
                    <Typography variant="h3" weight="bold">
                      Contact us
                    </Typography>
                  </a>
                </>
              )}
              {isNavOpen && (
                <Image
                  src={CloseMenuIcon}
                  alt="Close Menu"
                  width={34}
                  height={34}
                  onClick={toggleNav}
                  className={`${classes.closeButton} ${isNavOpen ? classes.active : ""} ${
                    isClosing ? classes.closing : ""
                  }`}
                />
              )}
            </div>
          </div>
        </MultiContainer>
      </header>
      <MobileNav
        navItems={navItems}
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
      />
    </>
  );
};

export default HeaderMobile;
