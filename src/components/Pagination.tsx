import {Button, HStack, Box} from '@chakra-ui/react'

export function Pagination(){
    return (
        <HStack mt='8' justify='space-between' spacing='6' align='center'>
            <Box>
                <strong>0 </strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
           <HStack spacing='2'>
            <Button size='sm' fontSize='xs' width='4' colorScheme='pink' disabled _disabled={{bgColor: 'pink.500', cursor: 'default'}}> 1 </Button>
            <Button size='sm' fontSize='xs' width='4' bgColor='gray.700' _hover={{bgColor: 'gray.500'}}> 2 </Button>
           </HStack>
        </HStack>
    )
}