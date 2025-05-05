'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BloodInventory from './BloodInventory'
import BloodStatusMonitoring from './BloodStatusMonitoring'

// Mock data for blood bags
const mockBloodBags = {
  'A+': {
    'City Hospital': [
      { donorId: 'D001', donatedOn: '2023-05-01', expiresOn: '2023-06-01', consumptionStatus: 'Available' },
      { donorId: 'D002', donatedOn: '2023-05-05', expiresOn: '2023-06-05', consumptionStatus: 'Booked' },
      { donorId: 'D003', donatedOn: '2023-05-10', expiresOn: '2023-06-10', consumptionStatus: 'Used' },
      { donorId: 'D004', donatedOn: '2023-05-15', expiresOn: '2023-06-15', consumptionStatus: 'Available' },
      { donorId: 'D005', donatedOn: '2023-05-20', expiresOn: '2023-06-20', consumptionStatus: 'Available' },
    ],
    'Central Clinic': [
      { donorId: 'D006', donatedOn: '2023-05-02', expiresOn: '2023-06-02', consumptionStatus: 'Available' },
      { donorId: 'D007', donatedOn: '2023-05-07', expiresOn: '2023-06-07', consumptionStatus: 'Used' },
      { donorId: 'D008', donatedOn: '2023-05-12', expiresOn: '2023-06-12', consumptionStatus: 'Available' },
    ],
    'Metro Hospital': [
      { donorId: 'D009', donatedOn: '2023-05-03', expiresOn: '2023-06-03', consumptionStatus: 'Available' },
      { donorId: 'D010', donatedOn: '2023-05-08', expiresOn: '2023-06-08', consumptionStatus: 'Booked' },
      { donorId: 'D011', donatedOn: '2023-05-13', expiresOn: '2023-06-13', consumptionStatus: 'Available' },
      { donorId: 'D012', donatedOn: '2023-05-18', expiresOn: '2023-06-18', consumptionStatus: 'Used' },
    ],
  },
  'B-': {
    'Regional Medical Center': [
      { donorId: 'D013', donatedOn: '2023-05-04', expiresOn: '2023-06-04', consumptionStatus: 'Available' },
      { donorId: 'D014', donatedOn: '2023-05-09', expiresOn: '2023-06-09', consumptionStatus: 'Booked' },
      { donorId: 'D015', donatedOn: '2023-05-14', expiresOn: '2023-06-14', consumptionStatus: 'Available' },
      { donorId: 'D016', donatedOn: '2023-05-19', expiresOn: '2023-06-19', consumptionStatus: 'Available' },
      { donorId: 'D017', donatedOn: '2023-05-24', expiresOn: '2023-06-24', consumptionStatus: 'Used' },
    ],
    'University Hospital': [
      { donorId: 'D018', donatedOn: '2023-05-06', expiresOn: '2023-06-06', consumptionStatus: 'Available' },
      { donorId: 'D019', donatedOn: '2023-05-11', expiresOn: '2023-06-11', consumptionStatus: 'Booked' },
      { donorId: 'D020', donatedOn: '2023-05-16', expiresOn: '2023-06-16', consumptionStatus: 'Available' },
    ],
  },
  'O+': {
    'Downtown Medical Center': [
      { donorId: 'D021', donatedOn: '2023-05-01', expiresOn: '2023-06-01', consumptionStatus: 'Available' },
      { donorId: 'D022', donatedOn: '2023-05-06', expiresOn: '2023-06-06', consumptionStatus: 'Booked' },
      { donorId: 'D023', donatedOn: '2023-05-11', expiresOn: '2023-06-11', consumptionStatus: 'Available' },
      { donorId: 'D024', donatedOn: '2023-05-16', expiresOn: '2023-06-16', consumptionStatus: 'Used' },
      { donorId: 'D025', donatedOn: '2023-05-21', expiresOn: '2023-06-21', consumptionStatus: 'Available' },
    ],
    'Riverside Hospital': [
      { donorId: 'D026', donatedOn: '2023-05-02', expiresOn: '2023-06-02', consumptionStatus: 'Available' },
      { donorId: 'D027', donatedOn: '2023-05-07', expiresOn: '2023-06-07', consumptionStatus: 'Booked' },
      { donorId: 'D028', donatedOn: '2023-05-12', expiresOn: '2023-06-12', consumptionStatus: 'Available' },
      { donorId: 'D029', donatedOn: '2023-05-17', expiresOn: '2023-06-17', consumptionStatus: 'Used' },
    ],
  },
  'O-': {
    'Sunset Medical Center': [
      { donorId: 'D030', donatedOn: '2023-05-03', expiresOn: '2023-06-03', consumptionStatus: 'Available' },
      { donorId: 'D031', donatedOn: '2023-05-08', expiresOn: '2023-06-08', consumptionStatus: 'Booked' },
      { donorId: 'D032', donatedOn: '2023-05-13', expiresOn: '2023-06-13', consumptionStatus: 'Available' },
    ],
    'Lakeview Hospital': [
      { donorId: 'D033', donatedOn: '2023-05-04', expiresOn: '2023-06-04', consumptionStatus: 'Available' },
      { donorId: 'D034', donatedOn: '2023-05-09', expiresOn: '2023-06-09', consumptionStatus: 'Used' },
    ],
  },
  'AB+': {
    "St. Mary's Medical Center": [
      { donorId: 'D035', donatedOn: '2023-05-01', expiresOn: '2023-06-01', consumptionStatus: 'Available' },
      { donorId: 'D036', donatedOn: '2023-05-06', expiresOn: '2023-06-06', consumptionStatus: 'Booked' },
      { donorId: 'D037', donatedOn: '2023-05-11', expiresOn: '2023-06-11', consumptionStatus: 'Available' },
      { donorId: 'D038', donatedOn: '2023-05-16', expiresOn: '2023-06-16', consumptionStatus: 'Used' },
      { donorId: 'D039', donatedOn: '2023-05-21', expiresOn: '2023-06-21', consumptionStatus: 'Available' },
      { donorId: 'D040', donatedOn: '2023-05-26', expiresOn: '2023-06-26', consumptionStatus: 'Available' },
      { donorId: 'D041', donatedOn: '2023-05-31', expiresOn: '2023-07-01', consumptionStatus: 'Available' },
      { donorId: 'D042', donatedOn: '2023-06-05', expiresOn: '2023-07-06', consumptionStatus: 'Available' },
      { donorId: 'D043', donatedOn: '2023-06-10', expiresOn: '2023-07-11', consumptionStatus: 'Available' },
      { donorId: 'D044', donatedOn: '2023-06-15', expiresOn: '2023-07-16', consumptionStatus: 'Available' },
      { donorId: 'D045', donatedOn: '2023-06-20', expiresOn: '2023-07-21', consumptionStatus: 'Available' },
      { donorId: 'D046', donatedOn: '2023-06-25', expiresOn: '2023-07-26', consumptionStatus: 'Available' },
      { donorId: 'D047', donatedOn: '2023-06-30', expiresOn: '2023-07-31', consumptionStatus: 'Available' },
      { donorId: 'D048', donatedOn: '2023-07-05', expiresOn: '2023-08-05', consumptionStatus: 'Available' },
      { donorId: 'D049', donatedOn: '2023-07-10', expiresOn: '2023-08-10', consumptionStatus: 'Available' },
    ],
    'Eastside Clinic': [
      { donorId: 'D050', donatedOn: '2023-05-02', expiresOn: '2023-06-02', consumptionStatus: 'Available' },
      { donorId: 'D051', donatedOn: '2023-05-07', expiresOn: '2023-06-07', consumptionStatus: 'Booked' },
      { donorId: 'D052', donatedOn: '2023-05-12', expiresOn: '2023-06-12', consumptionStatus: 'Available' },
      { donorId: 'D053', donatedOn: '2023-05-17', expiresOn: '2023-06-17', consumptionStatus: 'Used' },
      { donorId: 'D054', donatedOn: '2023-05-22', expiresOn: '2023-06-22', consumptionStatus: 'Available' },
      { donorId: 'D055', donatedOn: '2023-05-27', expiresOn: '2023-06-27', consumptionStatus: 'Available' },
      { donorId: 'D056', donatedOn: '2023-06-01', expiresOn: '2023-07-02', consumptionStatus: 'Available' },
      { donorId: 'D057', donatedOn: '2023-06-06', expiresOn: '2023-07-07', consumptionStatus: 'Available' },
      { donorId: 'D058', donatedOn: '2023-06-11', expiresOn: '2023-07-12', consumptionStatus: 'Available' },
      { donorId: 'D059', donatedOn: '2023-06-16', expiresOn: '2023-07-17', consumptionStatus: 'Available' },
    ],
  },
  'AB-': {
    'Redwood Health Center': [
      { donorId: 'D060', donatedOn: '2023-05-03', expiresOn: '2023-06-03', consumptionStatus: 'Available' },
      { donorId: 'D061', donatedOn: '2023-05-08', expiresOn: '2023-06-08', consumptionStatus: 'Booked' },
      { donorId: 'D062', donatedOn: '2023-05-13', expiresOn: '2023-06-13', consumptionStatus: 'Available' },
      { donorId: 'D063', donatedOn: '2023-05-18', expiresOn: '2023-06-18', consumptionStatus: 'Used' },
      { donorId: 'D064', donatedOn: '2023-05-23', expiresOn: '2023-06-23', consumptionStatus: 'Available' },
      { donorId: 'D065', donatedOn: '2023-05-28', expiresOn: '2023-06-28', consumptionStatus: 'Available' },
      { donorId: 'D066', donatedOn: '2023-06-02', expiresOn: '2023-07-03', consumptionStatus: 'Available' },
      { donorId: 'D067', donatedOn: '2023-06-07', expiresOn: '2023-07-08', consumptionStatus: 'Available' },
      { donorId: 'D068', donatedOn: '2023-06-12', expiresOn: '2023-07-13', consumptionStatus: 'Available' },
      { donorId: 'D069', donatedOn: '2023-06-17', expiresOn: '2023-07-18', consumptionStatus: 'Available' },
    ],
    'Maplewood Hospital': [
      { donorId: 'D070', donatedOn: '2023-05-04', expiresOn: '2023-06-04', consumptionStatus: 'Available' },
      { donorId: 'D071', donatedOn: '2023-05-09', expiresOn: '2023-06-09', consumptionStatus: 'Booked' },
      { donorId: 'D072', donatedOn: '2023-05-14', expiresOn: '2023-06-14', consumptionStatus: 'Available' },
      { donorId: 'D073', donatedOn: '2023-05-19', expiresOn: '2023-06-19', consumptionStatus: 'Used' },
      { donorId: 'D074', donatedOn: '2023-05-24', expiresOn: '2023-06-24', consumptionStatus: 'Available' },
      { donorId: 'D075', donatedOn: '2023-05-29', expiresOn: '2023-06-29', consumptionStatus: 'Available' },
      { donorId: 'D076', donatedOn: '2023-06-03', expiresOn: '2023-07-04', consumptionStatus: 'Available' },
      { donorId: 'D077', donatedOn: '2023-06-08', expiresOn: '2023-07-09', consumptionStatus: 'Available' },
      { donorId: 'D078', donatedOn: '2023-06-13', expiresOn: '2023-07-14', consumptionStatus: 'Available' },
      { donorId: 'D079', donatedOn: '2023-06-18', expiresOn: '2023-07-19', consumptionStatus: 'Available' },
      { donorId: 'D080', donatedOn: '2023-06-23', expiresOn: '2023-07-24', consumptionStatus: 'Available' },
      { donorId: 'D081', donatedOn: '2023-06-28', expiresOn: '2023-07-29', consumptionStatus: 'Available' },
      { donorId: 'D082', donatedOn: '2023-07-03', expiresOn: '2023-08-03', consumptionStatus: 'Available' },
      { donorId: 'D083', donatedOn: '2023-07-08', expiresOn: '2023-08-08', consumptionStatus: 'Available' },
      { donorId: 'D084', donatedOn: '2023-07-13', expiresOn: '2023-08-13', consumptionStatus: 'Available' },
    ],
  },
}

export default function Lookup() {
  const [selectedBloodType, setSelectedBloodType] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [showBloodStatus, setShowBloodStatus] = useState(false)

  const handleRowClick = (bloodType: string, location: string) => {
    setSelectedBloodType(bloodType)
    setSelectedLocation(location)
    setShowBloodStatus(true)
  }

  return (
    <Card className="mt-4">
      <CardHeader className="bg-slate-800">
        <CardTitle className="text-pink-400">Blood Inventory Lookup</CardTitle>
      </CardHeader>
      <CardContent className="bg-slate-900">
        <BloodInventory 
          initialBloodType={selectedBloodType} 
          onBloodTypeChange={setSelectedBloodType}
          onRowClick={handleRowClick}
        />
        {showBloodStatus && mockBloodBags[selectedBloodType] && mockBloodBags[selectedBloodType][selectedLocation] && (
          <BloodStatusMonitoring 
            bloodType={selectedBloodType}
            location={selectedLocation}
            bloodBags={mockBloodBags[selectedBloodType][selectedLocation]}
          />
        )}
      </CardContent>
    </Card>
  )
}

