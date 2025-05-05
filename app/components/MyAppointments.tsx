'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Appointment {
  id: string;
  doctorName: string;
  date: string;
  time: string;
  objective: string;
  prescription: string;
}

const mockAppointments: Appointment[] = [
  { id: 'APT001', doctorName: 'Dr. John Doe', date: '2023-06-10', time: '10:00 AM', objective: 'Regular checkup', prescription: 'Take vitamins daily' },
  { id: 'APT002', doctorName: 'Dr. Jane Smith', date: '2023-06-15', time: '2:00 PM', objective: 'Blood test', prescription: 'Fast for 12 hours before the test' },
];

export default function MyAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [newAppointment, setNewAppointment] = useState<Partial<Appointment>>({});

  const handleNewAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAppointment.doctorName && newAppointment.date && newAppointment.time && newAppointment.objective) {
      setAppointments([...appointments, {
        id: `APT${appointments.length + 1}`.padStart(6, '0'),
        ...newAppointment as Appointment,
        prescription: ''
      }]);
      setNewAppointment({});
    }
  };

  return (
    <Card className="mt-4 bg-slate-900">
      <CardHeader>
        <CardTitle className="text-pink-400">My Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-700">
              <TableHead className="text-pink-400">Doctor Name</TableHead>
              <TableHead className="text-pink-400">Date</TableHead>
              <TableHead className="text-pink-400">Time</TableHead>
              <TableHead className="text-pink-400">Objective</TableHead>
              <TableHead className="text-pink-400">Prescription</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id} className="border-b border-slate-800">
                <TableCell className="text-slate-200">{appointment.doctorName}</TableCell>
                <TableCell className="text-slate-200">{appointment.date}</TableCell>
                <TableCell className="text-slate-200">{appointment.time}</TableCell>
                <TableCell className="text-slate-200">{appointment.objective}</TableCell>
                <TableCell className="text-slate-200">{appointment.prescription}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-6 bg-white text-slate-900 hover:bg-slate-200">
              Request New Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 text-white">
            <DialogHeader>
              <DialogTitle className="text-pink-400">Request New Appointment</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleNewAppointment} className="space-y-4">
              <div>
                <Label htmlFor="doctorName">Doctor Name</Label>
                <Input
                  id="doctorName"
                  value={newAppointment.doctorName || ''}
                  onChange={(e) => setNewAppointment({...newAppointment, doctorName: e.target.value})}
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={newAppointment.date || ''}
                  onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={newAppointment.time || ''}
                  onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="objective">Objective</Label>
                <Textarea
                  id="objective"
                  value={newAppointment.objective || ''}
                  onChange={(e) => setNewAppointment({...newAppointment, objective: e.target.value})}
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                Request Appointment
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

