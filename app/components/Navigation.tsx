'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function Navigation({ userType }: { userType: string }) {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="flex justify-between items-center w-full mb-4">
      <h1 className="text-2xl font-bold dark:text-white">HemoChain - {userType.charAt(0).toUpperCase() + userType.slice(1)} Dashboard</h1>
      <div className="flex items-center space-x-4">
        <Button variant="outline" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Link href="/">
          <Button variant="outline">Logout</Button>
        </Link>
      </div>
    </nav>
  )
}

