import { Flex, IconButton, Tooltip } from "@radix-ui/themes";

import { InfoCircledIcon } from "@radix-ui/react-icons";

interface SharedTooltipProps {
  children: React.ReactNode;
  content: string;
}

export const SharedTooltip: React.FC<SharedTooltipProps> = ({
  content,
  children,
}) => {
  return (
    <Flex align="center" gap="2">
      {children}
      <Tooltip content={content}>
        <IconButton
          radius="full"
          style={{
            background: "none",
            color: "var(--gray-12)",
            padding: "0 !important",
            height: "1em",
            width: "1em",
          }}
        >
          <InfoCircledIcon />
        </IconButton>
      </Tooltip>
    </Flex>
  );
};

export default SharedTooltip;
