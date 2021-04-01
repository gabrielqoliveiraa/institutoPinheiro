import {Box, Button, Flex, Heading, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text} from '@chakra-ui/react'
import React from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'

export default function UserList(){
    return (
        <Box>
            <Header/>
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                            <Heading size='lg' fontWeight='normal'>Usuários</Heading>

                            <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine}/>}>
                                Criar Novo
                            </Button>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>
                                    Usuário
                                </Th>
                                <Th>
                                    Data de cadastro
                                </Th>
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr px='6'>
                                <Td>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Gabriel Queiroz</Text>
                                        <Text fontSize='sm' color='gray.300'>email@email.com.br</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    32, de fevereiro de 2030
                                </Td>
                                <Td>
                                    <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiPencilLine}/>}>
                                        Editar
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
