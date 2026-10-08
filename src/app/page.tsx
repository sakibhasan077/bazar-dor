import Banner from "@/components/banner/Banner";
import AllProduct from "@/components/products/AllProduct";
import DecreaseCost from "@/components/products/DecreaseCost";
import IncreaseCost from "@/components/products/IncreaseCost";
import { AllProductType } from "@/type";
import next from "next";

export default async function Home() {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products", {next: {revalidate: 80}});
  const data:AllProductType[] = await res.json();
  return (
    <main className="bg-[#F0F5F0]">
      <div className="w-full max-w-6xl px-4 py-7 mx-auto">
        <Banner></Banner>
        <IncreaseCost productData={data}></IncreaseCost>
        <DecreaseCost productData={data}></DecreaseCost>
        <AllProduct productData={data}></AllProduct>

      </div>
    </main>
  );
}
