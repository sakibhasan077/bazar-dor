// import { connection } from "next/server";

import Link from "next/link";
import Navbar from "./Navbar";

const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
const Header = () => {
  return (
    <header className="bg-[#F0F0F5] ">
      <div className="max-w-6xl w-full mx-auto sticky top-0">
        {/* Top Header */}
        <div className="flex justify-between items-center text-[#1D271F]">
          {/* Logo and Date */}
          <div className="flex items-center gap-2 px-4 py-3">
            <div className="px-3 py-1.5 bg-[#05893E] rounded-md">
              <span className="text-[18px]">🛒</span>
            </div>
            <div>
              <Link href={"/"}>
                <h2 className="text-[20px] font-bold leading-7">বাজার দর</h2>
                <p className="text-[14px] text-[#111713] leading-4">{date}</p>
              </Link>
            </div>
          </div>
          {/* Sigh In / Sigh Up Button */}
          <div>
            <Link href={"/"}>
              <button className="btn bg-transparent border-0 hover:shadow-none hover:bg-gray-300">
                {" "}
                সাইন ইন{" "}
              </button>
            </Link>
            <Link href={"/"}>
              <button className="btn bg-[#05893E] hover:bg-[#057c39] text-white ml-1"> সাইন আপ </button>
            </Link>
          </div>
        </div>
        {/* Navigation */}
        <Navbar></Navbar>
      </div>
      <div>
        
      </div>
    </header>
  );
};

export default Header;
