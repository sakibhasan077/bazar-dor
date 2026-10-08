import { AllProductType } from '@/type';
import React from 'react';
import ProductCart from '../cart/ProductCart';

interface IncreaseCostProductType {
  productData:AllProductType[]
}

const DecreaseCost = ({productData}:IncreaseCostProductType) => {
  const increaseData = [...productData];
  let data = increaseData.filter(item=> item?.change?.dir === "down").sort((a,b) =>{
    return Math.abs(b.change.pct) - Math.abs(a.change.pct)
  }).slice(0,6);
  return (
    <div className='mt-12'>
      <h2 className='text-[20px] mb-3'><span className='text-[#1A9951]'>▼</span> <span className='font-bold text-[#1D271F]'>আজ দাম কমেছে</span> </h2>
      <div className='grid grid-cols-3 gap-4'>
        {
          data.map(item=> <ProductCart key={item.id} productItem={item}></ProductCart>)
        }

      </div>
    </div>
  );
};

export default DecreaseCost;