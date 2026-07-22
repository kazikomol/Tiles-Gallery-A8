import Category from '@/components/Category';
import TileCard from '@/components/TileCard';
import React from 'react';

const AllTillesPage = async ({ searchParams }) => {
  const { category } = await searchParams;

  const res = await fetch('https://tiles-gallery-a8-three.vercel.app/data.json');
  const data = await res.json();

  const filteredTiles = category
    ? data.filter(
        (data) => data.category.toLowerCase() === category.toLowerCase()
      )
    : data;

  console.log(data);

  return (
    <div>
      <h2 className='text-2xl font-bold m-4'>All Tiles</h2>

      <Category />

      <div className='grid grid-cols-4 gap-4'>
        {filteredTiles.map((tiles) => (
          <TileCard key={tiles.id} tiles={tiles}></TileCard>
        ))}
      </div>
    </div>
  );
};

export default AllTillesPage;