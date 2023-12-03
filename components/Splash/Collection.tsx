import { AspectRatio, Box, Flex, Heading, Text } from "@radix-ui/themes";
import React, { useState } from "react";

import Image from "next/image";
// @ts-ignore
import { Label } from "@samvera/clover-iiif/primitives";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SplashCollection = ({ data }) => {
  const GridItem = ({ index }) => {
    const options = [0.618, 1, 1.382];
    const ratio = options[index % 3];
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
      setLoaded(true);
    };

    return (
      <Flex direction="column">
        <Box
          style={{
            backgroundColor: " var(--accent-4)",
          }}
        >
          <AspectRatio
            ratio={ratio}
            className={`example-image ${loaded ? "loaded" : ""}`}
          >
            {data?.items[index].thumbnail[0].id && (
              <Image
                src={data?.items[index].thumbnail[0].id}
                alt="example-image"
                fill={true}
                onLoad={handleImageLoad}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "var(--radius-2)",
                  opacity: loaded ? 1 : 0,
                }}
              />
            )}
          </AspectRatio>
        </Box>
        <Text
          size="1"
          mt="2"
          style={{ fontSize: "0.5em", lineHeight: "1.1em", opacity: "0.7" }}
        >
          <Label label={data?.items[index].label} />
        </Text>
      </Flex>
    );
  };

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
            <Label label={data?.label} />
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
        <Flex direction="column" grow="1" gap="3" style={{ width: "20%" }}>
          <GridItem index={0} />
          <GridItem index={5} />
          <GridItem index={10} />
          <GridItem index={15} />
        </Flex>
        <Flex direction="column" grow="1" gap="3" style={{ width: "20%" }}>
          <GridItem index={1} />
          <GridItem index={16} />
          <GridItem index={11} />
          <GridItem index={16} />
        </Flex>
        <Flex direction="column" grow="1" gap="3" style={{ width: "20%" }}>
          <GridItem index={2} />
          <GridItem index={7} />
          <GridItem index={12} />
        </Flex>
        <Flex direction="column" grow="1" gap="3" style={{ width: "20%" }}>
          <GridItem index={3} />
          <GridItem index={8} />
          <GridItem index={13} />
        </Flex>
        <Flex direction="column" grow="1" gap="3" style={{ width: "20%" }}>
          <GridItem index={4} />
          <GridItem index={9} />
          <GridItem index={14} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SplashCollection;
