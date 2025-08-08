"use server";

import dbConnect, { collectionName } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    const result = await dbConnect(collectionName.TEST_USER).insertOne(payload);
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
