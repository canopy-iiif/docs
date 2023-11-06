import { Box, Flex, Heading, Text } from "@radix-ui/themes";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

const SplashCollection = () => {
  return (
    <Box>
      <Box mt="1" mb="3">
        <Flex justify="between" align="center">
          <Heading
            size="2"
            weight="light"
            style={{
              fontFamily: "var(--canopy-display-font)",
            }}
          >
            Aldridge Collection
          </Heading>
          <Box
            style={{
              border: "1px solid var(--gray-4)",
              borderRadius: "1rem",
              padding: "4px 7px",
              display: "flex",
              justifyContent: "flex-end",
            }}
            grow="1"
            mx="5"
          >
            <MagnifyingGlassIcon style={{ opacity: 0.5 }} />
          </Box>
          <Flex gap="3">
            <Text size="1">Works</Text>
            <Text size="1">Metadata</Text>
            <Text size="1">About</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex gap="3">
        <Flex direction="column" grow="1" gap="3">
          <Box
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "var(--accent-4)",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "161.8px",
              backgroundColor: "var(--accent-4)",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "61.8px",
              backgroundColor: "var(--accent-4)",
            }}
          />
        </Flex>
        <Flex direction="column" grow="1" gap="3">
          <Box
            style={{
              width: "100%",
              height: "161.8px",
              backgroundColor: "var(--accent-4)",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "61.8px",
              backgroundColor: "var(--accent-4)",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "var(--accent-4)",
            }}
          />
        </Flex>
        <Flex direction="column" grow="1" gap="3">
          <Box
            style={{
              width: "100%",
              height: "61.8px",
              backgroundColor: "var(--accent-4)",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "var(--accent-4)",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "161.8px",
              backgroundColor: "var(--accent-4)",
            }}
          />
        </Flex>
        <Flex direction="column" grow="1" gap="3">
          <Box
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "var(--accent-4)",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "161.8px",
              backgroundColor: "var(--accent-4)",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "61.8px",
              backgroundColor: "var(--accent-4)",
            }}
          />
        </Flex>
        <Flex direction="column" grow="1" gap="3">
          <Box
            style={{
              width: "100%",
              height: "161.8px",
              backgroundColor: "var(--accent-4)",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "61.8px",
              backgroundColor: "var(--accent-4)",
            }}
          />
          <Box
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "var(--accent-4)",
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SplashCollection;
