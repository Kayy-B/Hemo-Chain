'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function RequestBloodUnits() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [wholeBlood, setWholeBlood] = useState('no');

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <Card className="mt-4 bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-pink-800 dark:text-pink-300">Request Blood Units</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleOrder} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="hospitalName" className="text-gray-700 dark:text-gray-300">Hospital Name</Label>
              <Input id="hospitalName" value="X Hospital" readOnly className="w-full dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <Label htmlFor="deliveryAddress" className="text-gray-700 dark:text-gray-300">Delivery Address</Label>
              <Input id="deliveryAddress" value="123 Hospital St" readOnly className="w-full dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <Label htmlFor="contactDetails" className="text-gray-700 dark:text-gray-300">Contact Details</Label>
              <Input id="contactDetails" value="+1 234 567 8900" readOnly className="w-full dark:bg-gray-700 dark:text-white" />
            </div>
          </div>

          <div>
            <Label htmlFor="wholeBlood" className="text-gray-700 dark:text-gray-300">Whole Blood</Label>
            <Select value={wholeBlood} onValueChange={setWholeBlood}>
              <SelectTrigger id="wholeBlood" className="w-full dark:bg-gray-700 dark:text-white">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-700">
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {wholeBlood === 'yes' && (
            <div className="grid grid-cols-4 gap-4">
              {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((type) => (
                <div key={type}>
                  <Label htmlFor={type.toLowerCase()} className="text-gray-700 dark:text-gray-300">{type}</Label>
                  <Input id={type.toLowerCase()} type="number" min="0" className="w-full dark:bg-gray-700 dark:text-white" />
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="wbc" className="text-gray-700 dark:text-gray-300">WBC</Label>
              <Input id="wbc" type="number" min="0" className="w-full dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <Label htmlFor="rbc" className="text-gray-700 dark:text-gray-300">RBC</Label>
              <Input id="rbc" type="number" min="0" className="w-full dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <Label htmlFor="platelets" className="text-gray-700 dark:text-gray-300">Platelets</Label>
              <Input id="platelets" type="number" min="0" className="w-full dark:bg-gray-700 dark:text-white" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="sourceAddress" className="text-gray-700 dark:text-gray-300">Source Address</Label>
              <Select>
                <SelectTrigger id="sourceAddress" className="dark:bg-gray-700 dark:text-white">
                  <SelectValue placeholder="Select source address" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700">
                  <SelectItem value="address1">Blood Bank A, 123 Main St</SelectItem>
                  <SelectItem value="address2">Blood Bank B, 456 Oak Ave</SelectItem>
                  <SelectItem value="address3">Blood Bank C, 789 Pine Rd</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="paymentMode" className="text-gray-700 dark:text-gray-300">Payment Mode</Label>
              <Select>
                <SelectTrigger id="paymentMode" className="dark:bg-gray-700 dark:text-white">
                  <SelectValue placeholder="Select payment mode" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700">
                  <SelectItem value="credit">Credit Card</SelectItem>
                  <SelectItem value="debit">Debit Card</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Dialog open={orderPlaced} onOpenChange={setOrderPlaced}>
            <DialogTrigger asChild>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white dark:bg-green-700 dark:hover:bg-green-600"
              >
                ORDER
              </Button>
            </DialogTrigger>
            <DialogContent className="dark:bg-gray-800 dark:text-white">
              <DialogHeader>
                <DialogTitle className="text-gray-800 dark:text-white">Order Placed</DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  Your order has been successfully placed.
                </DialogDescription>
              </DialogHeader>
              <Button
                onClick={() => window.location.href = '/dashboard/hospital'}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                Return to Hospital Dashboard
              </Button>
            </DialogContent>
          </Dialog>
        </form>
      </CardContent>
    </Card>
  )
}

