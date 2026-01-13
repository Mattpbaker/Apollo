'use client'

export default function Footer() {
  return (
    <footer className="bg-apollo-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src="/apollo-logo.svg"
            alt="Apollo Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <h3 className="font-title text-2xl font-bold">Apollo</h3>
        </div>
        <p className="font-caption text-gray-400 mb-6">
          Building the future together
        </p>
        <p className="font-caption text-sm text-gray-500">
          © {new Date().getFullYear()} Apollo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
