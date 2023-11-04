import { Box, Button, Flex, Heading, Section, Text } from "@radix-ui/themes";

import Link from "next/link";
import React from "react";

const Introduction = ({ heading, subHeading }) => {
  return (
    <Section size="2">
      <Box style={{ width: "50%", minWidth: "390px" }}>
        <Heading
          size="9"
          mb="3"
          style={{
            fontFamily: "var(--canopy-display-font)",
            letterSpacing: "-0.0382em",
            fontWeight: "400",
            color: "var(--accent-12)",
          }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <Flex direction="column" gap="2">
          <Text size="4">{subHeading}</Text>
        </Flex>
        <Box pt="5">
          <Flex gap="3">
            <Link href="/docs">
              <Button size="3">Get Started</Button>
            </Link>
            <Button size="3" variant="outline">
              View Examples
            </Button>
          </Flex>
        </Box>
      </Box>
    </Section>
  );
};

export default Introduction;
