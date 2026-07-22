import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export const tileBrands = [
  {
    id: 1,
    name: "Kajaria Ceramics",
    image: "https://logo.clearbit.com/kajariaceramics.com",
  },
  {
    id: 2,
    name: "RAK Ceramics",
    image: "https://logo.clearbit.com/rakceramics.com",
  },
  {
    id: 3,
    name: "Somany Ceramics",
    image: "https://logo.clearbit.com/somanyceramics.com",
  },
  {
    id: 4,
    name: "NITCO",
    image: "https://logo.clearbit.com/nitco.in",
  },
  {
    id: 5,
    name: "Asian Granito",
    image: "https://logo.clearbit.com/aglasiangranito.com",
  },
  {
    id: 6,
    name: "Johnson Tiles",
    image: "https://logo.clearbit.com/prismjohnson.in",
  },
  {
    id: 7,
    name: "Orientbell Tiles",
    image: "https://logo.clearbit.com/orientbell.com",
  },
  {
    id: 8,
    name: "Mir Ceramic",
    image: "https://cdn.dribbble.com/userupload/45956440/file/c54e148af55030c85477e963ca8d3894.jpg?resize=1905x1428&vertical=center",
  },
];

const BrandsLogo = () => {
  return (
    <div className='flex justify-between gap-4 items-center bg-gray-200 py-10 container mx-auto m-10 rounded-full'>
      

      <Marquee pauseOnHover={true}>
        {tileBrands.map((brand) => (
          <div key={brand.id} className="flex items-center gap-2 mx-8">
             <div className="relative">
                   <Image 
                     sizes="(max-width: 768px) 100vw, 50vw"
                     src={brand.image} 
                     alt='tiles' 
                     fill 
                     className='object-cover rounded-xl'
                   /> 
                 </div>
            <span>{brand.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandsLogo;