import dbConnect from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import React from "react";
import { getProducts } from "../actions/products/getProducts";

// export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  // const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env;
  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  // //, {cache: "force-cache"}
  // const data = await res.json();

  // if(data.length > 3){
  //     redirect("/");
  // }

  const data = await getProducts();

  return (
    <ul className="text-center mt-8">
      {data?.map((product) => {
        return <li key={product._id}>{product?.productName}</li>;
      })}
    </ul>
  );
}
