"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Search, Plus, Edit, Trash2 } from "lucide-react"

// Mock data for returns
const initialReturns = [
  { id: "#12512B", date: "May 5, 4:20 PM", status: "Completed", customerName: "Aurelie Mballa", reason: "Wrong Item" },
  { id: "#12523C", date: "May 5, 4:15 PM", status: "Pending", customerName: "Jean-Claude Ndombe", reason: "Wrong Item" },
  { id: "#51232A", date: "May 5, 4:15 PM", status: "Completed", customerName: "Hervé Kouassi", reason: "Defective" },
  { id: "#23534D", date: "May 5, 4:12 PM", status: "Completed", customerName: "Alejandro Holland", reason: "Defective" },
  { id: "#51323C", date: "May 5, 4:12 PM", status: "Pending", customerName: "Franck Ekollo", reason: "Wrong Item" },
  { id: "#35622A", date: "May 5, 4:12 PM", status: "Completed", customerName: "Alain Toko", reason: "Wrong Item" },
  { id: "#34232D", date: "May 5, 4:10 PM", status: "Pending", customerName: "Chantal Ekani", reason: "Wrong Item" },
  { id: "#67890E", date: "May 5, 4:05 PM", status: "Completed", customerName: "Sophie Nguyen", reason: "Defective" },
  { id: "#78901F", date: "May 5, 4:00 PM", status: "Pending", customerName: "Omar Hassan", reason: "Wrong Size" },
  { id: "#89012G", date: "May 5, 3:55 PM", status: "Completed", customerName: "Maria Garcia", reason: "Wrong Item" },
  { id: "#90123H", date: "May 5, 3:50 PM", status: "Pending", customerName: "Yuki Tanaka", reason: "Defective" },
  { id: "#01234I", date: "May 5, 3:45 PM", status: "Completed", customerName: "Liam O'Connor", reason: "Wrong Size" },
  { id: "#12345J", date: "May 5, 3:40 PM", status: "Pending", customerName: "Fatima Ali", reason: "Wrong Item" },
  { id: "#23456K", date: "May 5, 3:35 PM", status: "Completed", customerName: "Carlos Rodriguez", reason: "Defective" },
  { id: "#34567L", date: "May 5, 3:30 PM", status: "Pending", customerName: "Anna Kowalski", reason: "Wrong Size" },
]

const Returns = () => {
  const [returns, setReturns] = useState(initialReturns)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedReturns, setSelectedReturns] = useState([])
  const [isAddReturnOpen, setIsAddReturnOpen] = useState(false)
  const [newReturn, setNewReturn] = useState({ id: "", date: "", status: "", customerName: "", reason: "" })

  const itemsPerPage = 7
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const filteredReturns = returns.filter(
    (returnItem) =>
      returnItem.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      returnItem.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      returnItem.reason.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const currentReturns = filteredReturns.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredReturns.length / itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleCheckboxChange = (returnId) => {
    setSelectedReturns((prev) =>
      prev.includes(returnId)
        ? prev.filter((id) => id !== returnId)
        : [...prev, returnId]
    )
  }

  const handleAddReturn = () => {
    const timestamp = new Date().toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    })
    const newReturnWithId = {
      ...newReturn,
      id: `#${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      date: timestamp
    }
    setReturns([newReturnWithId, ...returns])
    setIsAddReturnOpen(false)
    setNewReturn({ id: "", date: "", status: "", customerName: "", reason: "" })
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Returns</h1>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Dialog open={isAddReturnOpen} onOpenChange={setIsAddReturnOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Return
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Return</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="customerName" className="text-right">
                    Customer Name
                  </Label>
                  <Input
                    id="customerName"
                    value={newReturn.customerName}
                    onChange={(e) => setNewReturn({ ...newReturn, customerName: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <Select
                    value={newReturn.status}
                    onValueChange={(value) => setNewReturn({ ...newReturn, status: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="reason" className="text-right">
                    Reason
                  </Label>
                  <Select
                    value={newReturn.reason}
                    onValueChange={(value) => setNewReturn({ ...newReturn, reason: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Wrong Item">Wrong Item</SelectItem>
                      <SelectItem value="Defective">Defective</SelectItem>
                      <SelectItem value="Wrong Size">Wrong Size</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={handleAddReturn}>Add Return</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Those are your business Returns</h2>
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
        <div className="overflow-x-auto"> {/* Added scrollable area for the table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Return ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentReturns.map((returnItem) => (
                <TableRow key={returnItem.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedReturns.includes(returnItem.id)}
                      onCheckedChange={() => handleCheckboxChange(returnItem.id)}
                    />
                  </TableCell>
                  <TableCell>{returnItem.id}</TableCell>
                  <TableCell>{returnItem.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(returnItem.status)}`}>
                      {returnItem.status}
                    </span>
                  </TableCell>
                  <TableCell>{returnItem.customerName}</TableCell>
                  <TableCell>{returnItem.reason}</TableCell>
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
        </div>
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

export default Returns;