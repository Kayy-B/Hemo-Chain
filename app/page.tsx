'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
  const [userType, setUserType] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (userType) {
      router.push(`/dashboard/${userType}`)
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-pink-100 dark:bg-pink-900">
      <div className="w-[450px] relative">
        <Card className="w-full bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-pink-600 dark:text-pink-300">Welcome to HemoChain</CardTitle>
            <CardDescription className="dark:text-gray-300">Login to access the blood donation system</CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <div className="relative">
              <Select onValueChange={setUserType}>
                <SelectTrigger 
                  className="w-full bg-white dark:bg-gray-700 dark:text-white border-gray-200 dark:border-gray-600"
                >
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent 
                  position="popper" 
                  className="w-full bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  align="center"
                  sideOffset={4}
                >
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="receiver">Receiver</SelectItem>
                  <SelectItem value="donor">Donor</SelectItem>
                  <SelectItem value="admin">HemoChain Admin</SelectItem>
                  <SelectItem value="hospital">Hospital Admin</SelectItem>
                  <SelectItem value="bloodbank">Blood Bank Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleLogin} 
              disabled={!userType} 
              className="w-full bg-pink-600 hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-800 text-white"
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

