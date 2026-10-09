import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const hindSiliguri = Hind_Siliguri({
  weight:["300", "400" , "500" , "600" , "700"],
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাজার দার - বাজারের সর্বশেষ তথ্য আপডেট পেতে এখানে আসুন। আপনি চাইলে বাজারের দরও আপডেট করতে পারবেন। আপডেট করার জন্য লগইন করতে হবে। আপনি চাইলে লগইন না করেও বাজারের সর্বশেষ তথ্য দেখতে পারবেন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header></Header>
        <main>
        {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
