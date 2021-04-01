import {Box, Flex, HStack, SimpleGrid, VStack, Button, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import { Input } from '../../components/Form/Input'
import { Sidebar } from '../../components/Form/Sidebar'
import { Header } from '../../components/Header'


export default function CreateUser(){
    return (
        <Box>
            <Header/>
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
                    <Divider my='6' borderColor='gray.700'/>

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input name='name' label='Nome'/>
                            <Input name='email' label='E-mail' type='email'/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input name='password' type='password' label='Senha'/>
                            <Input name='password_confirmation' label='Confirmação de Senha' type='password'/>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            <Button colorScheme='pink'>Salvar</Button>
                        </HStack>

                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}


