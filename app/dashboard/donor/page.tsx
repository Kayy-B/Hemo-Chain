'use client'

import { useState } from 'react'
import Navigation from '@/app/components/Navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import UpdateMedicalRecords from '@/app/components/UpdateMedicalRecords'
import UpdatePersonalInfo from '@/app/components/UpdatePersonalInfo'
import ContactDoctor from '@/app/components/ContactDoctor'
import ViewDonationHistory from '@/app/components/ViewDonationHistory'
import SubmitEnquiryForm from '@/app/components/SubmitEnquiryForm'
import EnquiryStatus from '@/app/components/EnquiryStatus'
import ContactAdmin from '@/app/components/ContactAdmin'
import Lookup from '@/app/components/Lookup'

export default function DonorDashboard() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Navigation userType="donor" />
      <Card className="bg-pink-50 border-pink-100 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="bg-pink-100 dark:bg-gray-700">
          <CardTitle className="text-pink-800 dark:text-pink-300">Donor Dashboard</CardTitle>
          <CardDescription className="text-pink-600 dark:text-pink-200">Manage your donations and eligibility</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <Button onClick={() => setSelectedOption('donationHistory')} className="w-full">Donation History</Button>
            <Button onClick={() => setSelectedOption('myAppointments')} className="w-full">My Appointments</Button>
            <Button onClick={() => setSelectedOption('lookup')} className="w-full">Lookup</Button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Button onClick={() => setSelectedOption('submitEnquiry')} className="w-full">Submit New Enquiry</Button>
            <Button onClick={() => setSelectedOption('trackEnquiries')} className="w-full">Track My Enquiry</Button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Button onClick={() => setSelectedOption('updateMedicalRecords')} className="w-full">Update Medical Records</Button>
            <Button onClick={() => setSelectedOption('updatePersonalInfo')} className="w-full">Update Personal Info</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={() => setSelectedOption('contactDoctor')} className="w-full">Contact Doctor</Button>
            <Button onClick={() => setSelectedOption('contactAdmin')} className="w-full">Contact HemoChain Admin</Button>
          </div>
        </CardContent>
      </Card>

      {selectedOption === 'donationHistory' && <ViewDonationHistory />}
      {selectedOption === 'updateMedicalRecords' && <UpdateMedicalRecords userType="donor" />}
      {selectedOption === 'updatePersonalInfo' && <UpdatePersonalInfo />}
      {selectedOption === 'contactDoctor' && <ContactDoctor />}
      {selectedOption === 'submitEnquiry' && <SubmitEnquiryForm />}
      {selectedOption === 'trackEnquiries' && <EnquiryStatus />}
      {selectedOption === 'contactAdmin' && <ContactAdmin />}
      {selectedOption === 'lookup' && <Lookup />}
      {selectedOption === 'myAppointments' && <p>My Appointments Placeholder</p>}

    </div>
  )
}

