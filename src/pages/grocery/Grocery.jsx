import React from 'react'
import './grocery.scss';
import { CardGrocery } from './component/card/Card'
import { SimpleGrid } from '@chakra-ui/react';

export const Grocery = () => {
    return (
        <div className='grocery'>
            {/* car */}
            <div className='groceryList'>
                <SimpleGrid
                    overflow={'auto'}
                    columns={[1, 2, 3, 4, 5, 6]}
                    spacing='10px'
                >
                    {[1, 2, 3, 4, 5, 7, 8, 9, 11, 22, 33, 44, 55, 56, 66, 77, 87].map((el) => {
                        return <CardGrocery />
                    })}
                </SimpleGrid>

            </div>
        </div>
    )
}
