'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  ListOrdered,
  Tag,
  Monitor,
  Users,
  Home,
  Package,
  CreditCard,
  UserCheck,
  BarChart2,
  Settings,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Search,
  Bell,
  Menu,
  ChevronDown,
} from 'lucide-react'

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Orders', href: '/orders', icon: ListOrdered },
  {
    name: 'Products',
    icon: Tag,
    subItems: [
      { name: 'Product Lists', href: '/products/lists' },
      { name: 'Categories', href: '/products/categories' },
      { name: 'Suppliers', href: '/products/suppliers' },
    ],
  },
  { name: 'POS', href: '/pos', icon: Monitor },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Shops', href: '/shops', icon: Home },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Subscriptions', href: '/subscriptions', icon: CreditCard },
  { name: 'Employees', href: '/employees', icon: UserCheck },
  {
    name: 'Reports',
    icon: BarChart2,
    subItems: [
      { name: 'Income', href: '/reports/income' },
      { name: 'Expenses', href: '/reports/expenses' },
    ],
  },
]

const settingsItems = [
  { name: 'Global Settings', href: '/settings', icon: Settings },
  { name: 'Help/Support', href: '/help', icon: HelpCircle },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({})

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleDropdown = (name: string) => {
    setOpenDropdowns(prev => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-white text-gray-700 flex flex-col transition-all duration-300 ease-in-out",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          {sidebarOpen ? (
            <Link href="/" className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">SalesBox</span>
            </Link>
          ) : (
            <Package className="h-6 w-6 text-blue-600 mx-auto" />
          )}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navigationItems.map((item) => (
              <li key={item.name}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={cn(
                        "flex items-center justify-between w-full rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        openDropdowns[item.name] ? "bg-gray-100" : "hover:bg-gray-100"
                      )}
                    >
                      <div className="flex items-center">
                        <item.icon className={cn("h-5 w-5 flex-shrink-0", sidebarOpen ? "mr-3" : "mx-auto")} />
                        {sidebarOpen && <span>{item.name}</span>}
                      </div>
                      {sidebarOpen && <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdowns[item.name] && "transform rotate-180")} />}
                    </button>
                    {openDropdowns[item.name] && sidebarOpen && (
                      <ul className="mt-2 space-y-1 px-3">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                pathname === subItem.href
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-700 hover:bg-gray-100"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5 flex-shrink-0", sidebarOpen ? "mr-3" : "mx-auto")} />
                    {sidebarOpen && <span>{item.name}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className={cn("px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider", !sidebarOpen && "text-center")}>
              {sidebarOpen ? "Settings" : "..."}
            </h3>
            <ul className="mt-3 space-y-1 px-3">
              {settingsItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5 flex-shrink-0", sidebarOpen ? "mr-3" : "mx-auto")} />
                    {sidebarOpen && <span>{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="border-t p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="mx-auto"
          >
            {sidebarOpen ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-full md:w-[300px] bg-gray-100 border-none"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-blue-600 rounded-full"></span>
            </Button>
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="Cyril Kimbi" />
                <AvatarFallback>CK</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Cyril Kimbi</span>
              <ChevronRight className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}