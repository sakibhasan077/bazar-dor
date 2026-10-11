"use client";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProfileDataType {
  name: string;
}

const ProfilePage = () => {

  let router = useRouter();
  // Session
  const { data } = useSession();
  const myUser = data?.user;

  // On Submit Event for Update Profile
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resData = Object.fromEntries(
      formData.entries(),
    ) as unknown as ProfileDataType;
    let data = await updateUser({
      name: resData.name,
    });
  };

  // SignOut
  const handleSignout = async ()=>{
    await signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/sign-in"); // redirect to login page
    },
  },})
  }
  return (
    <div className="flex justify-center w-screen sm:w-full max-w-6xl mx-auto mt-10 mb-15">
      <div className="mx-4">
        <h2 className=" text-2xl font-bold leading-8 text-[#1D271F]">
          আমার প্রোফাইল
        </h2>
        <p className=" text-[rgba(29,39,31,0.69)] text-sm leading-5 mt-1 mb-6">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
        {/* Profile Div */}
        <div className="bg-[#FAFCFA] border border-[#E1E8E1] p-6 rounded-2xl my-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-between items-start sm:items-center">
            {/* left */}
            <div className="flex gap-4 justify-between items-center">
              <div className="w-18 ">
                <Image src={myUser?.image as string || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqxgjkVgUxut0o1LXbvCBbtmfAxVUK2MOjcVeSgbIwQ&s=10"} alt="User Image" width={100} height={100} className="rounded-xl"></Image>
              </div>
              <div>
                <h4 className="text-xl font-semibold leading-7 text-[#1D271F]">{myUser?.name}</h4>
                <p className="text-[rgba(29,39,31,0.7)]">{myUser?.email}</p>
              </div>
            </div>
            {/* right */}
            <div className="px-4.5 py-2.5 text-[#D03739] border border-[#D03739] rounded-[10px] font-semibold cursor-pointer text-sm" onClick={handleSignout}>↩ &nbsp; সাইন আউট</div>
          </div>
        </div>

        {/* Profile Update Div */}
        <div className="bg-[#FAFCFA] border border-[#E1E8E1] p-6 rounded-2xl">
          <h3 className="text-[18px] font-semibold leading-7 mb-3 text-[#1D271F]">
            নাম পরিবর্তন করুন
          </h3>
          <Form className="flex w-90 sm:w-130 p-6 flex-col gap-4 " onSubmit={onSubmit}>
            <TextField
              name="name"
              isRequired
              validate={(value) =>
                value.trim().length < 3
                  ? "নামটি অবশ্যই অন্তত ৩টি অক্ষরের হতে হবে।"
                  : null
              }
            >
              <Label>নাম</Label>
              <Input
                name="name"
                placeholder="যেমন: রহিম উদ্দিন"
                className="w-full rounded-lg border px-4 py-2"
              />
              <FieldError />
            </TextField>
            <div className="text-center">
              <Button
                type="submit"
                className={
                  " text-white btn bg-[#05893E] rounded-2xl block w-full"
                }
              >
                আপডেট
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
