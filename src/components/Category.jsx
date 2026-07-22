import { Button } from '@heroui/react';
import React from 'react';

const Category = async () => {
    const res = await fetch('https://tiles-gallery-a8-three.vercel.app/category.json')
    const categories = await res.json()  
      return (
        <div className='mb-5 space-x-3'>
            {
                categories.map(category => <Button variant='outline' size='sm' key={category.id}>{category.name}</Button>)
            }
            
        </div>
    );
};

export default Category;