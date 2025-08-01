import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex gap-5">
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/services'>
            <li>Services</li>
          </Link>
          <Link href='/about'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
