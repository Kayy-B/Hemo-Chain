'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SubmitEnquiryForm() {
  const [enquiryType, setEnquiryType] = useState('')
  const [enquiryText, setEnquiryText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Enquiry submitted:', { enquiryType, enquiryText })
  }

  return (
    <Card className="bg-pink-50 border-pink-100 dark:bg-gray-800 dark:border-gray-700">
      <CardHeader className="bg-pink-100 dark:bg-gray-700">
        <CardTitle className="text-pink-800 dark:text-pink-300">Submit New Enquiry</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="date" className="text-pink-800 dark:text-pink-300">Date and Time</Label>
              <Input id="date" value={new Date().toLocaleString()} readOnly className="bg-white border-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>
            <div>
              <Label htmlFor="ticket" className="text-pink-800 dark:text-pink-300">Ticket Number</Label>
              <Input id="ticket" value={`ENQ-${Math.floor(Math.random() * 10000)}`} readOnly className="bg-white border-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>
            <div>
              <Label htmlFor="enquiryType" className="text-pink-800 dark:text-pink-300">Enquiry Type</Label>
              <Select value={enquiryType} onValueChange={setEnquiryType}>
                <SelectTrigger id="enquiryType" className="bg-white border-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <SelectValue placeholder="Select enquiry type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-pink-200 dark:bg-gray-700 dark:border-gray-600">
                  <SelectItem value="info">Info</SelectItem>
                  <SelectItem value="searchBlood">Search Blood Units</SelectItem>
                  <SelectItem value="complaint">Submit Complaint</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-pink-800 dark:text-pink-300">Email</Label>
              <Input id="email" value="user@example.com" readOnly className="bg-white border-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-pink-800 dark:text-pink-300">Phone</Label>
              <Input id="phone" value="+1234567890" readOnly className="bg-white border-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>
          </div>
          <div>
            <Label htmlFor="enquiryText" className="text-pink-800 dark:text-pink-300">Enquiry</Label>
            <Textarea 
              id="enquiryText" 
              value={enquiryText} 
              onChange={(e) => setEnquiryText(e.target.value)}
              rows={4}
              className="bg-white border-pink-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="flex justify-between gap-4">
            <Button type="button" className="flex-1 bg-pink-600 hover:bg-pink-700 text-white dark:bg-pink-700 dark:hover:bg-pink-800">
              Record Audio
            </Button>
            <Button type="button" className="flex-1 bg-pink-600 hover:bg-pink-700 text-white dark:bg-pink-700 dark:hover:bg-pink-800">
              Upload Image
            </Button>
            <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-800">
              Submit Enquiry
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

