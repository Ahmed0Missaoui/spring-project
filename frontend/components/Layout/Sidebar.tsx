"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Car,
  CalendarDays,
  Users,
  CreditCard,
  Settings,
  Menu,
  X,
  Home,
  LogOut
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarItemProps {
  href: string
  icon: React.ReactNode
  title: string
  isActive: boolean
  onClick?: () => void
}

const SidebarItem = ({ href, icon, title, isActive, onClick }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
        isActive ? "bg-accent" : "transparent"
      )}
      onClick={onClick}
    >
      {icon}
      <span>{title}</span>
    </Link>
  )
}

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)
  const closeMobileMenu = () => setIsMobileOpen(false)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleMobileMenu}
      >
        {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-background border-r transition-transform duration-200 ease-in-out md:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="sticky top-0 z-10 flex h-16 items-center gap-2 border-b bg-background px-4">
            <Car className="h-6 w-6" />
            <span className="text-lg font-semibold">Car Rental</span>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            <SidebarItem
              href="/dashboard"
              icon={<Home className="h-4 w-4" />}
              title="Tableau de bord"
              isActive={pathname === "/dashboard"}
              onClick={closeMobileMenu}
            />
            <SidebarItem
              href="/dashboard/voitures"
              icon={<Car className="h-4 w-4" />}
              title="Voitures"
              isActive={pathname.startsWith("/dashboard/voitures")}
              onClick={closeMobileMenu}
            />
            <SidebarItem
              href="/dashboard/reservations"
              icon={<CalendarDays className="h-4 w-4" />}
              title="Réservations"
              isActive={pathname.startsWith("/dashboard/reservations")}
              onClick={closeMobileMenu}
            />
            <SidebarItem
              href="/dashboard/clients"
              icon={<Users className="h-4 w-4" />}
              title="Clients"
              isActive={pathname.startsWith("/dashboard/clients")}
              onClick={closeMobileMenu}
            />
            <SidebarItem
              href="/dashboard/paiements"
              icon={<CreditCard className="h-4 w-4" />}
              title="Paiements"
              isActive={pathname.startsWith("/dashboard/paiements")}
              onClick={closeMobileMenu}
            />
            <SidebarItem
              href="/dashboard/settings"
              icon={<Settings className="h-4 w-4" />}
              title="Paramètres"
              isActive={pathname.startsWith("/dashboard/settings")}
              onClick={closeMobileMenu}
            />
          </nav>
          <div className="border-t p-4">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogOut className="h-4 w-4" />
              <span>Déconnexion</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}