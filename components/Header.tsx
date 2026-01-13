'use client'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 py-4 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/apollo-logo.svg"
            alt="Apollo Logo"
            width={50}
            height={50}
            className="w-12 h-12"
          />
          <h1 className="font-title text-3xl font-bold text-apollo-black">
            Apollo
          </h1>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#mission" className="font-subtitle text-lg hover:text-apollo-blue transition-colors">
            Mission
          </a>
          <a href="#targets" className="font-subtitle text-lg hover:text-apollo-blue transition-colors">
            Targets
          </a>
          <a href="#members" className="font-subtitle text-lg hover:text-apollo-blue transition-colors">
            Members
          </a>
          <a href="#ventures" className="font-subtitle text-lg hover:text-apollo-blue transition-colors">
            Ventures
          </a>
          <a href="#cta" className="font-subtitle text-lg hover:text-apollo-blue transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
