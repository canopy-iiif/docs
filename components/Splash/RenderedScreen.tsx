import { Box, Flex, ScrollArea } from "@radix-ui/themes";

import React from "react";

const RenderedScreen = () => {
  return (
    <Flex
      direction="column"
      style={{
        width: "61.8%",
        height: "400px",
        backgroundColor: "var(--accent-1)",
        boxShadow: "3px 3px 11px var(--accent-5)",
        borderRadius: "5px",
        position: "absolute",
        top: "-100px",
        overflow: "hidden",
        right: "3rem",
      }}
    >
      <Box
        style={{
          backgroundColor: "var(--accent-12)",
          padding: "0.618rem",
        }}
      >
        <Box>
          <Flex gap="1">
            <Box
              style={{
                width: "0.618rem",
                height: "0.618rem",
                backgroundColor: "var(--accent-8)",
                borderRadius: "50%",
                opacity: "0.5",
              }}
            ></Box>
            <Box
              style={{
                width: "0.618rem",
                height: "0.618rem",
                backgroundColor: "var(--accent-8",
                borderRadius: "50%",
                opacity: "0.5",
              }}
            ></Box>
            <Box
              style={{
                width: "0.618rem",
                height: "0.618rem",
                backgroundColor: "var(--accent-8)",
                borderRadius: "50%",
                opacity: "0.5",
              }}
            ></Box>
          </Flex>
          <Box
            style={{
              backgroundColor: "var(--accent-8)",
              borderRadius: "3px",
              opacity: "0.5",
            }}
            mt="3"
          >
            &nbsp;
          </Box>
        </Box>
      </Box>
      <Box grow="1" style={{ position: "relative" }}>
        <ScrollArea
          type="hover"
          size="2"
          scrollbars="vertical"
          style={{ position: "absolute", height: "100%", padding: "0.618rem" }}
        ></ScrollArea>
      </Box>
    </Flex>
  );
};

export default RenderedScreen;
