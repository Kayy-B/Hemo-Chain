'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface BloodInventoryItem {
  id: number;
  component: 'Platelets' | 'WBC' | 'RBC' | 'Plasma' | 'Whole Blood';
  collectedOn: string;
  donorId: string;
  bloodBagId: string;
  expiryDate: string;
  consumptionStatus: 'Available' | 'Booked' | 'Used' | 'Expired';
  location: string;
}

const mockInventory: BloodInventoryItem[] = [
  { id: 1, component: 'Whole Blood', collectedOn: '2023-06-01', donorId: 'D001', bloodBagId: 'BB001', expiryDate: '2023-06-42', consumptionStatus: 'Available', location: 'Room 101, Batch A' },
  { id: 2, component: 'Platelets', collectedOn: '2023-06-02', donorId: 'D002', bloodBagId: 'BB002', expiryDate: '2023-06-09', consumptionStatus: 'Booked', location: 'Room 102, Batch B' },
  { id: 3, component: 'RBC', collectedOn: '2023-06-03', donorId: 'D003', bloodBagId: 'BB003', expiryDate: '2023-07-15', consumptionStatus: 'Available', location: 'Room 103, Batch C' },
  { id: 4, component: 'Plasma', collectedOn: '2023-06-04', donorId: 'D004', bloodBagId: 'BB004', expiryDate: '2023-12-04', consumptionStatus: 'Available', location: 'Room 104, Batch D' },
  { id: 5, component: 'WBC', collectedOn: '2023-06-05', donorId: 'D005', bloodBagId: 'BB005', expiryDate: '2023-06-12', consumptionStatus: 'Used', location: 'Room 105, Batch E' },
];

export default function InventoryManagement() {
  const [inventory, setInventory] = useState<BloodInventoryItem[]>(mockInventory);
  const [componentFilter, setComponentFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'collectedOn' | 'expiryDate'>('collectedOn');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredAndSortedInventory = inventory
    .filter(item => componentFilter === 'All' || item.component === componentFilter)
    .sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const toggleSort = (column: 'collectedOn' | 'expiryDate') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Blood Inventory - X Hospital</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Select value={componentFilter} onValueChange={setComponentFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by component" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Components</SelectItem>
              <SelectItem value="Platelets">Platelets</SelectItem>
              <SelectItem value="WBC">WBC</SelectItem>
              <SelectItem value="RBC">RBC</SelectItem>
              <SelectItem value="Plasma">Plasma</SelectItem>
              <SelectItem value="Whole Blood">Whole Blood</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.No</TableHead>
              <TableHead>Component</TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => toggleSort('collectedOn')}>
                  Collected On {sortBy === 'collectedOn' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
              </TableHead>
              <TableHead>Donated By</TableHead>
              <TableHead>Blood Bag ID</TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => toggleSort('expiryDate')}>
                  Expiry Date {sortBy === 'expiryDate' && (sortOrder === 'asc' ? '↑' : '↓')}
                </Button>
              </TableHead>
              <TableHead>Consumption Status</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedInventory.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.component}</TableCell>
                <TableCell>{item.collectedOn}</TableCell>
                <TableCell>{item.donorId}</TableCell>
                <TableCell>{item.bloodBagId}</TableCell>
                <TableCell>{item.expiryDate}</TableCell>
                <TableCell>{item.consumptionStatus}</TableCell>
                <TableCell>{item.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

