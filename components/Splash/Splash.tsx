import { Box, Section } from "@radix-ui/themes";

import React from "react";
import Screen from "./Window";

const Splash = ({ children }) => {
  return (
    <Section size="3">
      <Box style={{ position: "relative" }} pl="9">
        <Box>{children}</Box>
        <Screen />
      </Box>
    </Section>
  );
};

export default Splash;
