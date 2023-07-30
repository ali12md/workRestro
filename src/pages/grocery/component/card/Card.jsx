import React from 'react';
// import './card.scss';
import { Card, CardHeader, CardBody, CardFooter, Image, Text, Box } from '@chakra-ui/react';
import Dum from '../../../../assets/image/dumy.png'
import { images } from '../../../../assets/image/images';

export const CardGrocery = () => {
    return (
        <Card
        // w={['100%', '80%']}
        // width={'200px'}
        >
            <Image
                src={images.dumImg2}
                alt='Dan Abramov'
                padding={'10px 10px 5px 10px'}
            />
            <Text
                fontSize={'16px'}
                fontWeight={600}
                alignSelf={'center'}
            >
                Steak sapi bakar
            </Text>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                padding={'3px 10px 15px 5px'}
            >
                <Text
                    fontSize={'16px'}
                    fontWeight={600}
                    color={'var(--orange)'}
                >MRP. 250
                </Text>
                <Text
                    fontSize={'16px'}
                    fontWeight={600}
                    color={'var(--orange)'}
                >₹ 220
                </Text>
            </Box>
        </Card>
    )
}
