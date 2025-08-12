export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export interface IDropDown {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export interface IDropDownProps {
  item: IDropDown;
  activeDropdown: string | null;
  arrowPosition?: "left" | "right";
  isBrandsOrServices?: boolean;
  setActiveDropdown?: (label: string | null) => void;
}

export interface NavProps {
  navItems: NavItem[];
  activeDropdown: string | null;
  setActiveDropdown: (label: string | null) => void;
}
