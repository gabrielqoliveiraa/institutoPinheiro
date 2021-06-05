import {Flex, IconButton, useBreakpointValue, Icon} from '@chakra-ui/react'
import { RiMenLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header(){
    const { onOpen } = useSidebarDrawer()

    const isWidVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex width='100%' as='header' maxWidth={1480} h='20' mx='auto' mt='4' px='6' align='center'>
            
            {!isWidVersion && (
                <IconButton icon={<Icon as={RiMenLine} />} fontSize='24' variant='unstyled' onClick={onOpen} aria-label='Open Navigation' mr='2'>

                </IconButton>
            )}
            <Logo/>
            <Search/>

            <Flex align='center' ml='auto'>
                <NotificationNav/>

                <Profile showProfileData={isWidVersion}/>
            </Flex>
        </Flex>
    )
}

