"use client";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import Signout from "./Signout";


const SignupSignIn = () => {
  const {data} = useSession();
  const users = data?.user;
  console.log(users);
  return (
    <>
      {users ? (
        <div> <Signout userData={users}></Signout> </div>
      ) : (
        <div>
          <Link href={"/sign-in"}>
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
      )}
    </>
  );
};

export default SignupSignIn;
