import {Flex, Input, Icon} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri';

export function Search() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="white"
      position="relative"
      bg="white"
      borderRadius="full"
    >
      <Input
        color="gray.500"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        px="4"
        mr="4"
      />

      <Icon as={RiSearchLine} fontSize="20" color='gray.400'/>
    </Flex>
  );
}
