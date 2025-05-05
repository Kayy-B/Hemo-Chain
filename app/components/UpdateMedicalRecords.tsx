'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function UpdateMedicalRecords({ userType }: { userType: 'donor' | 'receiver' }) {
  const [latestBloodReport, setLatestBloodReport] = useState('');
  const [vaccinationRecords, setVaccinationRecords] = useState('');
  const [history, setHistory] = useState('');
  const [physicalExamResult, setPhysicalExamResult] = useState('');
  const [travelHistory, setTravelHistory] = useState('');
  const [latestMedications, setLatestMedications] = useState('');
  const [specialComments, setSpecialComments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Medical records updated:', {
      latestBloodReport,
      vaccinationRecords,
      history,
      physicalExamResult,
      travelHistory,
      latestMedications,
      specialComments
    });
  };

  return (
    <Card className="mt-4 bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-pink-800 dark:text-pink-300">Update Medical Records</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="latestBloodReport" className="text-gray-700 dark:text-gray-300">Latest Blood Report</Label>
              <Input
                id="latestBloodReport"
                type="file"
                onChange={(e) => setLatestBloodReport(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <Label htmlFor="vaccinationRecords" className="text-gray-700 dark:text-gray-300">Vaccination Records</Label>
              <Input
                id="vaccinationRecords"
                type="file"
                onChange={(e) => setVaccinationRecords(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="history" className="text-gray-700 dark:text-gray-300">
                {userType === 'donor' ? 'Donation History' : 'Transfusion History'}
              </Label>
              <Input
                id="history"
                type="file"
                onChange={(e) => setHistory(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <Label htmlFor="physicalExamResult" className="text-gray-700 dark:text-gray-300">Latest Physical Exam Result</Label>
              <Input
                id="physicalExamResult"
                type="file"
                onChange={(e) => setPhysicalExamResult(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="travelHistory" className="text-gray-700 dark:text-gray-300">Travel History</Label>
              <Input
                id="travelHistory"
                type="file"
                onChange={(e) => setTravelHistory(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <Label htmlFor="latestMedications" className="text-gray-700 dark:text-gray-300">Latest Medications</Label>
              <Input
                id="latestMedications"
                type="file"
                onChange={(e) => setLatestMedications(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="specialComments" className="text-gray-700 dark:text-gray-300">Special Comments</Label>
            <Textarea
              id="specialComments"
              value={specialComments}
              onChange={(e) => setSpecialComments(e.target.value)}
              className="w-full dark:bg-gray-700 dark:text-white"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white dark:bg-pink-700 dark:hover:bg-pink-800">
            Update Medical Records
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

