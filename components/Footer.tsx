import { Box, Flex, Text } from "@radix-ui/themes";

export const Footer = ({ description }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      direction="column"
      gap="3"
      justify="center"
      align="center"
      style={{ width: "100%" }}
    >
      <Box>
        <Text size="4" align="center" weight="medium">
          Canopy IIIF - {description}
        </Text>
      </Box>
      <Box>
        <Text size="2" align="center" style={{ opacity: 0.8 }} weight="light">
          &copy; {currentYear} Canopy IIIF. Licensed freely under the MIT
          License.
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
