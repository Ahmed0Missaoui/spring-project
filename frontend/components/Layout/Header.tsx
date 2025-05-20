"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Car, User, Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Detect if page is scrolled for transparent header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"
  
  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isHomePage 
          ? isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b" 
            : "bg-transparent" 
          : "bg-background border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Car className="h-6 w-6" />
            <span className="text-lg font-semibold">VoitureLocation</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/voitures" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname.startsWith("/voitures") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Voitures
          </Link>
          <Link 
            href="/tarifs" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname.startsWith("/tarifs") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Tarifs
          </Link>
          <Link 
            href="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname.startsWith("/contact") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ModeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">Se connecter</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">S'inscrire</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Tableau de bord</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-2">
            <Link 
              href="/voitures"
              className="block px-2 py-2 text-sm font-medium rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Voitures
            </Link>
            <Link 
              href="/tarifs"
              className="block px-2 py-2 text-sm font-medium rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link 
              href="/contact"
              className="block px-2 py-2 text-sm font-medium rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}