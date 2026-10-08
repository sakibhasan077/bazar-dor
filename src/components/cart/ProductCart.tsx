import { AllProductType } from "@/type";

interface CartType {
  productItem: AllProductType;
}
const ProductCart = ({ productItem }: CartType) => {
  let convertBanglaNum = (num: number) => {
    let x = num
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
    return x;
  };
  return (
    <div className="p-4 bg-[#FAFCFA] rounded-2xl border-2 border-[#E1E8E1]">
      <div className="flex gap-3 items-center">
        <span className="py-2 px-3 bg-[#F0F5F0] rounded-[10px] text-[24px] flex justify-center items-center">{productItem.image}</span>
        <div>
          <p className="font-semibold mb-0.5">{productItem.nameBn}</p>
          <p className="text-xs ">
            প্রতি{" "}
            {productItem?.unit === "dozen"
              ? "ডজন"
              : productItem?.unit === "kg"
                ? "কেজি"
                : productItem?.unit === "litre"
                  ? "লিটার"
                  : productItem?.unit === "piece"
                    ? "পিছ"
                    : ""}
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-3">আজকের দাম</p>
      <div className="flex justify-between">
        <span><span className="text-[20px] font-bold">{convertBanglaNum(productItem?.today)}</span> <span className="text-[14px] font-medium">টাকা</span> </span>
        <span className="text-[14px] font-semibold ">
          
          {productItem.change.dir === "up" ? (
                <span className="flex  text-red-600 gap-1">
                  ▲
                  {convertBanglaNum(Math.abs(productItem.change.pct))}%
                </span>
              ) : productItem.change.dir === "down" ? (
                <span className="flex gap-1 text-green-700">
                  ▼
                  {convertBanglaNum(Math.abs(productItem.change.pct))}%
                </span>
              ) : (
                <span className="text-yellow-500">
                  {" "}
                  {Math.abs(productItem.change.pct)}%
                </span>
              )}
        </span>
      </div>
    </div>
  );
};

export default ProductCart;
