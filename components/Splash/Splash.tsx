import { Box, Section } from "@radix-ui/themes";

import React from "react";
import Window from "./Window";

const Splash = ({ children }) => {
  const iiifContent = `/iiif/francis-danby.json`;

  return (
    <Section size="3">
      <Box style={{ position: "relative" }} px="6">
        <Box>{children}</Box>
        <Window iiifContent={iiifContent} />
      </Box>
    </Section>
  );
};

export default Splash;
