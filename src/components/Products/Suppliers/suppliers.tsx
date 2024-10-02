"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Search, Plus, Edit, Trash2 } from "lucide-react"

// Mock data for suppliers
const initialSuppliers = [
  { id: 1, name: "Aurelie Mballa", phoneNumber: "237674537760", location: "Buea", orders: 5, sales: "4,056 XAF" },
  { id: 2, name: "Jean-Claude Ndombe", phoneNumber: "237674537771", location: "Douala", orders: 12, sales: "4,056 XAF" },
  { id: 3, name: "Hervé Kouassi", phoneNumber: "237674534573", location: "Yaounde", orders: 6, sales: "26,000 XAF" },
  // Add more mock data here...
]

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState(initialSuppliers)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedSuppliers, setSelectedSuppliers] = useState([])
  const [isAddSupplierOpen, setIsAddSupplierOpen] = useState(false)
  const [newSupplier, setNewSupplier] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    address: "",
    companyName: ""
  })

  const itemsPerPage = 10
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.phoneNumber.includes(searchTerm) ||
    supplier.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const currentSuppliers = filteredSuppliers.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredSuppliers.length / itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleCheckboxChange = (supplierId) => {
    setSelectedSuppliers(prev =>
      prev.includes(supplierId) ? prev.filter(id => id !== supplierId) : [...prev, supplierId]
    )
  }

  const handleAddSupplier = () => {
    const fullName = `${newSupplier.firstName} ${newSupplier.lastName}`.trim()
    const newSupplierEntry = {
      id: suppliers.length + 1,
      name: fullName,
      phoneNumber: newSupplier.phoneNumber,
      location: newSupplier.country,
      orders: 0,
      sales: "0 XAF"
    }
    setSuppliers([...suppliers, newSupplierEntry])
    setIsAddSupplierOpen(false)
    setNewSupplier({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      country: "",
      address: "",
      companyName: ""
    })
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Suppliers</h1>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Dialog open={isAddSupplierOpen} onOpenChange={setIsAddSupplierOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Supplier
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Supplier</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="firstName" className="text-right">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={newSupplier.firstName}
                    onChange={(e) => setNewSupplier({ ...newSupplier, firstName: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="lastName" className="text-right">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={newSupplier.lastName}
                    onChange={(e) => setNewSupplier({ ...newSupplier, lastName: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phoneNumber" className="text-right">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    value={newSupplier.phoneNumber}
                    onChange={(e) => setNewSupplier({ ...newSupplier, phoneNumber: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="country" className="text-right">
                    Country
                  </Label>
                  <Input
                    id="country"
                    value={newSupplier.country}
                    onChange={(e) => setNewSupplier({ ...newSupplier, country: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="address" className="text-right">
                    Address
                  </Label>
                  <Input
                    id="address"
                    value={newSupplier.address}
                    onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="companyName" className="text-right">
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    value={newSupplier.companyName}
                    onChange={(e) => setNewSupplier({ ...newSupplier, companyName: e.target.value })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={handleAddSupplier}>Save</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Those are your business partners</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentSuppliers.map((supplier) => (
              <TableRow key={supplier.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedSuppliers.includes(supplier.id)}
                    onCheckedChange={() => handleCheckboxChange(supplier.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-semibold">{getInitials(supplier.name)}</span>
                    </div>
                    {supplier.name}
                  </div>
                </TableCell>
                <TableCell>{supplier.phoneNumber}</TableCell>
                <TableCell>{supplier.location}</TableCell>
                <TableCell>{supplier.orders}</TableCell>
                <TableCell>{supplier.sales}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between mt-4">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Suppliers