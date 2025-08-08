"use server";

import dbConnect, { collectionName } from "@/lib/dbConnect";

export const postSingleProduct = async (postedData) => {
  try {
    const result = await dbConnect(collectionName.PRODUCTS).insertOne(postedData);
    revalidatePath("/products");
    return result;
  } catch (error) {
    console.log(error)
    return null
  }
};
