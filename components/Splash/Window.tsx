import { Box, Flex } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

import { Collection } from "@iiif/presentation-3";
import SplashCollection from "./Collection";
import { convertPresentation2 } from "@iiif/parser/presentation-2";

const SplashWindow = ({ iiifContent }) => {
  const [data, setData] = useState<Collection>();

  useEffect(() => {
    (async () => {
      const response = await fetch(iiifContent).then((res) => res.json());
      const collection = convertPresentation2(
        response
      ) as unknown as Collection;

      setData(collection);
    })();
  }, [iiifContent]);

  return (
    <Flex
      direction="column"
      style={{
        minWidth: "768px",
        height: "610px",
        backgroundColor: "var(--accent-1)",
        boxShadow: "6px 6px 29px var(--accent-5)",
        borderRadius: "5px",
        position: "absolute",
        top: "-50px",
        overflow: "hidden",
        left: "50%",
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
                backgroundColor: "var(--accent-8)",
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
      <Box grow="1" p="3" style={{ position: "relative" }}>
        <SplashCollection data={data} />
      </Box>
    </Flex>
  );
};

export default SplashWindow;
