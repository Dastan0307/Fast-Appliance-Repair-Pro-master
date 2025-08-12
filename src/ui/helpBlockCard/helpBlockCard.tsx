'use client'

import Image, { StaticImageData } from "next/image";
import classes from "./helpBlockCard.module.scss";
import { Typography } from "@typography/typography";
import Link from "next/link";
import useMediaQuery from "@utils/hooks/useMediaQuery";

interface IHelpBlock {
  title: string;
  description: string;
  image: StaticImageData | string; 
  href?: string; 
}

const HelpBlockCard = ({ title, description, image, href }: IHelpBlock) => {
  const imageSrc = typeof image === "string" ? image : image.src;
  const isMobile = useMediaQuery("(max-width: 430px)");

  return href ? (
    <Link href={href} className={classes.helpBlockCard}>
      <div className={classes.wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isMobile ? "376" : "400"}
          height={isMobile ? "340" : "360"}
          viewBox="0 0 423 360"
          fill="none"
        >
          <rect x="343" width="80" height="80" rx="40" fill="#52B6F6" />
          <path
            d="M371.333 49.1668L394.667 25.8335"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M371.333 32.0503V49.167H388.45"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M368.833 56.6665H397.167"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M310.82 10C324.071 10 333 26.7486 333 40C333 67.6142 355.386 90 383 90C396.251 90 413 98.9289 413 112.18V330C413 346.569 399.569 360 383 360H30C13.4315 360 0 346.569 0 330V40C0 23.4315 13.4315 10 30 10H310.82Z"
            fill="#52B6F6"
          />
        </svg>

        <div className={classes.overlay}>
          <div className={classes.imageBlock}>
            <Typography variant="h3" weight="bold" truncate={60}>
              {title}
            </Typography>
            <div className={classes.image}>
            <Image src={imageSrc} alt={title || "alt"} width={140} height={140} />
            </div>
          </div>
          <div className={classes.textBlock}>
            <Typography variant="h3" weight="bold" truncate={60}>
              {title}
            </Typography>
            <Typography variant="p" weight="normal" truncate={128}>
              {description}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className={classes.wrapper}>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isMobile ? "376" : "400"}
          height={isMobile ? "330" : "360"}
          viewBox="0 0 423 360"
          fill="none"
        >
          <rect x="343" width="80" height="80" rx="40" fill="#52B6F6" />
          <path
            d="M371.333 49.1668L394.667 25.8335"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M371.333 32.0503V49.167H388.45"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M368.833 56.6665H397.167"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M310.82 10C324.071 10 333 26.7486 333 40C333 67.6142 355.386 90 383 90C396.251 90 413 98.9289 413 112.18V330C413 346.569 399.569 360 383 360H30C13.4315 360 0 346.569 0 330V40C0 23.4315 13.4315 10 30 10H310.82Z"
            fill="#52B6F6"
          />
        </svg>
      <div className={classes.overlay}>
        <div className={classes.imageBlock}>
          <Typography variant="h3" weight="bold" truncate={60}>
            {title}
          </Typography>
          <div className={classes.image}>
          <Image src={imageSrc} alt={title || "alt"} width={140} height={140} />
          </div>
        </div>
        <div className={classes.textBlock}>
          <Typography variant="h3" weight="bold" truncate={60}>
            {title}
          </Typography>
          <Typography variant="p" weight="normal" truncate={128}>
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HelpBlockCard;