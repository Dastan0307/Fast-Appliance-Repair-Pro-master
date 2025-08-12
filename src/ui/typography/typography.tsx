import { ITypography, TypographyVariant } from "./types/types";
import classes from "./typography.module.scss";
import { createElement } from "react";

export const Typography = ({
  variant,
  weight,
  children,
  className,
  color,
  truncate = false,
  id,
  textTransform,
}: ITypography) => {
  const tags: Record<TypographyVariant, string> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    span: "span",
    p: "p",
    button: "button",
  };

  const classNamedGenerated = [
    classes[variant],
    weight && classes[weight],
    color && classes[color],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const truncateString = (str: string, maxNumber: number) => {
    if (typeof str === "string") {
      return str.length <= maxNumber ? str : str.slice(0, maxNumber) + "...";
    }
    return str;
  };

  const shouldTruncate = truncate !== false;
  const truncateLength = typeof truncate === "number" ? truncate : 100; // Значение по умолчанию 100, если truncate = true

  return createElement(
    tags[variant],
    { className: classNamedGenerated, id, style: { textTransform } },
    shouldTruncate && typeof children === "string"
      ? truncateString(children, truncateLength)
      : children
  );
};
