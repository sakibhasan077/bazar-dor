import Link from "next/link";
import Navbar from "./Navbar";
import Marquee from "./Marquee";

const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
const Header = () => {
  return (
    <header className="bg-[#fafcfa] ">
      <div className="fixed top-0 w-full bg-[#fafcfa] z-50 border-b border-[#E1E8E1]">
        <div className="max-w-6xl w-full mx-auto bg-[#fafcfa]">
          {/* Top Header */}
          <div className="flex justify-between items-center text-[#1D271F]">
            {/* Logo and Date */}
              <Link href={"/"}>
            <div className="flex items-center gap-2 px-4 py-3">
                <div className="px-3 py-1.5 bg-[#05893E] rounded-md">
                  <span className="text-[18px]">🛒</span>
                </div>
                <div>
                  <h2 className="text-[20px] font-bold leading-7">বাজার দর</h2>
                  <p className="text-[14px] text-[#111713] leading-4">{date}</p>
                </div>
            </div>
              </Link>
            {/* Sigh In / Sigh Up Button */}
            <div>
              <Link href={"/"}>
                <button className="btn bg-transparent border-0 hover:shadow-none hover:bg-gray-300">
                  {" "}
                  সাইন ইন{" "}
                </button>
              </Link>
              <Link href={"/sign-up"}>
                <button className="btn bg-[#05893E] hover:bg-[#057c39] text-white ml-1">
                  {" "}
                  সাইন আপ{" "}
                </button>
              </Link>
            </div>
          </div>
          {/* Navigation */}
          <Navbar></Navbar>
        </div>
      </div>
      <Marquee></Marquee>
    </header>
  );
};

export default Header;
