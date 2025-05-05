'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Patient {
  id: number;
  type: 'Donor' | 'Receiver';
  patientId: string;
  name: string;
  personalInfo: {
    email: string;
    contact: string;
    address: string;
    idProof: string;
  };
  eligibilityTest: {
    result: 'Pass' | 'Failed' | 'Not Taken' | 'Awaited';
    details: {
      height: number;
      gender: 'Male' | 'Female' | 'Other';
      lastDonationDate: string;
      nextDonationDate: string;
    };
  };
  physicalTest: 'Pass' | 'Failed' | 'Not Taken' | 'Awaited';
  finalApproval: 'Pass' | 'Failed' | 'Not Taken' | 'Awaited';
  donationHistory?: string[];
  transfusionHistory?: string[];
  bloodSampleReport?: {
    ttiTest: string;
    hivTest: string;
  };
}

const mockPatients: Patient[] = [
  {
    id: 1,
    type: 'Donor',
    patientId: 'D001',
    name: 'John Doe',
    personalInfo: {
      email: 'john@example.com',
      contact: '+1234567890',
      address: '123 Main St, City, Country',
      idProof: 'Driver\'s License',
    },
    eligibilityTest: {
      result: 'Pass',
      details: {
        height: 175,
        gender: 'Male',
        lastDonationDate: '2023-01-15',
        nextDonationDate: '2023-07-15',
      },
    },
    physicalTest: 'Pass',
    finalApproval: 'Awaited',
    donationHistory: ['2023-01-15', '2022-07-10', '2022-01-05'],
    bloodSampleReport: {
      ttiTest: 'Negative',
      hivTest: 'Negative',
    },
  },
  {
    id: 2,
    type: 'Receiver',
    patientId: 'R001',
    name: 'Jane Smith',
    personalInfo: {
      email: 'jane@example.com',
      contact: '+1987654321',
      address: '456 Elm St, Town, Country',
      idProof: 'Passport',
    },
    eligibilityTest: {
      result: 'Not Taken',
      details: {
        height: 165,
        gender: 'Female',
        lastDonationDate: 'N/A',
        nextDonationDate: 'N/A',
      },
    },
    physicalTest: 'Not Taken',
    finalApproval: 'Not Taken',
    transfusionHistory: ['2023-05-20', '2023-02-15', '2022-11-10'],
    bloodSampleReport: {
      ttiTest: 'Negative',
      hivTest: 'Negative',
    },
  },
];

export default function PatientManagement() {
  const [patients, setPatients] = useState<Patient[]>(mockPatients);
  const [filter, setFilter] = useState<'All' | 'Donors only' | 'Receivers Only'>('All');

  const filteredPatients = patients.filter(patient => {
    if (filter === 'All') return true;
    if (filter === 'Donors only') return patient.type === 'Donor';
    if (filter === 'Receivers Only') return patient.type === 'Receiver';
    return true;
  });

  const handleFinalApproval = (patientId: string, approval: 'Approve' | 'Hold' | 'Reject') => {
    setPatients(prevPatients =>
      prevPatients.map(patient =>
        patient.patientId === patientId
          ? { ...patient, finalApproval: approval === 'Approve' ? 'Pass' : approval === 'Reject' ? 'Failed' : 'Awaited' }
          : patient
      )
    );
  };

  return (
    <Card className="mt-4 bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-pink-800 dark:text-pink-300">Patient Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select onValueChange={(value: 'All' | 'Donors only' | 'Receivers Only') => setFilter(value)}>
            <SelectTrigger className="w-[180px] dark:bg-gray-700 dark:text-white">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-700">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Donors only">Donors only</SelectItem>
              <SelectItem value="Receivers Only">Receivers Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="dark:bg-gray-700">
              <TableHead className="text-pink-800 dark:text-pink-300">S.No</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Patient Type</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Patient ID</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Patient Name</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Personal Info</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Eligibility E-Test Result</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Physical Test Report</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Donation History</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Transfusion History</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Blood Sample Report</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Final Approval</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient, index) => (
              <TableRow key={patient.id} className="dark:bg-gray-800 dark:text-white">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{patient.type}</TableCell>
                <TableCell>{patient.patientId}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="dark:bg-gray-700 dark:text-white">View</Button>
                    </DialogTrigger>
                    <DialogContent className="dark:bg-gray-800 dark:text-white">
                      <DialogHeader>
                        <DialogTitle>Personal Information</DialogTitle>
                      </DialogHeader>
                      <div>
                        <p><strong>Email:</strong> {patient.personalInfo.email}</p>
                        <p><strong>Contact:</strong> {patient.personalInfo.contact}</p>
                        <p><strong>Address:</strong> {patient.personalInfo.address}</p>
                        <p><strong>ID Proof:</strong> {patient.personalInfo.idProof}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="dark:bg-gray-700 dark:text-white">{patient.eligibilityTest.result}</Button>
                    </DialogTrigger>
                    <DialogContent className="dark:bg-gray-800 dark:text-white">
                      <DialogHeader>
                        <DialogTitle>Eligibility E-Test Result</DialogTitle>
                      </DialogHeader>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Value</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Height</TableCell>
                            <TableCell>{patient.eligibilityTest.details.height} cm</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Gender</TableCell>
                            <TableCell>{patient.eligibilityTest.details.gender}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Last Donation Date</TableCell>
                            <TableCell>{patient.eligibilityTest.details.lastDonationDate}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Next Donation Date</TableCell>
                            <TableCell>{patient.eligibilityTest.details.nextDonationDate}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>{patient.physicalTest}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="dark:bg-gray-700 dark:text-white">View</Button>
                    </DialogTrigger>
                    <DialogContent className="dark:bg-gray-800 dark:text-white">
                      <DialogHeader>
                        <DialogTitle>Donation History</DialogTitle>
                      </DialogHeader>
                      <ul>
                        {patient.donationHistory?.map((date, index) => (
                          <li key={index}>{date}</li>
                        ))}
                      </ul>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="dark:bg-gray-700 dark:text-white">View</Button>
                    </DialogTrigger>
                    <DialogContent className="dark:bg-gray-800 dark:text-white">
                      <DialogHeader>
                        <DialogTitle>Transfusion History</DialogTitle>
                      </DialogHeader>
                      <ul>
                        {patient.transfusionHistory?.map((date, index) => (
                          <li key={index}>{date}</li>
                        ))}
                      </ul>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="dark:bg-gray-700 dark:text-white">View</Button>
                    </DialogTrigger>
                    <DialogContent className="dark:bg-gray-800 dark:text-white">
                      <DialogHeader>
                        <DialogTitle>Blood Sample Report</DialogTitle>
                      </DialogHeader>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Test</TableHead>
                            <TableHead>Result</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>TTI Test</TableCell>
                            <TableCell>{patient.bloodSampleReport?.ttiTest}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>HIV Test</TableCell>
                            <TableCell>{patient.bloodSampleReport?.hivTest}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <Select
                    onValueChange={(value: 'Approve' | 'Hold' | 'Reject') => handleFinalApproval(patient.patientId, value)}
                    defaultValue={patient.finalApproval === 'Pass' ? 'Approve' : patient.finalApproval === 'Failed' ? 'Reject' : 'Hold'}
                  >
                    <SelectTrigger className="w-[100px] dark:bg-gray-700 dark:text-white">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-700">
                      <SelectItem value="Approve" className="text-green-600">Approve</SelectItem>
                      <SelectItem value="Hold" className="text-yellow-600">Hold</SelectItem>
                      <SelectItem value="Reject" className="text-red-600">Reject</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

