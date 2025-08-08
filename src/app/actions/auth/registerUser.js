"use server";

import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    const result = await dbConnect("test_user").insertOne(payload);
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
