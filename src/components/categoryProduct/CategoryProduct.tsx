"use client";
import ProductCart from "@/components/cart/ProductCart";
import { AllProductType } from "@/type";
import { useState } from "react";

interface CategoryType {
  data:AllProductType[];
}

const CategoryData =  ({data}:CategoryType) => {
  const [sortBy, setSortBy] = useState<"default" | "lowToHigh" | "highToLow">(
    "default",
  );
  // BanglaDate.
  let convertBanglaNum = (num: number) => {
    const banglaNumber = new Intl.NumberFormat("bn-BD").format(num);
    return banglaNumber;
  };

  const sortCost = (cost: AllProductType[]): AllProductType[] => {
    let myCost = [...cost];

    if (sortBy === "lowToHigh") {
      myCost.sort((a, b) => a.today - b.today);
    } else {
      myCost.sort((a, b) => b.today - a.today);
    }

    return myCost;
  };

  const sortLowToHigh = sortCost(data)
  const sortHighToLow = sortCost(data)

  return (
    <div className="min-h-96">
      <div className="w-full max-w-6xl px-4 py-6 mx-auto">
        {/* Top */}
        <div className="p-5.25 bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl flex gap-3 items-center">
          <div>
            <span className="text-4xl leading-10">{data[0].categoryIcon}</span>
          </div>
          <div className="">
            <h2 className="text-[#1D271F] font-bold leading-9 text-2xl">
              {data[0].categoryNameBn}
            </h2>
            <p className="text-[#1d271fb5] text-sm leading-5">
              {convertBanglaNum(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
        {/* Middle */}
        <div className="p-4.25 bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl flex justify-end items-center mt-6 mb-4">
          <div className="mr-6">
            <div className="flex gap-3 items-center">
              <span className="min-w-15 text-[#8A92A0] text-sm">সাজান:</span>
              <select
                defaultValue={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "default" | "lowToHigh" | "highToLow",
                  )
                }
                className="select border border-[#1d271f36] rounded-2xl text-[#1D271F] outline outline-[#1d271f36] pt-2"
              >
                {/* <option disabled={true}>Pick a color</option> */}
                <option value={"default"}>ডিফল্ট</option>
                <option value={"lowToHigh"}>দাম: কম থেকে বেশি</option>
                <option value={"highToLow"}>দাম: বেশি থেকে কম</option>
              </select>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div>
          <p className="text-[#1d271fb5] text-sm leading-5 my-4">
            মোট {convertBanglaNum(data.length)}টি পণ্য দেখানো হচ্ছে
          </p>
          <div className="grid grid-cols-3 gap-4">
            {sortBy === "default" ? data.map((item) => (
              <ProductCart key={item.id} productItem={item}></ProductCart>
            )): sortBy === "lowToHigh" ? sortLowToHigh.map((item) => (
              <ProductCart key={item.id} productItem={item}></ProductCart>
            )):sortHighToLow.map((item) => (
              <ProductCart key={item.id} productItem={item}></ProductCart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default CategoryData;
