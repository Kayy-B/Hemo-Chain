'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function EnquiryStatus() {
  const [ticketNumber, setTicketNumber] = useState('')
  const [enquiryStatus, setEnquiryStatus] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulating fetching enquiry status
    setEnquiryStatus('Action Taken')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>View Enquiry Status</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="ticketNumber">Ticket Number</Label>
            <Input 
              id="ticketNumber" 
              value={ticketNumber} 
              onChange={(e) => setTicketNumber(e.target.value)}
              placeholder="Enter ticket number"
            />
          </div>
          <Button type="submit">Check Status</Button>
        </form>

        {enquiryStatus && (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold">Enquiry Message:</h3>
              <p>Sample enquiry message for ticket {ticketNumber}</p>
            </div>
            <div>
              <h3 className="font-semibold">Status:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-green-600">Submit Enquiry (2023-06-01 10:00 AM)</li>
                <li className="text-green-600">Enquiry seen by Admin (2023-06-01 11:30 AM)</li>
                <li className="text-green-600">Enquiry escalated (2023-06-01 02:00 PM)</li>
                <li className="text-green-600">Action Taken (2023-06-02 09:15 AM)</li>
                <li>Is your Enquiry solved?</li>
              </ul>
            </div>
            <RadioGroup defaultValue="no">
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
        )}
      </CardContent>
    </Card>
  )
}

