'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronLeft } from "lucide-react"

interface Employee {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
}

interface EmployeeDetailsProps {
  employee: Employee;
  onBack: () => void;
}

const employeeActivities = [
  { id: 1, action: "Logged in", date: "2023-05-15 09:00:00", performance: "Good" },
  { id: 2, action: "Processed order #1234", date: "2023-05-15 10:30:00", performance: "Excellent" },
  { id: 3, action: "Updated inventory", date: "2023-05-15 14:15:00", performance: "Good" },
  { id: 4, action: "Handled customer inquiry", date: "2023-05-15 16:45:00", performance: "Average" },
]

const getRoleColor = (role: string): string => {
  switch (role.toLowerCase()) {
    case 'admin':
      return 'bg-[#E8FFF3] text-[#03A734]'
    case 'seller':
      return 'bg-[#EEF2FF] text-[#3F5BF6]'
    case 'manager':
      return 'bg-[#FFF4ED] text-[#FF8E29]'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function EmployeeDetails({ employee, onBack }: EmployeeDetailsProps) {
  return (
    <>
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Employees
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Employee Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center mb-4">
              <Avatar className="w-24 h-24 mb-4 bg-[#EEF2FF] text-[#3F5BF6]">
                <AvatarFallback className="text-3xl">{employee.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-semibold">{employee.name}</h2>
              <Badge className={`mt-2 font-medium ${getRoleColor(employee.role)}`}>
                {employee.role}
              </Badge>
            </div>
            <div className="space-y-2">
              <p><strong>Phone:</strong> {employee.phone}</p>
              <p><strong>Email:</strong> {employee.email}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Employee Activities and Performance</CardTitle>
          </CardHeader>
          <CardContent className="max-h-[400px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Action</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Performance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeeActivities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>{activity.action}</TableCell>
                    <TableCell>{activity.date}</TableCell>
                    <TableCell>{activity.performance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
