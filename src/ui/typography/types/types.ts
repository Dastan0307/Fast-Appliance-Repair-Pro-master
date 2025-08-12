export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "button";

export type TypographyWeight =
  | "normal"
  | "bold"
  | "regular"
  | "extraLight"
  | "semibold";
export interface ITypography {
  variant: TypographyVariant;
  weight?: TypographyWeight;
  color?: string;
  children: React.ReactNode;
  className?: string;
  truncate?: boolean | number;
  id?: string;
  textTransform?: React.CSSProperties["textTransform"];
}
