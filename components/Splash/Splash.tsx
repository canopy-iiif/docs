import { Box, Section } from "@radix-ui/themes";

import React from "react";
import Window from "./Window";

const Splash = ({ children }) => {
  const iiifContent = `/docs/iiif/francis-danby.json`;

  return (
    <Section size="3">
      <Box style={{ position: "relative" }}>
        <Box>{children}</Box>
        <Window iiifContent={iiifContent} />
      </Box>
    </Section>
  );
};

export default Splash;
