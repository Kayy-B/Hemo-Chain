'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const transfusionData = [
  { date: '2023-05-15', bloodBagId: 'BB-001', supervisedBy: 'Dr. John Doe', certificateId: 'CERT-001' },
  { date: '2023-04-22', bloodBagId: 'BB-002', supervisedBy: 'Dr. Jane Smith', certificateId: 'CERT-002' },
  { date: '2023-03-10', bloodBagId: 'BB-003', supervisedBy: 'Dr. Mike Johnson', certificateId: 'CERT-003' },
]

export default function TransfusionHistory() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transfusion History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Blood Bag ID</TableHead>
              <TableHead>Supervised by</TableHead>
              <TableHead>Beneficiary Certificate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transfusionData.map((row) => (
              <TableRow key={row.bloodBagId}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.bloodBagId}</TableCell>
                <TableCell>{row.supervisedBy}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" onClick={() => setSelectedCertificate(row.certificateId)}>
                        View Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Beneficiary Certificate</DialogTitle>
                        <DialogDescription>
                          Certificate details for transfusion on {row.date}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-2">
                        <p><strong>Certificate Number:</strong> {row.certificateId}</p>
                        <p><strong>Blood Bag ID:</strong> {row.bloodBagId}</p>
                        <p><strong>Date of Transfusion:</strong> {row.date}</p>
                        <p><strong>Supervised by:</strong> {row.supervisedBy}</p>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <p>Doctor's Signature</p>
                            <div className="w-40 h-20 border border-gray-300 mt-2"></div>
                          </div>
                          <div>
                            <p>Receiver's Signature</p>
                            <div className="w-40 h-20 border border-gray-300 mt-2"></div>
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

