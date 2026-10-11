"use client"
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="max-w-xl">
        <p className="text-8xl font-extrabold tracking-tight text-[#05893e] sm:text-9xl">
          ৪০৪
        </p>

        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          পাতাটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
          পেজটি সরিয়ে ফেলা হতে পারে অথবা URL ভুল হতে পারে।
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-[#05893e] px-6 py-3 font-semibold text-white transition hover:bg-[#095a2c]"
          >
            হোম পেজে যান
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            পেছনে যান 
          </button>
        </div>
      </div>
    </main>
  );
}
