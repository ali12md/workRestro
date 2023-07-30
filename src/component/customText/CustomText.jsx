import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { MyIcon } from '../../assets/icon'

export const CustomText = ({
    text,
    fontSize = '14px',
    fontWeight = 400,
    fontStyle = 'Poppins',
    color = 'var(--defaultBlack)',
    ...props
}) => {
    return (
        <Text
            fontWeight={fontWeight}
            fontSize={fontSize}
            fontStyle={fontStyle}
            color={color}
            {...props}
        >
            {text}
        </Text>
    )
}
