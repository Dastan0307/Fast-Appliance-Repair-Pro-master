import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./clientsBlock.module.scss";
import { Typography } from "@typography/typography";
import ReviewCard from "src/ui/reviewCard/reviewCard";
import OlegImage from "@assets/images/Oleg.jpg";
const ClientsBlock = () => {
  return (
    <section className={classes.clientsBlock}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          5000+{" "}
          <Typography variant="span" weight="bold">
            saticfied customers
          </Typography>
        </Typography>
        <div className={classes.clientsItems}>
          <ReviewCard
            name="Oleg"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laudantium veniam temporibus, doloremque similique quaerat magni dolorum expedita ipsa in quisquam tempora cupiditate nemo omnis et ab consectetur ut quasi illo repellat deserunt nulla. Iusto, nisi animi. Asperiores, officiis pariatur in beatae labore repellat impedit odit earum omnis nulla, natus, porro eligendi repudiandae corporis aspernatur? Laborum similique error natus, delectus voluptate mollitia quia aspernatur perferendis tenetur et, consequuntur hic facere cum, deleniti earum a ducimus esse in minima facilis aliquid officiis? Magni numquam deserunt optio, dolore totam tempore veritatis, quia odit, in molestias voluptates nihil similique ut expedita animi. Obcaecati!"
            userPhoto={OlegImage}
          />{" "}
          <ReviewCard
            name="Oleg"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laudantium veniam temporibus, doloremque similique quaerat magni dolorum expedita ipsa in quisquam tempora cupiditate nemo omnis et ab consectetur ut quasi illo repellat deserunt nulla. Iusto, nisi animi. Asperiores, officiis pariatur in beatae labore repellat impedit odit earum omnis nulla, natus, porro eligendi repudiandae corporis aspernatur? Laborum similique error natus, delectus voluptate mollitia quia aspernatur perferendis tenetur et, consequuntur hic facere cum, deleniti earum a ducimus esse in minima facilis aliquid officiis? Magni numquam deserunt optio, dolore totam tempore veritatis, quia odit, in molestias voluptates nihil similique ut expedita animi. Obcaecati!"
            userPhoto={OlegImage}
          />{" "}
          <ReviewCard
            name="Oleg"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laudantium veniam temporibus, doloremque similique quaerat magni dolorum expedita ipsa in quisquam tempora cupiditate nemo omnis et ab consectetur ut quasi illo repellat deserunt nulla. Iusto, nisi animi. Asperiores, officiis pariatur in beatae labore repellat impedit odit earum omnis nulla, natus, porro eligendi repudiandae corporis aspernatur? Laborum similique error natus, delectus voluptate mollitia quia aspernatur perferendis tenetur et, consequuntur hic facere cum, deleniti earum a ducimus esse in minima facilis aliquid officiis? Magni numquam deserunt optio, dolore totam tempore veritatis, quia odit, in molestias voluptates nihil similique ut expedita animi. Obcaecati!"
            userPhoto={OlegImage}
          />
        </div>
      </MultiContainer>
    </section>
  );
};

export default ClientsBlock;
