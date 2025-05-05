'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function UpdatePersonalInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [proofOfBirth, setProofOfBirth] = useState('');
  const [proofOfPermanentAddress, setProofOfPermanentAddress] = useState('');
  const [proofOfTemporaryAddress, setProofOfTemporaryAddress] = useState('');
  const [idProof, setIdProof] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Personal info updated:', { firstName, lastName, gender, contactNumber, email, proofOfBirth, proofOfPermanentAddress, proofOfTemporaryAddress, idProof });
  };

  return (
    <Card className="mt-4 bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-pink-800 dark:text-pink-300">Update Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">First Name</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">Last Name</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <Label htmlFor="gender" className="text-gray-700 dark:text-gray-300">Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger id="gender" className="w-full dark:bg-gray-700 dark:text-white">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactNumber" className="text-gray-700 dark:text-gray-300">Contact Number</Label>
              <Input
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email ID</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="proofOfBirth" className="text-gray-700 dark:text-gray-300">Proof of Birth</Label>
              <Input
                id="proofOfBirth"
                type="file"
                onChange={(e) => setProofOfBirth(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <Label htmlFor="proofOfPermanentAddress" className="text-gray-700 dark:text-gray-300">Proof of Permanent Address</Label>
              <Input
                id="proofOfPermanentAddress"
                type="file"
                onChange={(e) => setProofOfPermanentAddress(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="proofOfTemporaryAddress" className="text-gray-700 dark:text-gray-300">Proof of Temporary Address</Label>
              <Input
                id="proofOfTemporaryAddress"
                type="file"
                onChange={(e) => setProofOfTemporaryAddress(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <Label htmlFor="idProof" className="text-gray-700 dark:text-gray-300">ID Proof</Label>
              <Input
                id="idProof"
                type="file"
                onChange={(e) => setIdProof(e.target.value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <Button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white dark:bg-pink-700 dark:hover:bg-pink-800">
            Update Personal Information
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

