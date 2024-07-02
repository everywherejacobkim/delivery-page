import styles from "./TextBox.module.scss";

type Props = {
  carrierLogo: string;
  carrierName: string;
  width?: string;
  height?: string;
  address1: string;
  address2: string;
};

const ImageTextBox = ({
  carrierLogo,
  width = "64px",
  height = "64px",
  carrierName,
  address1,
  address2,
}: Props) => {
  return (
    <div className={styles["image-textbox"]}>
      <img
        src={carrierLogo}
        alt="placeholder"
        className={styles["image"]}
        style={{ width, height }}
      />
      <div className={styles["image-textbox-wrapper"]}>
        <p className={styles["image-textbox-title"]}>
          Delivery from {carrierName}
        </p>
        <div>
          <p className={styles["image-textbox-address"]}>{address1}</p>
          <p className={styles["image-textbox-address"]}>{address2}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageTextBox;
