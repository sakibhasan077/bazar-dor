"use client";
import { signIn, signUp } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
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
import Link from "next/link";
import { useState } from "react";

interface SignUpDataType {
  email: string;
  password: string;
}

const SighUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  // handler function
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resData = Object.fromEntries(
      formData.entries(),
    ) as unknown as SignUpDataType;
    const { data, error } = await signIn.email({
      email: resData.email,
      password: resData.password,
      callbackURL: "/",
      rememberMe: true,
    });
  };
  // Google provider
  const signInGoogle = async () => {
    const googleData = await signIn.social({
      provider: "google",
    });
  };
  // Github Provider
  const signInGithub = async () => {
    const githubData = await signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="flex justify-center w-full max-w-6xl mx-auto mt-10 mb-15">
      <div className="mx-4">
        <h2 className="text-center text-2xl font-bold leading-8 text-[#1D271F]">
          সাইন ইন
        </h2>
        <p className="text-center text-[rgba(29,39,31,0.69)] text-sm leading-5 mt-1 mb-6">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।{" "}
        </p>
        <div className="bg-[#FAFCFA] border border-[#E1E8E1] p-6 rounded-2xl">
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            <TextField
              name="email"
              type="email"
              isRequired
              validate={(value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                  ? null
                  : "অনুগ্রহ করে একটি বৈধ ইমেল ঠিকানা লিখুন।"
              }
            >
              <Label>ইমেইল</Label>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border px-4 py-2"
              />
              <FieldError />
            </TextField>
            {/* Password */}
            <TextField
              name="password"
              isRequired
              validate={(value) => {
                if (value.length < 8) {
                  return "পাসওয়ার্ডটি অবশ্যই অন্তত ৮ অক্ষরের হতে হবে।";
                }
                if (!/[A-Z]/.test(value)) {
                  return "পাসওয়ার্ডে অবশ্যই একটি বড় হাতের অক্ষর থাকতে হবে।";
                }
                if (!/[0-9]/.test(value)) {
                  return "পাসওয়ার্ডে অবশ্যই একটি সংখ্যা থাকতে হবে।";
                }
                return null;
              }}
            >
              <Label>পাসওয়ার্ড</Label>{" "}
              <InputGroup className={"flex justify-between"}>
                {" "}
                <InputGroup.Input
                  className="w-full rounded-lg px-4 py-2"
                  placeholder="কমপক্ষে ৮ টি অক্ষর"
                  name="password"
                  type={showPassword ? "text" : "password"}
                />{" "}
                <InputGroup.Suffix className="pr-2">
                  {" "}
                  <Button
                    isIconOnly
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    size="sm"
                    variant="ghost"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {" "}
                    {showPassword ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}{" "}
                  </Button>{" "}
                </InputGroup.Suffix>{" "}
              </InputGroup>
              <FieldError />{" "}
            </TextField>
            <div className="text-center">
              <Button
                type="submit"
                className={
                  " text-white btn bg-[#05893E] rounded-2xl block w-full"
                }
              >
                সাইন ইন
              </Button>
            </div>
          </Form>
          {/* অথবা */}
          <div className="relative flex py-5 items-center">
            <div className="grow border-t border-slate-300"></div>
            <span className="shrink mx-4 text-slate-600 text-base md:text-lg font-medium px-2">
              অথবা
            </span>
            <div className="grow border-t border-slate-300"></div>
          </div>

          {/* google sign up  */}
          <div className="flex gap-2">
            <button
              onClick={signInGoogle}
              className="btn bg-transparent flex items-center"
            >
              {" "}
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path d="M27.39,13.82H16.21v4.63h6.44c-.6,2.95-3.11,4.64-6.44,4.64a7.09,7.09,0,0,1,0-14.18,7,7,0,0,1,4.42,1.58L24.12,7a12,12,0,1,0-7.91,21c6,0,11.45-4.36,11.45-12A9.56,9.56,0,0,0,27.39,13.82Z" />
                </svg>
              </span>{" "}
              Google দিয়ে চালিয়ে যান
            </button>
            <button onClick={signInGithub} className="btn bg-transparent">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </span>
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <div className="text-center mt-5">
            <p>
              অ্যাকাউন্ট নেই? {" "}
              <Link href={"/sign-up"} className="text-[#05893E]">
                সাইন আপ করুন
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-6">
          <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
        </div>
      </div>
    </div>
  );
};

export default SighUpPage;
