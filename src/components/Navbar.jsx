'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full backdrop-blur bg-white/80 dark:bg-black/40 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">MyApp</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/items">Items</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>


          <Link href="/register" className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 transition">
            Register
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded transition"
          >
            Login
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden border p-2 rounded">☰</button>
      </div>
    </nav>
  );
}
