import { Typography } from "@typography/typography";
import classes from "./salesCard.module.scss";

const SalesCard = ({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) => {
  return (
    <div className={classes.salesCard}>
      <div className={classes.salesCardTopContent}>
        <Typography variant="h3" weight="semibold">
          {title}
        </Typography>
        <Typography variant="h5" weight="regular">
          {description}
        </Typography>
      </div>
      <div className={classes.salesCardBottomContent}>
        <Typography variant="h5" weight="regular">
          {date}
        </Typography>
      </div>
    </div>
  );
};

export default SalesCard;
