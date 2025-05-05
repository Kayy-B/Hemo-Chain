'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import BloodRequestForm from './BloodRequestForm'
import BloodInventory from './BloodInventory'
import SubmitEnquiryForm from './SubmitEnquiryForm'
import EnquiryStatus from './EnquiryStatus'
import TransfusionHistory from './TransfusionHistory'
import ContactDoctor from './ContactDoctor'
import ContactAdmin from './ContactAdmin'
import Lookup from './Lookup'

type OptionType = 'submitEnquiry' | 'viewStatus' | 'transfusionHistory' | 'contactDoctor' | 'contactAdmin' | 'lookup' | null

export default function ReceiverOptions() {
  const [selectedOption, setSelectedOption] = useState<OptionType>(null)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Receiver Dashboard</CardTitle>
          <CardDescription>Choose an action to proceed</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-start">
          <Button onClick={() => setSelectedOption('submitEnquiry')} className="m-1 hover:bg-green-500 hover:text-white">
            Submit New Enquiry
          </Button>
          <Button onClick={() => setSelectedOption('viewStatus')} className="m-1 hover:bg-green-500 hover:text-white">
            View Enquiry Status
          </Button>
          <Button onClick={() => setSelectedOption('transfusionHistory')} className="m-1 hover:bg-green-500 hover:text-white">
            View Transfusion History
          </Button>
          <Button onClick={() => setSelectedOption('contactDoctor')} className="m-1 hover:bg-green-500 hover:text-white">
            Contact Doctor
          </Button>
          <Button onClick={() => setSelectedOption('contactAdmin')} className="m-1 hover:bg-green-500 hover:text-white">
            Contact HemoChain Admin
          </Button>
          <Button onClick={() => setSelectedOption('lookup')} className="m-1 hover:bg-green-500 hover:text-white">
            Lookup
          </Button>
        </CardContent>
      </Card>

      {selectedOption === 'submitEnquiry' && <SubmitEnquiryForm />}
      {selectedOption === 'viewStatus' && <EnquiryStatus />}
      {selectedOption === 'transfusionHistory' && <TransfusionHistory />}
      {selectedOption === 'contactDoctor' && <ContactDoctor />}
      {selectedOption === 'contactAdmin' && <ContactAdmin />}
      {selectedOption === 'lookup' && <Lookup />}
    </div>
  )
}

