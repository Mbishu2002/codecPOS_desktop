"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

interface AddCustomerProps {
  onBack: () => void;
}

export function AddCustomer({ onBack }: AddCustomerProps) {
  return (
    <>
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Add Customer</h1>
        <div>
          <Button variant="outline" className="mr-2">Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Customer Information</CardTitle>
          <p className="text-sm text-gray-500">Most important information about the customer</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-500">First Name</label>
              <Input />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Country</label>
              <Input />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Last Name</label>
              <Input />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Address</label>
              <Input />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Phone Number</label>
              <Input />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Date of Birth</label>
              <Input type="date" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}