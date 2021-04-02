import {Box, Flex, HStack, SimpleGrid, VStack, Button, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import { Input } from '../../components/Form/Input'
import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import Link from 'next/link'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from 'react-hook-form'

type CreateUserFormData = {
  name: string;  
  email: string;
  password: string;
  password_confirm: string;
};

const createUserSchema = yup.object().shape({
  name: yup.string().required('Nome Obrigatório'),
  email: yup.string().required('E-mail Obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'Necessário 6 caracteres'),
  password_confirmation: yup.string().oneOf([
      null, 
      yup.ref('password')
  ], 'As senhas precisam ser iguais')
});

export default function CreateUser(){
    const {register, handleSubmit, formState, errors} = useForm({
        resolver: yupResolver(createUserSchema)
    })

    const handleFormSubmit: SubmitHandler<CreateUserFormData> = async (value) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log(value)
    }

    return (
        <Box>
            <Header/>
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box as='form' onSubmit={handleSubmit(handleFormSubmit)} flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
                    <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
                    <Divider my='6' borderColor='gray.700'/>

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input error={errors.name} name='name' label='Nome' ref={register}/>
                            <Input error={errors.email} name='email' label='E-mail' type='email' ref={register}/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input error={errors.password} name='password' type='password' label='Senha' ref={register}/>
                            <Input error={errors.password_confirmation} name='password_confirmation' label='Confirmação de Senha' type='password' ref={register}/>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            
                            <Button type='submit' isLoading={formState.isSubmitting} colorScheme='pink'>Salvar</Button>
                        </HStack>

                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}


