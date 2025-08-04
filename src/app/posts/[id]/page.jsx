import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

export default async function SinglePost({ params }) {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
  return (
    <div className="w-11/12 mx-auto mt-10">

      {/* <p>{JSON.stringify(singlePost)}</p> */}
      <p>User Id - {singlePost.userId}</p>
      <h1 className="text-2xl font-bold">{singlePost.title}</h1>
      <p>{singlePost.body}</p>
    </div>
  );
}
