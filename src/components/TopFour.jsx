import React from 'react';
import TileCard from './TileCard';
import Banner from './Banner';

const TopFour = async () => {
const res = await fetch('https://tiles-gallery-a8-three.vercel.app/data.json')
const data = await res.json()
const Top= data.slice(0,4);
console.log(Top);

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-10'>Top Living Example of architect</h2>
            <div>
                {
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-6 ">
                    {Top.map((tiles) =>  (
                        <TileCard key={tiles.id} tiles={tiles} />)

    

                        
                        )}
                        </div>
                }
            </div>

        </div>
    );
};
export default TopFour;