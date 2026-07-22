import { Button, Card, CloseButton } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const res = await fetch('https://tiles-gallery-a8-three.vercel.app/data.json');
  const data = await res.json();
  const tiles = data.find(t => t.id == id);
  console.log(tiles);

  return (
    <Card className="w-full items-stretch md:flex-row p-4 gap-6">
      {/* Increased height: h-96 on mobile, min-h-[400px] on desktop */}
      <div className="relative h-96 w-full md:min-h-[400px] md:w-1/2 shrink-0 overflow-hidden rounded-2xl">
        <Image 
          sizes="(max-width: 768px) 100vw, 50vw"
          src={tiles.image} 
          alt='tiles' 
          fill 
          className='object-cover rounded-xl'
        /> 
      </div>
      <div className="flex flex-1 flex-col gap-3 mt-20">
        <Card.Header className="gap-1 relative">
          <Card.Title className="text-xl font-semibold">Title:{tiles.title}</Card.Title>
          <div className='text-xl font-semibold'>
            Description:{tiles.description}
          </div>
         
        </Card.Header>
       
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Dimensions:{tiles.dimensions}</span>
            <span className="text-xl font-semibold">Material:{tiles.material}</span>
            <span className="text-xl font-semibold">Price:{tiles.price}{tiles.currency}</span>
          </div>
        
      </div>
    </Card>
  );
};

export default TilesDetailsPage;