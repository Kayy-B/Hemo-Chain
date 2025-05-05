'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const mockBloodBanks = [
  { id: 1, name: 'Central Blood Bank', address: '123 Main St, City, Country', phone: '+1 234 567 8901' },
  { id: 2, name: 'City Blood Center', address: '456 Oak Ave, Town, Country', phone: '+1 234 567 8902' },
  { id: 3, name: 'Regional Blood Services', address: '789 Pine Rd, Village, Country', phone: '+1 234 567 8903' },
];

export default function ContactBloodBank() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBloodBanks = mockBloodBanks.filter(bank => 
    bank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bank.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Contact Blood Bank</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Search blood banks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBloodBanks.map((bank) => (
              <TableRow key={bank.id}>
                <TableCell>{bank.name}</TableCell>
                <TableCell>{bank.address}</TableCell>
                <TableCell>{bank.phone}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Send Enquiry</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Send Enquiry to {bank.name}</DialogTitle>
                      </DialogHeader>
                      <form className="space-y-4">
                        <Input placeholder="Subject" />
                        <textarea
                          className="w-full h-32 p-2 border rounded"
                          placeholder="Your message..."
                        ></textarea>
                        <Button type="submit">Send</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

