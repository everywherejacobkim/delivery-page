import React from "react";
import styles from "./Buttons.module.scss";

type Props = {
  title: string;
  desc: string;
  icon: string;
  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: number;
  radius?: string;
  titleColor?: string;
  descColor?: string;
  titleFontSize?: string;
  titleFontWeight?: number;
  descFontSize?: string;
  descFontWeight?: number;
  iconWidth?: string;
  iconHeight?: string;
};

const IconButton = ({
  title,
  desc,
  icon,
  width,
  color,
  bgColor,
  padding,
  fontSize,
  fontWeight,
  radius,
  height,
  titleColor,
  descColor,
  titleFontSize,
  titleFontWeight,
  descFontSize,
  descFontWeight,
  iconWidth,
  iconHeight,
}: Props) => {
  const buttonStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "30px",
    width: width || "auto",
    height: height || "auto",
    color: color || "inherit",
    backgroundColor: bgColor || "transparent",
    padding: padding || "10px 30px",
    fontWeight: fontWeight || 500,
    fontSize: fontSize || "14px",
    borderRadius: radius || "1px",
    border: "1px solid #F5F5F5",
    boxShadow: "0px 4px 10px 0px #00000014",
    cursor: "pointer",
  };

  const titleStyle: React.CSSProperties = {
    color: titleColor || "#000",
    fontSize: titleFontSize || "14px",
    fontWeight: titleFontWeight || 600,
  };

  const descStyle: React.CSSProperties = {
    color: descColor || "#9397A5",
    fontSize: descFontSize || "12px",
    fontWeight: descFontWeight || 400,
  };

  return (
    <button style={buttonStyle}>
      <div>
        <img
          src={icon}
          alt="icon-image"
          style={{ width: iconWidth, height: iconHeight }}
        />
      </div>
      <div className={styles["text-wrapper"]}>
        <p style={titleStyle}>{title}</p>
        <p style={descStyle}>{desc}</p>
      </div>
    </button>
  );
};

export default IconButton;
