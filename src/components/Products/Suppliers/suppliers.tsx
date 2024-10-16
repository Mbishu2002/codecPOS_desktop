"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Search, Plus, Edit, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Function to get initials from a name
const getInitials = (name: string) => {
  return name.split(' ').map(word => word[0]).join('').toUpperCase();
}

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
  const itemsPerPage = 10
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newSupplier, setNewSupplier] = useState({ id: 0, name: "", phoneNumber: "", location: "", orders: 0, sales: "" })
  const [isEditing, setIsEditing] = useState(false)

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.phoneNumber.includes(searchTerm) ||
    supplier.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const currentSuppliers = filteredSuppliers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  const totalPages = Math.ceil(filteredSuppliers.length / itemsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleAddSupplier = () => {
    if (isEditing) {
      setSuppliers(suppliers.map(supplier => supplier.id === newSupplier.id ? newSupplier : supplier));
    } else {
      setSuppliers([...suppliers, { ...newSupplier, id: suppliers.length + 1 }]);
    }
    resetForm();
  }

  const handleEditSupplier = (supplier: any) => {
    setNewSupplier(supplier);
    setIsEditing(true);
    setIsDialogOpen(true);
  }

  const handleDeleteSupplier = (id: number) => {
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
  }

  const resetForm = () => {
    setNewSupplier({ id: 0, name: "", phoneNumber: "", location: "", orders: 0, sales: "" });
    setIsEditing(false);
    setIsDialogOpen(false);
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Suppliers</h1>
        <div className="flex gap-2">
          <Button variant="blue" onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Supplier
          </Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>

      {/* Search Box */}
      <div className="mb-4 relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block bg-white p-6 rounded-lg shadow">
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
                  <Checkbox />
                </TableCell>
                <TableCell>
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
                    <Button variant="ghost" size="icon" onClick={() => handleEditSupplier(supplier)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteSupplier(supplier.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {suppliers.map((supplier) => (
          <Card key={supplier.id} className="mb-4 cursor-pointer w-full" onClick={() => handleEditSupplier(supplier)}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <span className="text-blue-600 font-semibold">{getInitials(supplier.name)}</span>
                </div>
                <div>
                  <h2 className="font-medium">{supplier.name}</h2>
                  <p className="text-gray-500">{supplier.phoneNumber}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span>{supplier.location}</span>
                <span>{supplier.sales}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button key={page} variant={currentPage === page ? "default" : "outline"} onClick={() => handlePageChange(page)}>
              {page}
            </Button>
          ))}
        </div>
        <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Add Supplier Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Supplier" : "Add Supplier"}</DialogTitle>
          </DialogHeader>
          <Label>Name</Label>
          <Input
            type="text"
            value={newSupplier.name}
            onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
            className="mb-4"
          />
          <Label>Phone Number</Label>
          <Input
            type="text"
            value={newSupplier.phoneNumber}
            onChange={(e) => setNewSupplier({ ...newSupplier, phoneNumber: e.target.value })}
            className="mb-4"
          />
          <Label>Location</Label>
          <Input
            type="text"
            value={newSupplier.location}
            onChange={(e) => setNewSupplier({ ...newSupplier, location: e.target.value })}
            className="mb-4"
          />
          <Label>Orders</Label>
          <Input
            type="number"
            value={newSupplier.orders}
            onChange={(e) => setNewSupplier({ ...newSupplier, orders: Number(e.target.value) })}
            className="mb-4"
          />
          <Label>Sales</Label>
          <Input
            type="text"
            value={newSupplier.sales}
            onChange={(e) => setNewSupplier({ ...newSupplier, sales: e.target.value })}
            className="mb-4"
          />
          <div className="flex justify-end">
            <Button variant="outline" onClick={resetForm} className="mr-2">Cancel</Button>
            <Button onClick={handleAddSupplier}>{isEditing ? "Update Supplier" : "Add Supplier"}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Suppliers
