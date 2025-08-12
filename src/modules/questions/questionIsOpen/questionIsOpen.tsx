import classes from "./questionIsOpen.module.scss";
import PlusIcon from "@assets/icons/plusIcon.svg";
import MinusIcon from "@assets/icons/minusIcon.svg";
import Image from "next/image";

const QuestionIsOpen = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`${classes.flipCard} ${isOpen ? classes.flipped : ""}`}>
      <div className={classes.inner}>
        <div className={classes.front}>
          <Image src={PlusIcon} alt="alt" width={17} height={17} />
        </div>
        <div className={classes.back}>
          <Image src={MinusIcon} alt="alt" width={17} height={17} />
        </div>
      </div>
    </div>
  );
};

export default QuestionIsOpen;
