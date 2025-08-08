"use server";

import dbConnect from "@/lib/dbConnect";

export const postSingleProduct = async (postedData) => {
  try {
    const result = await dbConnect("products").insertOne(postedData);
    revalidatePath("/products");
    return result;
  } catch (error) {
    console.log(error)
    return null
  }
};
