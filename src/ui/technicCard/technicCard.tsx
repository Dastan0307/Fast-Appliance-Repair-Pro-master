import { Typography } from "@typography/typography";
import Image from "next/image";
import Link from "next/link";
import classes from "./technicCard.module.scss";
import emptyStateImage from "@assets/images/emptyStateImage.png";

const TechnicCard = ({
  image,
  title,
  href,
  technicName,
}: {
  image?: string;
  title: string;
  href: string;
  technicName: string;
}) => {
  return (
    <Link
      href={`/brands/${technicName}/${href}`}
      className={classes.technicCard}
    >
      <div className={classes.technicCardContent}>
        <div className={classes.technicCardText}>
          <Typography variant="h4" weight="bold" truncate={25}>
            {title}
          </Typography>
        </div>
        <div className={classes.technicCardImage}>
          <Image src={image || emptyStateImage} alt={title} />
        </div>
      </div>
    </Link>
  );
};

export default TechnicCard;
