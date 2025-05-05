'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Checkpoint {
  label: string;
  timestamp: string;
  completed: boolean;
}

interface Enquiry {
  ticketNumber: string;
  submittedOn: string;
  checkpoints: Checkpoint[];
  solved: boolean;
}

const mockEnquiries: Enquiry[] = [
  {
    ticketNumber: 'ENQ001',
    submittedOn: '2023-06-01 10:00 AM',
    checkpoints: [
      { label: 'Submitted', timestamp: '2023-06-01 10:00 AM', completed: true },
      { label: 'Viewed by HemoChain Admin', timestamp: '2023-06-01 11:30 AM', completed: true },
      { label: 'Escalated', timestamp: '2023-06-01 02:00 PM', completed: true },
      { label: 'Action Taken', timestamp: '2023-06-02 09:15 AM', completed: true },
    ],
    solved: false,
  },
  {
    ticketNumber: 'ENQ002',
    submittedOn: '2023-06-03 09:00 AM',
    checkpoints: [
      { label: 'Submitted', timestamp: '2023-06-03 09:00 AM', completed: true },
      { label: 'Viewed by HemoChain Admin', timestamp: '2023-06-03 10:30 AM', completed: true },
      { label: 'Escalated', timestamp: '', completed: false },
      { label: 'Action Taken', timestamp: '', completed: false },
    ],
    solved: false,
  },
];

export default function TrackEnquiries() {
  const [searchTicket, setSearchTicket] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [isSolved, setIsSolved] = useState<'yes' | 'no'>('no');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = mockEnquiries.find(enq => enq.ticketNumber === searchTicket);
    if (found) {
      setSelectedEnquiry(found);
      setIsSolved(found.solved ? 'yes' : 'no');
    }
  };

  return (
    <Card className="mt-4 bg-slate-900">
      <CardHeader>
        <CardTitle className="text-pink-400">Track My Enquiries</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1">
            <Input
              placeholder="Enter ticket number"
              value={searchTicket}
              onChange={(e) => setSearchTicket(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white"
            />
          </div>
          <Button type="submit" className="bg-white text-slate-900 hover:bg-slate-200">Search</Button>
        </form>

        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-700">
              <TableHead className="text-pink-400">Ticket Number</TableHead>
              <TableHead className="text-pink-400">Submitted On</TableHead>
              <TableHead className="text-pink-400">Track Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockEnquiries.map((enquiry) => (
              <TableRow key={enquiry.ticketNumber} className="border-b border-slate-800">
                <TableCell className="text-slate-200">{enquiry.ticketNumber}</TableCell>
                <TableCell className="text-slate-200">{enquiry.submittedOn}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        onClick={() => setSelectedEnquiry(enquiry)}
                        className="bg-black text-white hover:bg-slate-800"
                      >
                        View Status
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-900 text-white">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold">
                          Enquiry Status: {enquiry.ticketNumber}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="relative ml-4">
                          {enquiry.checkpoints.map((checkpoint, index) => (
                            <div key={index} className="flex items-start mb-8 relative">
                              <div className="absolute -left-4 mt-1">
                                <div className={`w-3 h-3 rounded-full ${checkpoint.completed ? 'bg-green-500' : 'bg-slate-600'}`} />
                              </div>
                              {index < enquiry.checkpoints.length - 1 && (
                                <div 
                                  className={`absolute -left-3 w-0.5 h-full ${checkpoint.completed ? 'bg-green-500' : 'bg-slate-600'}`} 
                                  style={{top: '0.75rem'}}
                                />
                              )}
                              <div className="ml-4">
                                <p className="font-medium">{checkpoint.label}</p>
                                <p className="text-sm text-slate-400">
                                  {checkpoint.timestamp || 'Pending'}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-2 border-t border-slate-800 pt-4">
                          <Label className="text-slate-200">Is your enquiry solved?</Label>
                          <RadioGroup
                            value={isSolved}
                            onValueChange={(value: 'yes' | 'no') => setIsSolved(value)}
                            className="flex gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="yes" />
                              <Label htmlFor="yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="no" />
                              <Label htmlFor="no">No</Label>
                            </div>
                          </RadioGroup>
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

