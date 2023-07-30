import React from 'react';
import './header.scss'
import { Avatar, Box, HStack, Input, Text } from '@chakra-ui/react';
import { MyIcon } from '../../../assets/icon';
import { CustomText } from '../../../component/customText/CustomText';

export const Header = () => {
    return (
        <Box className='headerContainer' >
            <Box >
                <MyIcon name='appLogo' />
            </Box>
            <Box
                display={'flex'}
                alignItems={'flex-start'}
                bg={'blackAlpha.400'}
            >
                <Input
                    _focusVisible={{
                        outline: "none",
                    }}
                    borderRadius={'10px'}
                />
                <Input
                    _focusVisible={{
                        outline: "none",
                    }}
                />
            </Box>
            <Box
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                >
                    <CustomText
                        text={'10:53:00'}
                        marginRight='10px'
                    />
                    <CustomText
                        text={'26/02/2023'}
                    />
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                </Box>
                <HStack >
                    {[1, 2, 3, 4].map((el) => {
                        return <HStack marginEnd={'10px'}>
                            <MyIcon name='clock' style={{ marginRight: 5 }} />
                            <CustomText
                                fontSize='16px'
                                color='var(--iconGrey)'
                                text={'Histoy'}
                            />
                        </HStack>
                    })}
                </HStack>

            </Box>
        </Box >
    )
}
