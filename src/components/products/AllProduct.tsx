import { AllProductType } from '@/type';
import ProductCart from '../cart/ProductCart';

interface IncreaseCostProductType {
  productData:AllProductType[]
}

const AllProduct = ({productData}:IncreaseCostProductType) => {
  let convertBanglaNum = (num: number) => {
    let x = num
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
    return x;
  };
  const data = [...productData]
  return (
    <div className='my-12' id='allProducts '>
      <h2 className='text-[20px] mb-3'><span className='font-bold text-[#1D271F]'>সব পণ্য</span> </h2>
      <p className='text-[rgba(29,39,31,0.69)] text-sm mb-4 '>মোট {convertBanglaNum(data.length)}টি পণ্য দেখানো হচ্ছে</p>
      <div className='grid grid-cols-3 gap-4'>
        {
          data.map(item=> <ProductCart key={item.id} productItem={item}></ProductCart>)
        }
      </div>
    </div>
  );
};

export default AllProduct;