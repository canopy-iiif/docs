import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, Section, Text } from "@radix-ui/themes";

import Balancer from "react-wrap-balancer";
import Link from "next/link";
import React from "react";

const Introduction = ({ heading, subHeading }) => {
  return (
    <Section
      size={{
        initial: "1",
        sm: "2",
      }}
      mb="5"
    >
      <Box
        mr={{
          initial: "0",
          sm: "9",
        }}
      >
        <Heading
          size={{
            initial: "8",
            sm: "9",
          }}
          mb="3"
          mr={{
            initial: "0",
            sm: "9",
          }}
          weight="medium"
          style={{
            fontFamily: "var(--canopy-display-font)",
            color: "var(--gray-12)",
          }}
        >
          <Balancer>{heading}</Balancer>
        </Heading>
        <Flex
          direction="column"
          gap="2"
          mr={{
            initial: "0",
            sm: "9",
          }}
        >
          <Text
            size={{
              initial: "4",
              sm: "5",
            }}
          >
            <Balancer ratio={0.618}>{subHeading}</Balancer>
          </Text>
        </Flex>
        <Box pt="5">
          <Flex
            gap="3"
            wrap={{
              initial: "wrap",
              sm: "nowrap",
            }}
          >
            <Link href="/get-started">
              <Button size="3">
                Get Started
                <ArrowRightIcon />
              </Button>
            </Link>
            <Link href="/configuration">
              <Button size="3" variant="surface">
                Configuration
              </Button>
            </Link>
            <Link href="https://github.com/canopy-iiif/canopy-iiif">
              <Button size="3" variant="surface">
                Code
                <GitHubLogoIcon />
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Section>
  );
};

export default Introduction;
