import React from 'react';
import Link from "next/link";

export default function Header() {
  return (
  <nav className="flex justify-between items-center px-4 py-2">
    <div className="text-xl font-bold">
      Header
    </div>
    <div className="space-x-4">
      <Link href="/" className='text-gray-600 hover:text-gray-900'>Home</Link>
      <Link href="/blog" className='text-gray-600 hover:text-gray-900'>Blog</Link>
      <Link href="/about" className='text-gray-600 hover:text-gray-900'>About</Link>
    </div>
  </nav>
  )
}
