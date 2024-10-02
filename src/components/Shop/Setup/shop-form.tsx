'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle } from "lucide-react"

export function ShopForm({ shop, onSave, onCancel }) {
  const [formData, setFormData] = useState(shop || {
    name: "",
    mobileNumber: "",
    manager: "",
    address: "",
    city: "",
    country: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          <PlusCircle className="h-8 w-8 text-gray-500" />
        </div>
      </div>
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">Shop Information</h2>
      </div>
      <Input
        name="name"
        placeholder="Shop Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        <Input
          name="manager"
          placeholder="Shop Manager"
          value={formData.manager}
          onChange={handleChange}
          required
        />
      </div>
      <Input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <Select
          name="country"
          value={formData.country}
          onValueChange={(value) => handleSelectChange("country", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cameroon">Cameroon</SelectItem>
            <SelectItem value="nigeria">Nigeria</SelectItem>
            <SelectItem value="ghana">Ghana</SelectItem>
            {/* Add more countries as needed */}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}