import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="orange"
        disabled
        _disabled={{ bgColor: "orange.300", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme='linkedin'
      _hover={{ bgColor: "gray.500" }}
    >
    {number}
    </Button>
  );
}
