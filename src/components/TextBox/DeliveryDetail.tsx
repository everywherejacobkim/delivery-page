import styles from "./TextBox.module.scss";

type Props = {
  deliveredTime: string;
};

const DeliveryDetail = ({ deliveredTime }: Props) => {
  return (
    <div className={styles["delivery-detail"]}>
      <p className={styles["delivery-detail-title"]}>Delivery Details</p>
      <p className={styles["delivery-detail-time"]}>
        Delivery time: {deliveredTime}
      </p>
    </div>
  );
};

export default DeliveryDetail;
