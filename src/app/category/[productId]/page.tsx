
import CategoryData from "@/components/categoryProduct/CategoryProduct";
import { AllProductType } from "@/type";


const categoryProduct = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${productId}`,
    { next: { revalidate: 100 } },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data: AllProductType[] = await res.json();
  // console.log(data);


  return (
    <>
      <CategoryData data = {data}></CategoryData>
    </>
  );
};



export default categoryProduct;
