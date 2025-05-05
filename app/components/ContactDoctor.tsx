import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const doctorData = [
  { name: 'Dr. John Doe', contactNumber: '+1234567890' },
  { name: 'Dr. Jane Smith', contactNumber: '+1987654321' },
  { name: 'Dr. Mike Johnson', contactNumber: '+1122334455' },
]

export default function ContactDoctor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Doctor</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Doctor Name</TableHead>
              <TableHead>Contact Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctorData.map((doctor) => (
              <TableRow key={doctor.name}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.contactNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

