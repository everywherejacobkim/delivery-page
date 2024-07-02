import styles from "./TextBox.module.scss";

type Props = {
  title: string;
  number: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  onClick?: (number: string) => void;
};

const NumberTextBox = ({
  title,
  number,
  icon,
  iconWidth,
  iconHeight,
  onClick,
}: Props) => {
  const handleClick = () => {
    if (onClick) onClick(number);
  };
  return (
    <div className={styles["number-textbox"]}>
      <p className={styles["number-textbox-title"]}>{title}</p>
      <div className={styles["number-textbox-wrapper"]}>
        <p className={styles["number-textbox-number"]}>{number}</p>
        {icon && (
          <img
            src={icon}
            width={iconWidth}
            height={iconHeight}
            alt="icon-image"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default NumberTextBox;
