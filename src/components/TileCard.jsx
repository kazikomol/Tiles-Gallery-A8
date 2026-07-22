"use client"
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiDollar } from 'react-icons/bi';

const TileCard = ({tiles}) => {
    console.log(tiles)
    return (
        

            <Card className='items-center border' >
                <div className='relative w-full aspect-square'>
                     <Image 
                src={tiles.image} 
                alt='tiles' 
                
            fill 
                className='object-cover rounded-xl'
                /> 
                <Chip size='sm' className='absolute m-1'>{tiles.category}</Chip>
                
                </div>
                <div>
                    <h2 className='font-medium'>{tiles.title}</h2>
                </div>
                <div className='flex gap-between '>
                  <BiDollar className='size-6' /> <p className='text-xl'>{tiles.price}{tiles.currency}</p>
                </div>
               
                    <Button className={'w-full'} variant="secondary">Details</Button>
                
            </Card>
            
        
    );
};

export default TileCard;