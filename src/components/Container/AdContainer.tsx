import React from "react";
import styles from "./AdContainer.module.scss";

type Props = {
  imageUrl?: string;
  placeholder?: string;
};

const AdContainer = ({ imageUrl, placeholder = "Ad Space" }: Props) => {
  return (
    <div className={styles["ad-box"]}>
      {imageUrl ? (
        // If imageUrl is provided, display the image
        <img src={imageUrl} alt={placeholder} className={styles["ad-image"]} />
      ) : (
        // If no imageUrl, display the placeholder text
        <div className={styles["placeholder"]}>{placeholder}</div>
      )}
    </div>
  );
};

export default AdContainer;
