import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <img
              src="/logo-placeholder.png"
              alt="HABOT"
              className="h-8 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Find Suppliers
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Find Service Tags
            </a>
            <Button className="text-emerald-600 bg-emerald-50 border-emerald-200 rounded hover:bg-emerald-100">
              Login / Sign Up
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}