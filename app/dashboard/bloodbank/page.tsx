'use client'

import { useState } from 'react'
import Navigation from '@/app/components/Navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Lookup from '@/app/components/Lookup'

export default function BloodBankAdminDashboard() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Navigation userType="bloodbank" />
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="bg-slate-800">
          <CardTitle className="text-pink-400">Blood Bank Admin Dashboard</CardTitle>
          <CardDescription className="text-slate-400">Manage blood bank inventory and requests</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-start">
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('inventoryManagement')}>Inventory Management</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('donorManagement')}>Donor Management</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('orderManagement')}>Order Management</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('reports')}>Reports</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('contactHemoChainAdmin')}>Contact HemoChain Admin</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('lookup')}>Lookup</Button>
        </CardContent>
      </Card>

      {selectedOption === 'lookup' && <Lookup />}
      {/* Add other components for different options when they are implemented */}
    </div>
  )
}

