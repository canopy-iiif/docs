import { Box, Section } from "@radix-ui/themes";

import React from "react";
import Window from "./Window";

const Splash = ({ children }) => {
  const iiifContent = `/docs/iiif/francis-danby.json`;

  return (
    <Section size="1">
      <Box style={{ position: "relative" }} mt="5">
        <Box style={{ position: "relative" }}>
          <Box
            style={{
              maskImage: "linear-gradient(0deg, #0000 100px, #000 300px)",
            }}
          >
            {children}
          </Box>
          <Box
            style={{
              position: "absolute",
              zIndex: "1",
              height: "100%",
              width: "100%",
              bottom: "0",
            }}
          ></Box>
        </Box>
        <Window iiifContent={iiifContent} />
      </Box>
    </Section>
  );
};

export default Splash;
