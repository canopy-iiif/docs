import { AspectRatio, Box, Flex, Heading, Text } from "@radix-ui/themes";
// @ts-ignore
import { Label, Thumbnail } from "@samvera/clover-iiif/primitives";

import Image from "next/image";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

const SplashCollection = ({ data }) => {
  const GridItem = ({ index }) => {
    // create an array of 10 numbers ranging from 0.618 to 1.382
    const numbers = Array.from(Array(10).keys()).map((i) => i / 10 + 0.618);
    const ratio = numbers[Math.floor(Math.random() * 10)] as number;

    return (
      <Flex direction="column">
        <Box
          style={{
            backgroundColor: "var(--accent-4)",
          }}
        >
          <AspectRatio ratio={ratio}>
            {data?.items[index].thumbnail[0].id && (
              <Image
                src={data?.items[index].thumbnail[0].id}
                alt="example-image"
                fill={true}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "var(--radius-2)",
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
          <GridItem index={6} />
          <GridItem index={11} />
          <GridItem index={16} />
        </Flex>
        <Flex direction="column" grow="1" gap="3" style={{ width: "20%" }}>
          <GridItem index={2} />
          <GridItem index={7} />
          <GridItem index={12} />
          <GridItem index={17} />
        </Flex>
        <Flex direction="column" grow="1" gap="3" style={{ width: "20%" }}>
          <GridItem index={3} />
          <GridItem index={8} />
          <GridItem index={13} />
          <GridItem index={18} />
        </Flex>
        <Flex direction="column" grow="1" gap="3" style={{ width: "20%" }}>
          <GridItem index={4} />
          <GridItem index={9} />
          <GridItem index={14} />
          <GridItem index={19} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SplashCollection;
