import { Box, Button, Flex, Heading, Section, Text } from "@radix-ui/themes";

import Balancer from "react-wrap-balancer";
import Link from "next/link";
import React from "react";

const Introduction = ({ heading, subHeading }) => {
  return (
    <Section size="2">
      <Box style={{ width: "80%", minWidth: "400px" }}>
        <Heading
          size="9"
          mb="3"
          weight="medium"
          style={{
            fontFamily: "var(--canopy-display-font)",
            color: "var(--gray-12)",
          }}
        >
          <Balancer>{heading}</Balancer>
        </Heading>
        <Flex direction="column" gap="2">
          <Text size="4">
            <Balancer ratio={0.618}>{subHeading}</Balancer>
          </Text>
        </Flex>
        <Box pt="5">
          <Flex gap="3">
            <Link href="/get-started">
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
