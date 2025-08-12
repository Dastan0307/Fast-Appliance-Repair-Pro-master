"use client";

import { NavItem, NavProps } from "@modules/header/types/types";
import classes from "./headerNav.module.scss";
import Link from "next/link";
import HeaderDropDown from "../headerDropDown/headerDropDown";
import { Typography } from "@typography/typography";

interface Slug {
  name: string;
  slug: string;
}

interface Data {
  brands: Slug[];
  installs: Slug[];
  repair: Slug[];
  areas: Slug[];
}

interface HeaderNavProps extends NavProps {
  data: Data;
}

const HeaderNav = (props: HeaderNavProps) => {
  const { navItems, activeDropdown, setActiveDropdown, data } = props;

  const getNavItemProps = (item: NavItem) => {
    const hasDropdownItems = Array.isArray(item.dropdown) && item.dropdown.length > 0;
    const hasData = {
      "Appliance install": data.installs.length > 0,
      "Appliance repair": data.repair.length > 0,
      "Brands": data.brands.length > 0,
      "Service areas": data.areas.length > 0,
    }[item.label] || false;

    return {
      href: item.href || {
        "Appliance install": "/",
        "Appliance repair": "/",
        "Brands": "/brands",
        "Service areas": "/", 
        "About us": "/about",
      }[item.label] || "",
      showDropdown: hasDropdownItems || hasData,
    };
  };

  return (
    <>
      {navItems &&
        navItems.map((item) => {
          const isBrandsOrServices =
            item.label === "Brands" || item.label === "Service areas";
          const arrowPosition =
              item.label === "Appliance repair" ||
              item.label === "Appliance install" ||
              item.label === "Service areas" ||
              item.label === "About us"
                ? "left"
                : "right";
          const { href, showDropdown } = getNavItemProps(item);

          return (
            <li
              key={item.label}
              className={classes.navItem}
              onMouseEnter={() => showDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {
                href !== '/' ? (
                  <Link href={href} className={classes.navLink}>
                    <Typography variant="h5" weight="regular">
                      {item.label}
                    </Typography>
              </Link>
                ): (
                  <Typography variant="h5" weight="regular">
                    {item.label}
                  </Typography>
                )
              }
              {showDropdown && <span className={classes.dropdownIcon}>›</span>}
              {showDropdown && (
                <HeaderDropDown
                  item={item}
                  activeDropdown={activeDropdown}
                  arrowPosition={arrowPosition}
                  isBrandsOrServices={isBrandsOrServices}
                  setActiveDropdown={setActiveDropdown}
                  data={data}
                />
              )}
            </li>
          );
        })}
    </>
  );
};

export default HeaderNav;