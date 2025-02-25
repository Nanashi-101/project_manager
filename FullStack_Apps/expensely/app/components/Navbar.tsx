import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 text-xl">
      <h1 className="text-6xl text-blue-400 tracking-tighter font-semibold first-letter:text-7xl first-letter:text-blue-500 first-letter:font-bold hover:tracking-tight transition-all duration-300">
        <Link href="/home">Expensely</Link>
      </h1>
      <div className="text-3xl font-medium tracking-tighter cursor-pointer text-blue-500">
        <ul className="flex gap-12">
          <Link
            href="/home"
            className="hover:bg-blue-500 hover:text-white hover:scale-105 rounded-lg transition-all p-2 duration-300"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:bg-blue-500 hover:text-white hover:scale-105 rounded-lg transition-all p-2 duration-300"
          >
            Contact
          </Link>
          <Link
            href="/register"
            className="hover:bg-blue-500 hover:text-white hover:scale-105 rounded-lg transition-all p-2 duration-300"
          >
            Register
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
