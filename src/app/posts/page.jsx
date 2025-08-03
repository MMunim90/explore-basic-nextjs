import React from "react";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map((post) => {
        return (
            <div key={post.id} className="max-w-6xl mx-auto mt-10">
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <p className="mb-6">{post.body}</p>
            </div>
        );
      })}
    </div>
  );
}
