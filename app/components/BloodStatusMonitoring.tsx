'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface BloodBag {
  donorId: string;
  donatedOn: string;
  expiresOn: string;
  consumptionStatus: 'Available' | 'Booked' | 'Used' | 'Expired';
}

interface BloodStatusMonitoringProps {
  bloodType: string;
  location: string;
  bloodBags: BloodBag[];
}

export default function BloodStatusMonitoring({ bloodType, location, bloodBags }: BloodStatusMonitoringProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2 text-pink-400">Blood Status Monitoring: {bloodType} at {location}</h3>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-slate-700">
            <TableHead className="text-pink-400">Donor ID</TableHead>
            <TableHead className="text-pink-400">Donated On</TableHead>
            <TableHead className="text-pink-400">Expires On</TableHead>
            <TableHead className="text-pink-400">Consumption Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bloodBags.map((bag, index) => (
            <TableRow key={index} className="border-b border-slate-800">
              <TableCell className="text-slate-200">{bag.donorId}</TableCell>
              <TableCell className="text-slate-200">{bag.donatedOn}</TableCell>
              <TableCell className="text-slate-200">{bag.expiresOn}</TableCell>
              <TableCell className="text-slate-200">{bag.consumptionStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

