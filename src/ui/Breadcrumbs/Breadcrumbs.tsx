"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./Breadcrumbs.module.scss";
import { MultiContainer } from "../multiContainer/multiContainer";
import { Typography } from "@typography/typography";

const formatSegment = (segment: string) => {
  const words = decodeURIComponent(segment).split("-");

  return words
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase()
    )
    .join(" ");
};

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const showHome = segments.length <= 2;
  const visibleSegments = segments.length <= 2 ? segments : segments.slice(-2);

  const buildHref = (index: number) => {
    const start = segments.length - visibleSegments.length;
    return `/${segments.slice(0, start + index + 1).join("/")}`;
  };

  return (
    <nav className={classes.breadcrumbs}>
      <MultiContainer>
        <ul>
          {showHome && (
            <li>
              <Typography variant="h4" weight="semibold" color="primary">
                <Link href="/">Home</Link>
              </Typography>
            </li>
          )}
          {visibleSegments.map((segment, index) => {
            const isLast = index === visibleSegments.length - 1;
            return (
              <li key={index}>
                {isLast ? (
                  <Typography variant="h4" weight="semibold" color="primary">
                    {formatSegment(segment)}
                  </Typography>
                ) : (
                  <Typography variant="h4" weight="semibold" color="primary">
                    <Link href={buildHref(index)}>
                      {formatSegment(segment)}
                    </Link>
                  </Typography>
                )}
              </li>
            );
          })}
        </ul>
      </MultiContainer>
    </nav>
  );
};
