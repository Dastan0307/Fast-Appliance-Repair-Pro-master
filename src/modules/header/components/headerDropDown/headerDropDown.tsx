"use client";

import Link from "next/link";
import classes from "./headerDropDown.module.scss";
import { Typography } from "@typography/typography";
import { IDropDownProps } from "@modules/header/types/types";
import ItemDropdown from "../itemsDropDown/itemDropDown";

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

interface HeaderDropDownProps extends IDropDownProps {
  data: Data;
}

const HeaderDropDown: React.FC<HeaderDropDownProps> = ({
  item,
  activeDropdown,
  arrowPosition = "left",
  isBrandsOrServices = false,
  setActiveDropdown,
  data,
}) => {
  const shouldShowDropdown =
    (Array.isArray(item.dropdown) && item.dropdown.length > 0) ||
    (item.label === "Appliance install" && data.installs.length > 0) ||
    (item.label === "Appliance repair" && data.repair.length > 0) ||
    (item.label === "Brands" && data.brands.length > 0) ||
    (item.label === "Service areas" && data.areas.length > 0);

  if (!shouldShowDropdown || activeDropdown !== item.label) return null;

  return (
    <ul
      className={`${classes.dropdown} ${classes[`dropdown--arrow-${arrowPosition}`]}`}
      style={{
        left: isBrandsOrServices ? "0" : "0",
      }}
      onMouseEnter={() => setActiveDropdown && setActiveDropdown(item.label)}
      onMouseLeave={() => setActiveDropdown && setActiveDropdown(null)}
    >
      {item.dropdown?.map((subItem) => (
        <li key={subItem.label}>
          <Link href={subItem.href} className={classes.dropdownLink}>
            <Typography variant="h5" weight="regular">
              {subItem.label}
            </Typography>
          </Link>
        </li>
      ))}
      {item.label === "Appliance install" && data.installs.length > 0 && (
        <ItemDropdown brands={data.installs} route="installation" />
      )}
      {item.label === "Appliance repair" && data.repair.length > 0 && (
        <ItemDropdown brands={data.repair} route="repair" />
      )}
      {item.label === "Brands" && data.brands.length > 0 && (
        <ItemDropdown brands={data.brands} route="brands" />
      )}
      {item.label === "Service areas" && data.areas.length > 0 && (
        <ItemDropdown brands={data.areas} route="service-areas" />
      )}
    </ul>
  );
};

export default HeaderDropDown;