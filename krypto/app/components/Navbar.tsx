import Link from "next/link";
import React, { useEffect, useState } from "react";
const Navbar = () => {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-12 max-w-7xl mx-auto px-4 md:px-8">
        <div className="col-span-3">
          <h1 className="text-4xl text-primary font-extrabold">
            <span className="text-5xl roboto-900">€</span>rypto<span className="varela">.</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Navbar;


{/* <div className="flex justify-between items-center h-24 mx-auto max-w-7xl px-4 text-white">
  <h1 className="w-full text-5xl text-primary font-bold pacifico">€rypto.</h1>
  <ul className="hidden md:flex items-center">
    <li className="p-3 hover:text-primary hover:scale-110 transition-all cursor-pointer text-md varela font-semibold">
      <Link href="/">Home</Link>
    </li>
    <li className="p-3 hover:text-primary hover:scale-110 transition-all cursor-pointer text-md varela font-semibold">
      <Link href="/">Company</Link>
    </li>
    <li className="p-3 hover:text-primary hover:scale-110 transition-all cursor-pointer text-md varela font-semibold">
      <Link href="/">Resources</Link>
    </li>
    <li className="p-3 hover:text-primary hover:scale-110 transition-all cursor-pointer text-md varela font-semibold">
      <Link href="/">About</Link>
    </li>
    <li className="p-3 hover:text-primary hover:scale-110 transition-all cursor-pointer text-md varela font-semibold">
      <Link href="/">Contact</Link>
    </li>
  </ul>
</div>; */}