import { Box, Section } from "@radix-ui/themes";

import React from "react";
import Window from "./Window";

const Splash = ({ children }) => {
  const iiifContent =
    "https://api.dc.library.northwestern.edu/api/v2/collections/3121f8ee-5265-4b19-bae3-59f96e9ac01a?as=iiif&size=50";

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
