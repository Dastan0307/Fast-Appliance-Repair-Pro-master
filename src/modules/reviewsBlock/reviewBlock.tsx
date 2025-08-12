import { Typography } from "@typography/typography";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./reviewBlock.module.scss";
import ReviewCard from "src/ui/reviewCard/reviewCard";
import OlegImage from "@assets/images/Oleg.jpg";

const ReviewBlock = () => {
  return (
    
    <section className={classes.reviewBlock}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Our
          <Typography variant="span" weight="bold">
            {" "}
            reviews
          </Typography>
        </Typography>
        <div className={classes.reviewBlockCards}>
          <ReviewCard
            name="Oleg"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laudantium veniam temporibus, doloremque similique quaerat magni dolorum expedita ipsa in quisquam tempora cupiditate nemo omnis et ab consectetur ut quasi illo repellat deserunt nulla. Iusto, nisi animi. Asperiores, officiis pariatur in beatae labore repellat impedit odit earum omnis nulla, natus, porro eligendi repudiandae corporis aspernatur? Laborum similique error natus, delectus voluptate mollitia quia aspernatur perferendis tenetur et, consequuntur hic facere cum, deleniti earum a ducimus esse in minima facilis aliquid officiis? Magni numquam deserunt optio, dolore totam tempore veritatis, quia odit, in molestias voluptates nihil similique ut expedita animi. Obcaecati!"
            userPhoto={OlegImage}
          />
          <ReviewCard
            name="Oleg"
            text="Lorem ipsum dolor sit amet"
            userPhoto={OlegImage}
          />
          <ReviewCard
            name="Oleg"
            text="Lorem ipsum dolor sit amet"
            userPhoto={OlegImage}
          />
        </div>
      </MultiContainer>
    </section>
    

  );
};

export default ReviewBlock;
