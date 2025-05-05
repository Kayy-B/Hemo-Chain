'use client'

import { useState } from 'react'
import Navigation from '@/app/components/Navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import InventoryManagement from '@/app/components/InventoryManagement'
import RequestBloodUnits from '@/app/components/RequestBloodUnits'
import TrackOrders from '@/app/components/TrackOrders'
import ContactHemoChainAdmin from '@/app/components/ContactHemoChainAdmin'
import ContactBloodBank from '@/app/components/ContactBloodBank'
import Lookup from '@/app/components/Lookup'

export default function HospitalAdminDashboard() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Navigation userType="hospital" />
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="bg-slate-800">
          <CardTitle className="text-pink-400">Hospital Admin Dashboard</CardTitle>
          <CardDescription className="text-slate-400">Manage hospital blood inventory and requests</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-start">
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('inventoryManagement')}>Inventory Management</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('requestBloodUnits')}>Request Blood Units</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('trackOrders')}>Track Orders</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('contactHemoChainAdmin')}>Contact HemoChain Admin</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('contactBloodBank')}>Contact Blood Bank</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white" onClick={() => setSelectedOption('lookup')}>Lookup</Button>
        </CardContent>
      </Card>

      {selectedOption === 'inventoryManagement' && <InventoryManagement />}
      {selectedOption === 'requestBloodUnits' && <RequestBloodUnits />}
      {selectedOption === 'trackOrders' && <TrackOrders />}
      {selectedOption === 'contactHemoChainAdmin' && <ContactHemoChainAdmin />}
      {selectedOption === 'contactBloodBank' && <ContactBloodBank />}
      {selectedOption === 'lookup' && <Lookup />}
    </div>
  )
}

