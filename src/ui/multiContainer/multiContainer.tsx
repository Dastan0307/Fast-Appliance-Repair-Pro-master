import classNames from "classnames";
import classes from "./multiContainer.module.scss";

type TContainer = {
  children: React.ReactNode;
  className?: string;
};

export const MultiContainer = (props: TContainer) => {
  const { children, className } = props;

  return (
    <div className={classNames(classes.container, className)}>{children}</div>
  );
};
