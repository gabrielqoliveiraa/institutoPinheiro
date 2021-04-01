import {Flex, Text, Input, Icon, HStack, Box, Avatar} from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header(){
    return (
        <Flex width='100%' as='header' maxWidth={1480} h='20' mx='auto' mt='4' px='6' align='center'>
            
            <Logo/>
            <Search/>

            <Flex align='center' ml='auto'>
                <NotificationNav/>

                <Profile/>
            </Flex>
        </Flex>
    )
}

