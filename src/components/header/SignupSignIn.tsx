"use client";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import Signout from "./Signout";
import NavbarSkeleton from "./NavbarSkeleton";


const SignupSignIn = () => {
  const {data,isPending} = useSession();
  const users = data?.user;
  if(isPending){
    return <NavbarSkeleton></NavbarSkeleton>
  }
  return (
    <>
      {users ? (
        <div  className="pr-5 xl:pr-0"> <Signout userData={users}></Signout> </div>
      ) : (
        <div className="pr-5 xl:pr-0">
          <Link href={"/sign-in"}>
            <button className="btn bg-transparent border-0 hover:shadow-none hover:bg-gray-300 text-xs sm:text-sm">
              {" "}
              সাইন ইন{" "}
            </button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="btn bg-[#05893E] hover:bg-[#057c39] text-white ml-1 text-xs sm:text-sm">
              {" "}
              সাইন আপ{" "}
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default SignupSignIn;
