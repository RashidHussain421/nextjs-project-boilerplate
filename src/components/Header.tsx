"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-700">
              Rice Export Ltd
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
