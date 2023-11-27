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

const phraseRewrites = ["navPlace"];

const TitleComponent: React.FC<TitleComponentProps> = ({ title, type }) => {
  // search and replace words for words in the title property using possible values in phraseRewrites ignoring case

  const titleScrubbed = phraseRewrites.reduce((acc, phrase) => {
    const regex = new RegExp(phrase, "gi");
    return acc.replace(regex, phrase);
  }, title);

  if (type === "separator") {
    return <span style={separatorStyling}>{titleScrubbed}</span>;
  }
  return <>{titleScrubbed}</>;
};

export default TitleComponent;
