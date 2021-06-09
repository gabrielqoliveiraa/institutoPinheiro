import {Box, Button, Flex, Heading, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue} from '@chakra-ui/react'
import React from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import Link from 'next/link'

export default function UserList(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box> 
            <Header/>
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box flex='1' borderRadius={8} bg='white' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                            <Heading size='lg' fontWeight='normal'>Usuários</Heading>

                            <Link href='/users/create' passHref>
                                <Button as='a' size='sm' fontSize='sm' colorScheme='orange' leftIcon={<Icon as={RiAddLine}/>}>
                                    Criar Novo
                                </Button>
                            </Link>    
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4','4', '6']} color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>
                                    Usuário
                                </Th>
                                {isWideVersion && (<Th>
                                    Data de cadastro
                                </Th>)}
                                
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={['4','4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Gabriel Queiroz</Text>
                                        <Text fontSize='sm' color='gray.300'>email@email.com.br</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && (<Td>
                                    32, de fevereiro de 2030
                                </Td>)}
                                
                                <Td>
                                    <Button as='a' size='sm' fontSize='sm' colorScheme='orange' leftIcon={<Icon as={RiPencilLine}/>}>
                                        {isWideVersion ? 'Editar' : ''}
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}
