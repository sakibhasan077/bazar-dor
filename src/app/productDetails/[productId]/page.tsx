import { AllProductType } from "@/type";
import Link from "next/link";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${productId}`,
  );
  const data: AllProductType = await res.json();
  console.log(data.markets);
  let convertBanglaNum = (num: number) => {
    const banglaNumber = new Intl.NumberFormat("bn-BD").format(num);
    return banglaNumber;
  };

  const minPrice = Math.min(...data.markets.map((min) => min.min));
  const maxPrice = Math.max(...data.markets.map((max) => max.max));

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      {/* Navigation */}
      <div className="text-sm text-[#1D271F]">
        <ul className="flex">
          <li>
            <Link href={`/`} className="hover:underline">
              হোম
            </Link>
          </li>
          <li>
            <span className="ml-3 mr-2 text-gray-400">{">"}</span>
            <Link
              href={`/category/${data.category}`}
              className="hover:underline"
            >
              {data.categoryNameBn}
            </Link>
          </li>
          <li>
            <span className="ml-3 mr-2 text-gray-400">{">"}</span>
            <span>{data.nameBn}</span>
          </li>
        </ul>
      </div>

      {/* Top  */}
      <div className="p-5.25 bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl flex justify-between mt-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="px-5.5 py-5 bg-[#F0F5F0] rounded-xl text-4xl">
            {data.image}
          </div>
          <div>
            <h2 className="font-bold text-3xl leading-9">{data.nameBn}</h2>
            <p className="text-sm text-[rgba(29,39,31,0.7)] leading-5 ">
              প্রতি{" "}
              {data?.unit === "dozen"
                ? "ডজন"
                : data?.unit === "kg"
                  ? "কেজি"
                  : data?.unit === "litre"
                    ? "লিটার"
                    : data?.unit === "piece"
                      ? "পিছ"
                      : ""}{" "}
              • {data.categoryNameBn}{" "}
            </p>
            <p className="text-[#1D271F] text-sm leading-5">
              গতকালের তুলনায় আজ দাম{" "}
              {data.change.dir === "up" ? (
                <>
                  {" "}
                  <span className="font-semibold">বেড়েছে</span>{" "}
                  <span>
                    • {convertBanglaNum(Math.abs(data.yesterday - data.today))}{" "}
                    টাকা
                  </span>{" "}
                </>
              ) : data.change.dir === "down" ? (
                <>
                  {" "}
                  <span className="font-semibold">কমেছে</span>{" "}
                  <span>
                    • {convertBanglaNum(Math.abs(data.yesterday - data.today))}{" "}
                    টাকা
                  </span>{" "}
                </>
              ) : (
                <span className="font-semibold">অপরিবর্তিত </span>
              )}{" "}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="px-5 py-4 text-center bg-[#F0F5F0] rounded-xl">
          <p className="text-sm text-[#1d271fb3]">আজকের দাম</p>
          <h3 className="text-[#1D271F] text-4xl font-bold">
            {convertBanglaNum(data.today)}
          </h3>
          <p className="text-sm text-[#1d271fb3] mb-.75">
            {" "}
            টাকা/
            {data?.unit === "dozen"
              ? "ডজন"
              : data?.unit === "kg"
                ? "কেজি"
                : data?.unit === "litre"
                  ? "লিটার"
                  : data?.unit === "piece"
                    ? "পিছ"
                    : ""}
          </p>
          <p>
            {data.change.dir === "up" ? (
              <span className="flex  text-red-600 gap-1 px-2 py-1 rounded-2xl ">
                ▲{convertBanglaNum(Math.abs(data.change.pct))}
                {data.change.pct.toString().length === 1 && ".০"}%
              </span>
            ) : data.change.dir === "down" ? (
              <span className="flex gap-1 text-green-700 px-2 py-1 rounded-2xl ">
                ▼{convertBanglaNum(Math.abs(data.change.pct))}
                {data.change.pct.toString().length === 1 && ".০"}%
              </span>
            ) : (
              <span className="flex gap-2  px-2 py-1 rounded-2xl ">
                —{"  "}
                {convertBanglaNum(data.change.pct)}
                {data.change.pct.toString().length === 1 && ".০"}%
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Price Summary */}
      <div className="mt-6 bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl p-5.25 ">
        <h3 className="mb-3 font-semibold text-[18px] leading-7 text-[#1D271F] ">
          দামের সারসংক্ষেপ
        </h3>

        {/* Min max average price */}
        <div className="grid grid-cols-3 gap-3">
          {/* Low */}
          <div className="text-[#1D271F] px-6.25 py-4.25 border border-[#E1E8E1] rounded-xl">
            <p className="text-xs leading-4.5">সর্বনিম্ন দাম</p>
            <p className="text-[#1A9951]">
              {" "}
              <span className="text-2xl font-bold">
                {convertBanglaNum(minPrice)}
              </span>{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="text-xs leading-4.5">সবচেয়ে কম দামের বাজার</p>
          </div>
          {/* High */}
          <div className="text-[#1D271F] px-6.25 py-4.25 border border-[#E1E8E1] rounded-xl">
            <p className="text-xs leading-4.5">সর্বাধিক দাম</p>
            <p className="text-[#D03739]">
              {" "}
              <span className="text-2xl font-bold">
                {convertBanglaNum(maxPrice)}
              </span>{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="text-xs leading-4.5">সবচেয়ে বেশি দামের বাজার</p>
          </div>

          {/* Average */}
          <div className="text-[#1D271F] px-6.25 py-4.25 border border-[#E1E8E1] rounded-xl">
            <p className="text-xs leading-4.5">গড় দাম</p>
            <p className="text-[#1A9951]">
              {" "}
              <span className="text-2xl font-bold">
                {convertBanglaNum((minPrice + maxPrice) / 2)}
              </span>{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="text-xs leading-4.5">
              প্রতি{" "}
              {data?.unit === "dozen"
                ? "ডজন"
                : data?.unit === "kg"
                  ? "কেজি"
                  : data?.unit === "litre"
                    ? "লিটার"
                    : data?.unit === "piece"
                      ? "পিছ"
                      : ""}{" "}
              -এর হিসাবে
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-[#1D271F] text-[18px] font-semibold ">
            বাজারভিত্তিক আজকের দাম
          </h3>
          {/* Table */}
          <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>বাজার</th>
                  <th>বিভাগ</th>
                  <th>সর্বনিম্ন</th>
                  <th>সর্বাধিক</th>
                  <th>গড়</th>
                </tr>
              </thead>
              <tbody>
                {data.markets.map((item, idx) => (
                  <tr className="text-[#1D271F] text-sm" key={idx}>
                    <td>{item.market}</td>
                    <td>{item.division}</td>
                    <td>{convertBanglaNum(item.min)} টাকা</td>
                    <td>{convertBanglaNum(item.max)} টাকা</td>
                    <td className="font-semibold">
                      {convertBanglaNum((item.max + item.min) / 2)} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* All Product button */}
      <div className="mt-6 mb-18">
        <Link href={`/category/${data.category}`} className="btn">
          <span>{data.categoryIcon}</span> সব <span>{data.categoryNameBn}</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
