import React from "react";

interface TitleComponentProps {
  title: string;
  type: string;
}

const separatorStyling = {
  display: "block",
  fontWeight: "400",
  fontSize: "1.38em",
  fontFamily: "var(--canopy-display-font)",
  marginBottom: "-0.5em",
};

const TitleComponent: React.FC<TitleComponentProps> = ({ title, type }) => {
  if (type === "separator") {
    return <span style={separatorStyling}>{title}</span>;
  }
  return <>{title}</>;
};

export default TitleComponent;
