import { Box, Button, Flex, Section, Table } from "@radix-ui/themes";

import React from "react";

const Splash = ({ children }) => {
  return (
    <Section size="1">
      <Flex>
        <Box>
          <div>{children}</div>
        </Box>
      </Flex>
    </Section>
  );
};

export default Splash;
