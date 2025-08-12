import Link from "next/link";
import classes from "./blogCard.module.scss";
import { Typography } from "@typography/typography";
const BlogCard = ({
  image,
  title,
  href,
  description,
}: {
  image: string;
  title: string;
  href: string;
  description: string;
}) => {
  return (
    <Link
      className={classes.blogCard}
      style={{
        background: `
      linear-gradient(
        180deg,
        rgba(115, 194, 255, 0.0001) 0%,
        #086bb7 100%
      ),
      url(${image}) no-repeat center / cover
    `,
        borderRadius: "18px",
      }}
      href={`/blog/${href}`}
    >
      <div>
        <Typography variant="h3" weight="bold">
          {title}
        </Typography>
        <Typography variant="p" weight="regular" truncate={150}>
          {description}
        </Typography>
      </div>
    </Link>
  );
};

export default BlogCard;
