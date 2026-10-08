import Image from "next/image";
import Link from "next/link";

const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
const Banner = () => {
  return (
    <div className="bg-[#FAFCFA] border-2 border-[#E1E8E1] rounded-2xl px-4  flex justify-between items-center">
      {/* Banner Content */}
      <div>
        <p className="bg-[rgba(5,137,62,0.15)] text-[#05893E] w-fit font-medium py-1 px-3 rounded-full mt-10 mb-2">{date}</p>
        <h1 className="text-4xl font-bold leading-11.25 mb-5 text-[#1D271F]">আজকের বাজারের দাম এক নজরে</h1>
        <p className="text-[rgba(29,39,31,0.7)] text-[18px]">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, <br /> সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
        <div className="mt-7 mb-20 ">
        <Link href={"#allProduct"} className="btn py-2.5 px-6 inline-block bg-[#05893E] text-white font-medium">সব পণ্য দেখুন</Link>

        </div>
      </div>
      {/* Banner Image */}
      <div>
        <Image src={"/assets/bazar-hero.png"} alt="Banner Image" height={500} width={500} className="h-67 w-auto"></Image>
      </div>
    </div>
  );
};

export default Banner;