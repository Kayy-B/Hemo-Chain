'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BloodRequestForm() {
  const [bloodType, setBloodType] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your blockchain or backend
    console.log('Blood request submitted:', { bloodType, quantity })
    // Reset form
    setBloodType('')
    setQuantity('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Blood</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bloodType">Blood Type</Label>
            <Select value={bloodType} onValueChange={setBloodType} required>
              <SelectTrigger id="bloodType">
                <SelectValue placeholder="Select blood type" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto">
                <SelectItem value="O-">O -ve</SelectItem>
                <SelectItem value="O+">O +ve</SelectItem>
                <SelectItem value="A-">A -ve</SelectItem>
                <SelectItem value="A+">A +ve</SelectItem>
                <SelectItem value="B-">B -ve</SelectItem>
                <SelectItem value="B+">B +ve</SelectItem>
                <SelectItem value="AB-">AB -ve</SelectItem>
                <SelectItem value="AB+">AB +ve</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity (in units)</Label>
            <Input 
              id="quantity" 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Submit Request</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

