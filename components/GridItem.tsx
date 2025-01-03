import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Inset,
  Link,
  Text,
} from "@radix-ui/themes";

const imgSrcDefault =
  "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";

const GridItem = ({
  description,
  href,
  hrefCode,
  imgSrc = imgSrcDefault,
  title,
}) => {
  return (
    <Box>
      <Card size="3">
        <Link href={href}>
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src={imgSrc}
              alt={title}
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 240,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
        </Link>
        <Link href={href} style={{ color: "var(--gray-12)" }} underline="none">
          <Heading size="5" as="h3" mb="2">
            {title}
          </Heading>
        </Link>
        <Text size="3">{description}</Text>
        <Flex mt="4" gap="3">
          <Link href={href}>
            <Button>View</Button>
          </Link>
          <Link href={hrefCode}>
            <Button variant="soft">Code</Button>
          </Link>
        </Flex>
      </Card>
    </Box>
  );
};

export default GridItem;
