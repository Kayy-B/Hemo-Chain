'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const mockDonationHistory = [
  { date: '2023-05-15', bloodBagId: 'BB-001', supervisedBy: 'Dr. John Doe', certificateId: 'CERT-001' },
  { date: '2023-04-22', bloodBagId: 'BB-002', supervisedBy: 'Dr. Jane Smith', certificateId: 'CERT-002' },
  { date: '2023-03-10', bloodBagId: 'BB-003', supervisedBy: 'Dr. Mike Johnson', certificateId: 'CERT-003' },
]

export default function ViewDonationHistory() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  return (
    <Card className="mt-4 bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-pink-800 dark:text-pink-300">Donation History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="dark:bg-gray-700">
              <TableHead className="text-pink-800 dark:text-pink-300">Date</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Blood Bag ID</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Supervised by</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Donor Certificate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDonationHistory.map((row) => (
              <TableRow key={row.bloodBagId} className="dark:bg-gray-800 dark:text-white">
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.bloodBagId}</TableCell>
                <TableCell>{row.supervisedBy}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedCertificate(row.certificateId)} className="dark:bg-gray-700 dark:text-white">
                        View Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="dark:bg-gray-800 dark:text-white">
                      <DialogHeader>
                        <DialogTitle>Donor Certificate</DialogTitle>
                        <DialogDescription>
                          Certificate details for donation on {row.date}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-2">
                        <p><strong>Certificate Number:</strong> {row.certificateId}</p>
                        <p><strong>Blood Bag ID:</strong> {row.bloodBagId}</p>
                        <p><strong>Date of Donation:</strong> {row.date}</p>
                        <p><strong>Supervised by:</strong> {row.supervisedBy}</p>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <p>Doctor's Signature</p>
                            <div className="w-40 h-20 border border-gray-300 mt-2 dark:border-gray-600"></div>
                          </div>
                          <div>
                            <p>Donor's Signature</p>
                            <div className="w-40 h-20 border border-gray-300 mt-2 dark:border-gray-600"></div>
                          </div>
                        </div>
                      </div>
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

