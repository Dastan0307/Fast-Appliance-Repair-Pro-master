"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import classes from "./mobileNav.module.scss";
import { Typography } from "@typography/typography";
import {
  getHeaderAreas,
  getHeaderBrands,
  getHeaderInstallation,
  getHeaderRepair,
} from "@modules/aboutBlock/model/aboutBlockModel";
import { NavItem } from "@modules/header/types/types";
import Image from "next/image";
import arrowIcon from "@assets/icons/arrowIcon.svg";

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

interface MobileNavProps {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ navItems, isOpen, onClose }) => {
  const [data, setData] = useState<Data>({
    brands: [],
    installs: [],
    repair: [],
    areas: [],
  });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeaderData = async () => {
      const newData: Data = { brands: [], installs: [], repair: [], areas: [] };
      try {
        const brands = await getHeaderBrands();
        newData.brands = brands || [];
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }

      try {
        const installs = await getHeaderInstallation();
        newData.installs = installs || [];
      } catch (error) {
        console.error("Failed to fetch installations:", error);
      }

      try {
        const repair = await getHeaderRepair();
        newData.repair = repair || [];
      } catch (error) {
        console.error("Failed to fetch repairs:", error);
      }

      try {
        const areas = await getHeaderAreas();
        newData.areas = areas || [];
      } catch (error) {
        console.error("Failed to fetch areas:", error);
      }
      setData(newData);
    };

    fetchHeaderData();
    return () => {
      setData({ brands: [], installs: [], repair: [], areas: [] });
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const getLinkProps = (item: NavItem) => {
    const hasDropdownItems =
      Array.isArray(item.dropdown) && item.dropdown.length > 0;
    const hasData =
      {
        "Appliance install": data.installs.length > 0,
        "Appliance repair": data.repair.length > 0,
        Brands: data.brands.length > 0,
        "Service areas": data.areas.length > 0,
      }[item.label] || false;

    if (item.href || (!hasDropdownItems && !hasData)) {
      return {
        href:
          item.href ||
          {
            "Appliance install": "/",
            "Appliance repair": "/",
            Brands: "/brands",
            "Service areas": "/",
          }[item.label] ||
          "#",
        isLink: true,
      };
    }
    return { href: null, isLink: false };
  };

  return (
    <div className={`${classes.mobileNav} ${isOpen ? classes.open : ""}`}>
      <ul className={classes.navList}>
        {navItems.map((item) => {
          const { href, isLink } = getLinkProps(item);
          return (
            <li key={item.label} className={classes.navItem}>
              {isLink ? (
                <Link
                  href={`${href}`}
                  className={classes.navLink}
                  onClick={onClose}
                >
                  <Typography
                    variant="h4"
                    weight="bold"
                    className={classes.navLinkItem}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ) : (
                <div
                  className={classes.navLink}
                  onClick={() => toggleDropdown(item.label)}
                >
                  <Typography
                    variant="h4"
                    weight="bold"
                    className={classes.navLinkItem}
                  >
                    {item.label}
                  </Typography>
                  <Image
                    src={arrowIcon}
                    alt="Toggle Dropdown"
                    width={16}
                    height={16}
                    className={`${classes.arrowIcon} ${activeDropdown === item.label ? classes.arrowOpen : ""}`}
                  />
                </div>
              )}
              {((Array.isArray(item.dropdown) && item.dropdown.length > 0) ||
                (item.label === "Appliance install" &&
                  data.installs.length > 0) ||
                (item.label === "Appliance repair" && data.repair.length > 0) ||
                (item.label === "Brands" && data.brands.length > 0) ||
                (item.label === "Service areas" && data.areas.length > 0)) && (
                <ul
                  ref={(el) => {
                    if (el && activeDropdown === item.label) {
                      el.style.maxHeight = `${el.scrollHeight}px`;
                    } else if (el) {
                      el.style.maxHeight = "0px";
                    }
                  }}
                  className={`${classes.dropdown} ${activeDropdown === item.label ? classes.visible : ""}`}
                >
                  {item.dropdown?.map((subItem) => (
                    <li key={subItem.label} className={classes.dropdownItem}>
                      <Link
                        href={subItem.href}
                        className={classes.dropdownLink}
                        onClick={onClose}
                      >
                        <Typography
                          variant="h5"
                          weight="regular"
                          className={classes.subItem}
                        >
                          {subItem.label}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                  {item.label === "Appliance install" &&
                    data.installs.length > 0 &&
                    data.installs.map((install) => (
                      <li key={install.slug} className={classes.dropdownItem}>
                        <Link
                          href={`/installation/${install.slug}`}
                          className={classes.dropdownLink}
                          onClick={onClose}
                        >
                          <Typography
                            variant="h5"
                            weight="regular"
                            className={classes.subItem}
                          >
                            {install.name}
                          </Typography>
                        </Link>
                      </li>
                    ))}
                  {item.label === "Appliance repair" &&
                    data.repair.length > 0 &&
                    data.repair.map((repair) => (
                      <li key={repair.slug} className={classes.dropdownItem}>
                        <Link
                          href={`/repair/${repair.slug}`}
                          className={classes.dropdownLink}
                          onClick={onClose}
                        >
                          <Typography
                            variant="h5"
                            weight="regular"
                            className={classes.subItem}
                          >
                            {repair.name}
                          </Typography>
                        </Link>
                      </li>
                    ))}
                  {item.label === "Brands" &&
                    data.brands.length > 0 &&
                    data.brands.map((brand) => (
                      <li key={brand.slug} className={classes.dropdownItem}>
                        <Link
                          href={`/brands/${brand.slug}`}
                          className={classes.dropdownLink}
                          onClick={onClose}
                        >
                          <Typography
                            variant="h5"
                            weight="regular"
                            className={classes.subItem}
                          >
                            {brand.name}
                          </Typography>
                        </Link>
                      </li>
                    ))}
                  {item.label === "Service areas" &&
                    data.areas.length > 0 &&
                    data.areas.map((area) => (
                      <li key={area.slug} className={classes.dropdownItem}>
                        <Link
                          href={`/service-areas/${area.slug}`}
                          className={classes.dropdownLink}
                          onClick={onClose}
                        >
                          <Typography
                            variant="h5"
                            weight="regular"
                            className={classes.subItem}
                          >
                            {area.name}
                          </Typography>
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <a className={classes.contactButton} onClick={onClose} href="#form">
        <Typography
          variant="h4"
          weight="bold"
          className={classes.contactButtonText}
        >
          Contact us
        </Typography>
      </a>
    </div>
  );
};

export default MobileNav;
