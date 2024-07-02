import styles from "./TextBox.module.scss";

type Props = {
  deliveryNumber: number;
};

const DeliveryNumber = ({ deliveryNumber }: Props) => {
  return (
    <div className={styles["delivery-number-text"]}>
      Delivery# {deliveryNumber}{" "}
    </div>
  );
};

export default DeliveryNumber;
