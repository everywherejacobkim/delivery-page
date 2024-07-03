import React from "react";

type Props = {
  text: string;
  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: number;
  radius?: string;
  onClick?: () => void;
};

const TextButton = ({
  text,
  width,
  color,
  bgColor,
  padding,
  fontSize,
  fontWeight,
  radius,
  height,
  onClick,
}: Props) => {
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: width || "auto",
    height: height || "auto",
    color: color || "inherit",
    backgroundColor: bgColor || "transparent",
    padding: padding || "8px 16px",
    fontWeight: fontWeight || 500,
    fontSize: fontSize || "14px",
    borderRadius: radius || "100px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default TextButton;
