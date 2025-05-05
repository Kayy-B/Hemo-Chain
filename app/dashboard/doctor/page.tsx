'use client'

import { useState } from 'react'
import Navigation from '@/app/components/Navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PatientManagement from '@/app/components/PatientManagement'
import SubmitEnquiryForm from '@/app/components/SubmitEnquiryForm'
import ContactAdmin from '@/app/components/ContactAdmin'
import Lookup from '@/app/components/Lookup'
import TrackEnquiries from '@/app/components/TrackEnquiries'
import ReplyEnquiries from '@/app/components/ReplyEnquiries'
import AppointmentManagement from '@/app/components/AppointmentManagement'
import UpdatePersonalInfo from '@/app/components/UpdatePersonalInfo'

export default function DoctorDashboard() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Navigation userType="doctor" />
      <Card className="bg-pink-50 border-pink-100 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="bg-pink-100 dark:bg-gray-700">
          <CardTitle className="text-pink-800 dark:text-pink-300">Doctor Dashboard</CardTitle>
          <CardDescription className="text-pink-600 dark:text-pink-200">Manage blood inventory and patient needs</CardDescription>
        </CardHeader>
        <CardContent>
          {/* First row - Primary functions */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Button 
              className="flex-1 hover:bg-green-500 hover:text-white dark:hover:bg-green-700" 
              onClick={() => setSelectedOption('patientManagement')}
            >
              Patient Management
            </Button>
            <Button 
              className="flex-1 hover:bg-green-500 hover:text-white dark:hover:bg-green-700" 
              onClick={() => setSelectedOption('appointmentManagement')}
            >
              Appointment Management
            </Button>
          </div>

          {/* Second row - Enquiry related */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Button 
              className="flex-1 hover:bg-green-500 hover:text-white dark:hover:bg-green-700" 
              onClick={() => setSelectedOption('replyEnquiries')}
            >
              Reply Enquiries
            </Button>
            <Button 
              className="flex-1 hover:bg-green-500 hover:text-white dark:hover:bg-green-700" 
              onClick={() => setSelectedOption('trackEnquiries')}
            >
              Track My Enquiries
            </Button>
            <Button 
              className="flex-1 hover:bg-green-500 hover:text-white dark:hover:bg-green-700" 
              onClick={() => setSelectedOption('submitEnquiry')}
            >
              Submit New Enquiry
            </Button>
          </div>

          {/* Third row - Other functions */}
          <div className="flex flex-wrap gap-2">
            <Button 
              className="flex-1 hover:bg-green-500 hover:text-white dark:hover:bg-green-700" 
              onClick={() => setSelectedOption('lookup')}
            >
              Lookup
            </Button>
            <Button 
              className="flex-1 hover:bg-green-500 hover:text-white dark:hover:bg-green-700" 
              onClick={() => setSelectedOption('contactAdmin')}
            >
              Contact HemoChain Admin
            </Button>
            <Button 
              className="flex-1 hover:bg-green-500 hover:text-white dark:hover:bg-green-700" 
              onClick={() => setSelectedOption('updatePersonalInfo')}
            >
              Update Personal Info
            </Button>
          </div>
        </CardContent>
      </Card>

      {selectedOption === 'patientManagement' && <PatientManagement />}
      {selectedOption === 'appointmentManagement' && <AppointmentManagement />}
      {selectedOption === 'replyEnquiries' && <ReplyEnquiries />}
      {selectedOption === 'trackEnquiries' && <TrackEnquiries />}
      {selectedOption === 'submitEnquiry' && <SubmitEnquiryForm />}
      {selectedOption === 'lookup' && <Lookup />}
      {selectedOption === 'contactAdmin' && <ContactAdmin />}
      {selectedOption === 'updatePersonalInfo' && <UpdatePersonalInfo />}
    </div>
  )
}

