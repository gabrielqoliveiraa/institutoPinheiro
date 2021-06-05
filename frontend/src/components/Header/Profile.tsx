import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfilProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfilProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel QUeiroz</Text>
          <Text color="gray.300" fontSize="small">
            email@email.com.br
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Queiroz"
        src="https://github.com/gabrielqoliveiraa.png"
      />
    </Flex>
  );
}
