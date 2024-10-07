"use client"

import { useState } from "react"
import { EmployeeList } from "@/components/Employees/List/EmployeeList"
import { AddEditEmployee } from "@/components/Employees/Form/AddEmployee"
import { EmployeeDetails } from "@/components/Employees/Details/EmployeeDetails"
import { DashboardLayout } from "@/components/Shared/Layout/DashboardLayout"

export interface Employee {
  id: string;
  name: string; // Ensure this property exists
  phone: string;
  role: string;
  email: string;
}

export default function EmployeesPage() {
  const [view, setView] = useState<"list" | "add" | "edit" | "details">("list")
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)

  const handleEmployeeClick = (employee: Employee) => {
    setSelectedEmployee(employee)
    setView("details")
  }

  const handleAddEmployee = () => {
    setSelectedEmployee(null)
    setView("add")
  }

  const handleEditEmployee = (employee: Employee) => {
    setSelectedEmployee(employee)
    setView("edit")
  }

  const handleSaveEmployee = (employee: Employee) => {
    // Here you would typically save the employee data to your backend
    console.log('Saving employee:', employee)
    setView("list")
  }

  const handleBack = () => {
    setView("list")
    setSelectedEmployee(null)
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto p-6">
        {view === "list" && (
          <EmployeeList 
            onEmployeeClick={handleEmployeeClick} 
            onAddEmployee={handleAddEmployee}
            onEditEmployee={handleEditEmployee}
          />
        )}
        {(view === "add" || view === "edit") && (
          <AddEditEmployee
            onBack={handleBack} 
            onSave={handleSaveEmployee}
            employee={view === "edit" ? selectedEmployee || undefined : undefined} // Updated line
          />
        )}
        {view === "details" && selectedEmployee && (
          <EmployeeDetails employee={selectedEmployee} onBack={handleBack} />
        )}
      </div>
    </DashboardLayout>
  )
}