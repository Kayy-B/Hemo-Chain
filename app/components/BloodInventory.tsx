'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BloodInventoryProps {
  initialBloodType?: string
  onBloodTypeChange?: (bloodType: string) => void
  onRowClick?: (bloodType: string, location: string) => void
}

const mockInventory = [
  { id: 1, bloodType: 'A+', location: 'City Hospital', price: '₹100', quantity: 5 },
  { id: 2, bloodType: 'A+', location: 'Central Clinic', price: '₹105', quantity: 3 },
  { id: 3, bloodType: 'A+', location: 'Metro Hospital', price: '₹110', quantity: 4 },
  { id: 4, bloodType: 'B-', location: 'Regional Medical Center', price: '₹120', quantity: 5 },
  { id: 5, bloodType: 'B-', location: 'University Hospital', price: '₹115', quantity: 3 },
  { id: 6, bloodType: 'O+', location: 'Downtown Medical Center', price: '₹95', quantity: 5 },
  { id: 7, bloodType: 'O+', location: 'Riverside Hospital', price: '₹100', quantity: 4 },
  { id: 8, bloodType: 'O-', location: 'Sunset Medical Center', price: '₹110', quantity: 3 },
  { id: 9, bloodType: 'O-', location: 'Lakeview Hospital', price: '₹115', quantity: 2 },
  { id: 10, bloodType: 'AB+', location: "St. Mary's Medical Center", price: '₹130', quantity: 5 },
  { id: 11, bloodType: 'AB+', location: 'Eastside Clinic', price: '₹135', quantity: 5 },
  { id: 12, bloodType: 'AB-', location: 'Redwood Health Center', price: '₹140', quantity: 8 },
  { id: 13, bloodType: 'AB-', location: 'Maplewood Hospital', price: '₹145', quantity: 8 },
]

export default function BloodInventory({ initialBloodType = "All", onBloodTypeChange, onRowClick }: BloodInventoryProps) {
  const [selectedBloodType, setSelectedBloodType] = useState<string>(initialBloodType)
  const [inventory, setInventory] = useState(mockInventory)

  useEffect(() => {
    // Simulating a fetch from a blockchain or database
    setInventory(mockInventory)
  }, [])

  const handleBloodTypeChange = (value: string) => {
    setSelectedBloodType(value)
    if (onBloodTypeChange) {
      onBloodTypeChange(value)
    }
  }

  const filteredInventory = selectedBloodType === "All" 
    ? inventory
    : inventory.filter(item => item.bloodType === selectedBloodType)

  return (
    <div>
      <div className="mb-4">
        <Select value={selectedBloodType} onValueChange={handleBloodTypeChange}>
          <SelectTrigger className="w-[180px] bg-slate-800 text-white border-slate-700">
            <SelectValue placeholder="Select blood type" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700">
            <SelectItem value="All">All Blood Types</SelectItem>
            <SelectItem value="O-">O -ve</SelectItem>
            <SelectItem value="O+">O +ve</SelectItem>
            <SelectItem value="A-">A -ve</SelectItem>
            <SelectItem value="A+">A +ve</SelectItem>
            <SelectItem value="B-">B -ve</SelectItem>
            <SelectItem value="B+">B +ve</SelectItem>
            <SelectItem value="AB-">AB -ve</SelectItem>
            <SelectItem value="AB+">AB +ve</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-b border-slate-700">
            {selectedBloodType === "All" && <TableHead className="text-pink-400">Blood Type</TableHead>}
            <TableHead className="text-pink-400">Hospital Name</TableHead>
            <TableHead className="text-pink-400">Price</TableHead>
            <TableHead className="text-pink-400">Available Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInventory.map((item) => (
            <TableRow 
              key={item.id} 
              className="border-b border-slate-800 cursor-pointer hover:bg-slate-800"
              onClick={() => onRowClick && onRowClick(item.bloodType, item.location)}
            >
              {selectedBloodType === "All" && <TableCell className="text-slate-200">{item.bloodType}</TableCell>}
              <TableCell className="text-slate-200">{item.location}</TableCell>
              <TableCell className="text-slate-200">{item.price}</TableCell>
              <TableCell className="text-slate-200">{item.quantity} units</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

