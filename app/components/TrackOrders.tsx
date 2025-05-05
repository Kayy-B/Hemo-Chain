'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Phone, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Order {
  invoiceNumber: string;
  sourceAddress: string;
  deliveryAddress: string;
  paymentMode: string;
  status: {
    checkpoint: string;
    completed: boolean;
    timestamp?: string;
    estimatedTime?: string;
  }[];
}

const mockOrders: Order[] = [
  {
    invoiceNumber: 'INV001',
    sourceAddress: 'Blood Bank A, 123 Main St, City, Country',
    deliveryAddress: 'Hospital X, 456 Health Ave, City, Country',
    paymentMode: 'Credit Card',
    status: [
      { checkpoint: 'Order Placed', completed: true, timestamp: '2023-06-10 09:00 AM' },
      { checkpoint: 'Processing', completed: true, timestamp: '2023-06-10 10:30 AM' },
      { checkpoint: 'Shipped', completed: true, timestamp: '2023-06-10 02:00 PM' },
      { checkpoint: 'Out for Delivery', completed: false, estimatedTime: '2023-06-11 10:00 AM' },
      { checkpoint: 'Delivered', completed: false, estimatedTime: '2023-06-11 02:00 PM' },
    ],
  },
  // More mock orders...
];

export default function TrackOrders() {
  const [searchQuery, setSearchQuery] = useState('');
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const filteredOrders = orders.filter(order => 
    order.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.sourceAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.deliveryAddress.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="mt-4 bg-slate-900">
      <CardHeader>
        <CardTitle className="text-pink-400">Track Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <Label htmlFor="search" className="sr-only">Search orders</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                id="search"
                placeholder="Search by invoice number or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 bg-slate-800 border-slate-700 text-white"
              />
            </div>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-700">
              <TableHead className="text-pink-400">Invoice Number</TableHead>
              <TableHead className="text-pink-400">Source Address</TableHead>
              <TableHead className="text-pink-400">Delivery Address</TableHead>
              <TableHead className="text-pink-400">Payment Mode</TableHead>
              <TableHead className="text-pink-400">Tracking</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.invoiceNumber} className="border-b border-slate-800">
                <TableCell className="text-slate-200">{order.invoiceNumber}</TableCell>
                <TableCell className="text-slate-200">{order.sourceAddress}</TableCell>
                <TableCell className="text-slate-200">{order.deliveryAddress}</TableCell>
                <TableCell className="text-slate-200">{order.paymentMode}</TableCell>
                <TableCell className="text-slate-200">
                  <div className="space-y-2">
                    {order.status.map((step, index) => (
                      <div key={index} className={`flex items-center ${step.completed ? 'text-green-500' : 'text-slate-400'}`}>
                        <div className={`w-3 h-3 rounded-full mr-2 ${step.completed ? 'bg-green-500' : 'bg-slate-600'}`} />
                        <span>{step.checkpoint}</span>
                        <span className="ml-2 text-sm">
                          {step.completed ? step.timestamp : `Est. ${step.estimatedTime}`}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-2" variant="outline">
                    <Phone className="mr-2 h-4 w-4" /> Call Delivery Person
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

