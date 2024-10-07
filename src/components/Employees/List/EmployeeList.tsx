"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Edit, Trash2 } from "lucide-react"

// Mock data
const employees = [
  { id: "1", name: "Aurelie Mballa", phone: "237674537760", role: "Admin", email: "aurelie@example.com" },
  { id: "2", name: "Jean-Claude Ndombe", phone: "237674537771", role: "Seller", email: "jean.claude@example.com" },
  { id: "3", name: "Marie Kouassi", phone: "237674537772", role: "Manager", email: "marie@example.com" },
]

const roles = ["Admin", "Seller", "Manager"]

interface Employee {
  id: string;
  name: string;
  phone: string;
  role: string;
  email: string;
}

interface EmployeeListProps {
  onEmployeeClick: (employee: Employee) => void;
  onAddEmployee: () => void;
  onEditEmployee: (employee: Employee) => void;
}

export function EmployeeList({ onEmployeeClick, onAddEmployee, onEditEmployee }: EmployeeListProps) {
  const [ /* eslint-disable @typescript-eslint/no-unused-vars */
     selectedEmployees, setSelectedEmployees] = useState<string[]>([])

  const handleEmployeeClick = (employee: Employee) => {
    onEmployeeClick(employee)
  }

  const handleEditClick = (event: React.MouseEvent, employee: Employee) => {
    event.stopPropagation()
    onEditEmployee(employee)
  }

  const getRoleColor = (role: string) => {
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

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Employees</h1>
        <div className="space-x-2">
          <Button variant="outline" className="text-[#2D70FD] border-[#2D70FD]">Export</Button>
          <Button onClick={onAddEmployee} className="bg-[#2D70FD]">Add Employee</Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Employee</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                {roles.map((role) => (
                  <SelectItem key={role} value={role.toLowerCase()}>{role}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search..." className="pl-8 w-[300px]" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="flex justify-end space-x-2 mb-2">
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id} onClick={() => handleEmployeeClick(employee)} className="cursor-pointer">
                    <TableCell>
                      <Checkbox onClick={(e) => e.stopPropagation()} />
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        <Avatar className="bg-[#EEF2FF] text-[#3F5BF6]">
                          <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span>{employee.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{employee.phone}</TableCell>
                    <TableCell>
                      <Badge className={`font-medium ${getRoleColor(employee.role)}`}>
                        {employee.role}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={(e) => handleEditClick(e, employee)}>
                        <Edit className="h-4 w-4 text-gray-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  )
}