'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface Enquiry {
  id: string;
  from: string;
  name: string;
  category: string;
  date: string;
  message: string;
}

const mockEnquiries: Enquiry[] = [
  { id: 'ENQ001', from: 'HemoChain Admin', name: 'Admin User', category: 'Policy Update', date: '2023-06-01', message: 'New policy regarding blood donation age limits.' },
  { id: 'ENQ002', from: 'Patient', name: 'John Doe', category: 'Medical Advice', date: '2023-06-02', message: 'Question about post-donation care.' },
  { id: 'ENQ003', from: 'Blood Bank', name: 'City Blood Bank', category: 'Inventory', date: '2023-06-03', message: 'Urgent need for O- blood type.' },
  { id: 'ENQ004', from: 'Hospital', name: 'General Hospital', category: 'Request', date: '2023-06-04', message: 'Request for specialist consultation.' },
];

export default function ReplyEnquiries() {
  const [filter, setFilter] = useState('All');
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [reply, setReply] = useState('');

  const filteredEnquiries = filter === 'All' ? mockEnquiries : mockEnquiries.filter(enquiry => enquiry.from === filter);

  const handleReply = () => {
    console.log(`Replied to ${selectedEnquiry?.id}: ${reply}`);
    setReply('');
    setSelectedEnquiry(null);
  };

  return (
    <Card className="mt-4 bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-pink-800 dark:text-pink-300">Reply Enquiries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select onValueChange={setFilter}>
            <SelectTrigger className="w-[200px] dark:bg-gray-700 dark:text-white">
              <SelectValue placeholder="Filter by sender" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-700">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="HemoChain Admin">HemoChain Admin</SelectItem>
              <SelectItem value="Patient">Patient</SelectItem>
              <SelectItem value="Blood Bank">Blood Bank</SelectItem>
              <SelectItem value="Hospital">Hospital</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-pink-800 dark:text-pink-300">From</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Name</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Category</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Date</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Reply</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEnquiries.map((enquiry) => (
              <TableRow key={enquiry.id}>
                <TableCell>{enquiry.from}</TableCell>
                <TableCell>{enquiry.name}</TableCell>
                <TableCell>{enquiry.category}</TableCell>
                <TableCell>{enquiry.date}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedEnquiry(enquiry)}>
                        Reply
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="dark:bg-gray-800 dark:text-white">
                      <DialogHeader>
                        <DialogTitle>Reply to Enquiry</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p><strong>From:</strong> {enquiry.name} ({enquiry.from})</p>
                        <p><strong>Category:</strong> {enquiry.category}</p>
                        <p><strong>Message:</strong> {enquiry.message}</p>
                        <Textarea
                          placeholder="Type your reply here..."
                          value={reply}
                          onChange={(e) => setReply(e.target.value)}
                          className="dark:bg-gray-700 dark:text-white"
                        />
                        <Button onClick={handleReply}>Send Reply</Button>
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

