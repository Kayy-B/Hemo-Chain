'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  reason: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

const mockAppointments: Appointment[] = [
  { id: 'APT001', patientName: 'John Doe', date: '2023-06-10', time: '10:00 AM', reason: 'Blood Test', status: 'Scheduled' },
  { id: 'APT002', patientName: 'Jane Smith', date: '2023-06-11', time: '11:30 AM', reason: 'Follow-up', status: 'Scheduled' },
  { id: 'APT003', patientName: 'Bob Johnson', date: '2023-06-09', time: '2:00 PM', reason: 'Consultation', status: 'Completed' },
];

export default function AppointmentManagement() {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [newAppointment, setNewAppointment] = useState<Partial<Appointment>>({});

  const handleStatusChange = (id: string, newStatus: 'Scheduled' | 'Completed' | 'Cancelled') => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: newStatus } : apt
    ));
  };

  const handleNewAppointment = () => {
    if (newAppointment.patientName && newAppointment.date && newAppointment.time && newAppointment.reason) {
      setAppointments([...appointments, {
        id: `APT${appointments.length + 1}`.padStart(6, '0'),
        ...newAppointment as Appointment,
        status: 'Scheduled'
      }]);
      setNewAppointment({});
    }
  };

  return (
    <Card className="mt-4 bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-pink-800 dark:text-pink-300">Appointment Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mb-4">Add New Appointment</Button>
          </DialogTrigger>
          <DialogContent className="dark:bg-gray-800 dark:text-white">
            <DialogHeader>
              <DialogTitle>Add New Appointment</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="patientName">Patient Name</Label>
                <Input
                  id="patientName"
                  value={newAppointment.patientName || ''}
                  onChange={(e) => setNewAppointment({...newAppointment, patientName: e.target.value})}
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={newAppointment.date || ''}
                  onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={newAppointment.time || ''}
                  onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="reason">Reason</Label>
                <Input
                  id="reason"
                  value={newAppointment.reason || ''}
                  onChange={(e) => setNewAppointment({...newAppointment, reason: e.target.value})}
                  className="dark:bg-gray-700 dark:text-white"
                />
              </div>
              <Button onClick={handleNewAppointment}>Add Appointment</Button>
            </div>
          </DialogContent>
        </Dialog>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-pink-800 dark:text-pink-300">Patient Name</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Date</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Time</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Reason</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Status</TableHead>
              <TableHead className="text-pink-800 dark:text-pink-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.reason}</TableCell>
                <TableCell>{appointment.status}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    onClick={() => handleStatusChange(appointment.id, 'Completed')}
                    disabled={appointment.status === 'Completed'}
                    className="mr-2"
                  >
                    Complete
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleStatusChange(appointment.id, 'Cancelled')}
                    disabled={appointment.status === 'Cancelled'}
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

