import { useEffect, useState } from "react";
import styles from "./StatusBar.module.scss";
import cellularImage from "../../assets/icons/Cellular.png";
import wifiImage from "../../assets/icons/Wifi.png";
import batteryImage from "../../assets/icons/Battery.png";

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles["container"]}>
      <h4>{currentTime}</h4>
      <div className={styles["icon-wrapper"]}>
        <img src={cellularImage} width={17} height={11} alt="cellular-image" />
        <img src={wifiImage} width={15} height={11} alt="wifi-image" />
        <img src={batteryImage} width={18} height={10} alt="battery-image" />
      </div>
    </div>
  );
};

export default StatusBar;
