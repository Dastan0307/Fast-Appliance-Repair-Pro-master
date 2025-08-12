import classes from "./questionIcon.module.scss";
import Image from "next/image";
import QuestionsIcon from "@assets/icons/questionsIcon.svg";
import InfoIcon from "@assets/icons/infoIcon.svg";

const QuestionIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`${classes.flipCard} ${isOpen ? classes.flipped : ""}`}>
      <div className={classes.inner}>
        <div className={classes.front}>
          <Image src={QuestionsIcon} alt="Вопрос" />
        </div>
        <div className={classes.back}>
          <Image src={InfoIcon} alt="Инфо" />
        </div>
      </div>
    </div>
  );
};

export default QuestionIcon;
