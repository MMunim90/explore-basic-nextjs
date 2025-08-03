import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div>
        <h1>404 Not Found</h1>
        <Link href="/">Go back to home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
