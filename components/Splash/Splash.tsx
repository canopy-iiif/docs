import { Box, Section } from "@radix-ui/themes";

import React from "react";
import RenderedScreen from "./RenderedScreen";

const Splash = ({ children }) => {
  return (
    <Section size="3">
      <Box style={{ position: "relative" }}>
        <Box>{children}</Box>
        <RenderedScreen />
      </Box>
    </Section>
  );
};

export default Splash;
