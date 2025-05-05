import Navigation from '@/app/components/Navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Lookup from '@/app/components/Lookup'

export default function AdminDashboard() {
  const selectedOption = 'lookup'; // Replace with actual logic to determine selectedOption
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Navigation userType="admin" />
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader className="bg-slate-800">
          <CardTitle className="text-pink-400">HemoChain Admin Dashboard</CardTitle>
          <CardDescription className="text-slate-400">Manage the HemoChain system</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-start">
          <Button className="m-1 hover:bg-green-500 hover:text-white">User Management</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white">Blood Inventory</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white">Transfusion Reports</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white">System Settings</Button>
          <Button className="m-1 hover:bg-green-500 hover:text-white">View Enquiries</Button>
          {selectedOption === 'lookup' && <Lookup />}
        </CardContent>
      </Card>
    </div>
  )
}

