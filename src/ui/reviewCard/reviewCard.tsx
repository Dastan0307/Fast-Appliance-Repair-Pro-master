import Image, { StaticImageData } from "next/image";
import classes from "./reviewCard.module.scss";
import Logo from "@assets/icons/HeaderLogo.svg";
import { Typography } from "@typography/typography";

interface IReviews {
  name: string;
  text: string;
  userPhoto: StaticImageData;
}

const ReviewCard = ({ name, text, userPhoto }: IReviews) => {
  return (
   
    <div className={classes.reviewCard}>
      <div className={classes.reviewCardLogo}>
        <Image src={Logo} alt="Logo" width={160} height={51} />
      </div>
      <div className={classes.reviewCardContent}>
        <Image src={userPhoto} alt="Logo" />
        <div className={classes.reviewCardContentText}>
          <Typography variant="h3" weight="bold">
            {name}
          </Typography>
          <Typography variant="p" truncate={202}>
            {text}
          </Typography>
        </div>
      </div>

    </div>
  );
};

export default ReviewCard;
