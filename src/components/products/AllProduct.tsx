import { AllProductType } from '@/type';
import ProductCart from '../cart/ProductCart';

interface IncreaseCostProductType {
  productData:AllProductType[]
}

const AllProduct = ({productData}:IncreaseCostProductType) => {
  // const increaseData = [...productData];
  // let data = increaseData.filter(item=> item?.change?.dir === "up").sort((a,b) =>{
  //   return Math.abs(b.change.pct) - Math.abs(a.change.pct)
  // }).slice(0,6);
  let convertBanglaNum = (num: number) => {
    let x = num
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
    return x;
  };
  const data = [...productData]
  return (
    <div className='my-12' id='allProduct '>
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