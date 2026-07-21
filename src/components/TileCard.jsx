"use client"
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TileCard = ({tiles}) => {
    console.log(tiles)
    return (
        

            <Card >
                <Image src={tiles.image} alt='tiles' width={100} height={100}  />
            </Card>
            
        
    );
};

export default TileCard;