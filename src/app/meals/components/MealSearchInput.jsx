"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MealSearchInput() {
//   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
     const searchQuery = { search }
     const urlQueryParam = new URLSearchParams(searchQuery)
     const url = `${pathname}?${urlQueryParam}`;
     router.push(url);
  }, [search]);
  return (
    <div className="text-center my-10">
      <input
        className="bg-gray-400 p-2 border-3 border-white w-92"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search meals"
      />
    </div>
  );
}
