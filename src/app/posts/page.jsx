import Link from "next/link";
import React from "react";
import style from "./post.module.css"

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "All posts",
  description: "Loading JSON placeholder posts using server component",
};


export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-4 gap-10 p-10">
      {posts.map((post) => {
        return (
            <div key={post.id} className="mt-10 border-3 p-5 rounded-xl">
                <h1 className={`text-2xl font-bold ${style["post-title"]}`}>{post.id}. {post.title}</h1>
                <p className="mb-6">{post.body}</p>

                <Link className="text-blue-600 underline" href={`/posts/${post.id}`}>Details</Link>
            </div>
        );
      })}
    </div>
  );
}
