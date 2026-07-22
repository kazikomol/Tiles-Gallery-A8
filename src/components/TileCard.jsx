"use client"
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDollar } from 'react-icons/bi';

const TileCard = ({tiles}) => {
    console.log(tiles)
    return (
        

            <Card className='items-center border' >
                <div className='relative w-full aspect-square'>
                     <Image 
                     sizes="(max-width: 768px) 100vw, 33vw"
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
               
                    <Link href={`/all-tiles/${tiles.id}`}>
                    <Button className={'w-full'} variant="secondary">Details</Button>
                    
                    </Link>
                
            </Card>
            
        
    );
};

export default TileCard;