import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Text,
  TextField,
  Theme,
} from "@radix-ui/themes";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { themePropDefs } from "@radix-ui/themes/dist/esm/props";

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const ColorBlock = ({
  color,
  level,
  width = "calc(100% / 12)",
  borderRadius = "none",
}) => {
  const backgroundColor = `var(--${color}-${level})`;
  return (
    <Box
      style={{
        backgroundColor,
        height: "2.618rem",
        width,
        borderRadius,
      }}
    />
  );
};

const LabelFromPropValue = ({ value }) => {
  return (
    <Flex gap="2" style={{ width: "25%" }} align="baseline" flexShrink="0">
      <Text size="4" weight="medium">
        {capitalize(value)}
      </Text>
      <Code size="3">{value}</Code>
    </Flex>
  );
};

const ColorBlockLabeled = ({ color }) => {
  return (
    <Flex direction="column" gap="2">
      <ColorBlock
        key={color + 10}
        color={color}
        level={10}
        width="60px"
        borderRadius="var(--radius-3)"
      />
      <Text size="1" weight="medium">
        {capitalize(color)}
      </Text>
    </Flex>
  );
};

const ColorScale = ({ color }) => {
  // return scale of 1-12
  const scale = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Flex justify="between" align="center">
      <LabelFromPropValue value={color} />
      <Flex
        flexGrow="1"
        style={{
          borderRadius: "var(--radius-3)",
          overflow: "hidden",
        }}
      >
        {scale.map((level) => (
          <ColorBlock key={color + level} color={color} level={level} />
        ))}
      </Flex>
    </Flex>
  );
};

const Colors = ({ colors }) => {
  return (
    <Box my="5">
      <Flex gap="3" direction="column">
        {colors
          .filter((color) => color !== "auto")
          .map((color) => (
            <ColorScale key={color} color={color} />
          ))}
      </Flex>
    </Box>
  );
};

const ColorsLabeled = ({ colors }) => {
  return (
    <Box my="5">
      <Flex gap="3" wrap="wrap">
        {colors
          .filter((color) => color !== "auto")
          .map((color) => (
            <ColorBlockLabeled key={color} color={color} />
          ))}
      </Flex>
    </Box>
  );
};

const Radius = () => {
  return (
    <Box my="5">
      <Flex gap="5" direction="column">
        {themePropDefs.radius.values.map((radius) => (
          <Flex justify="between" align="center">
            <LabelFromPropValue value={radius} />
            <Box flexGrow="1">
              <TextField.Root size="3" radius={radius} variant="surface">
                <TextField.Slot side="left" pl="3">
                  <MagnifyingGlassIcon height="20" width="20" />
                </TextField.Slot>
                <TextField.Slot side="right" pr="1" gap="0">
                  <Button size="2">Search</Button>
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

const Scaling = () => {
  const text =
    "Born in 1793 near Killinick, Ireland, Francis Danby initially gained recognition for his romantic landscapes and atmospheric scenes that captivated the Victorian public. After moving to Bristol, England, he became a key figure in the Bristol School of artists, where he further developed his unique style of using dramatic contrasts and rich, moody colors to evoke powerful emotions. His work, often imbued with themes of the sublime and picturesque, made significant contributions to the British Romantic movement in art.";
  return (
    <Box my="5">
      <Flex gap="5" direction="column">
        {themePropDefs.scaling.values.map((value) => (
          <Flex justify="between" align="start">
            <LabelFromPropValue value={value} />
            <Box flexGrow="0" flexShrink="1">
              <Theme scaling={value}>
                <Heading mb="2">Francis Danby</Heading>
                <Text>{text}</Text>
              </Theme>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export { Colors, ColorsLabeled, Radius, Scaling };
