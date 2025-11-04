import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">FitLife</Link>
        <nav className="space-x-4">
          <Link href="/" className="text-sm text-gray-700">Home</Link>
          <Link href="/dashboard" className="text-sm text-gray-700">Dashboard</Link>
          <Link href="/auth" className="text-sm text-indigo-600 font-medium">Sign in</Link>
        </nav>
      </div>
    </header>
  )
}
