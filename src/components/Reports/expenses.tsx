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

// Mock data for expenses
const initialExpenses = [
  { id: 1, date: "2023-01-01", description: "Office Supplies", amountPaid: "4,000 XAF", expenseType: "Supplies", paymentMethod: "Cash" },
  { id: 2, date: "2023-01-02", description: "Internet Bill", amountPaid: "70,000 XAF", expenseType: "Utilities", paymentMethod: "Bank Transfer" },
  // Add more mock data here...
]

const Expenses = () => {
  const [expenses, setExpenses] = useState(initialExpenses)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredItems = expenses.filter(item =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Expenses</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Add Expense
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
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount Paid</TableHead>
              <TableHead>Expense Type</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.amountPaid}</TableCell>
                <TableCell>{item.expenseType}</TableCell>
                <TableCell>{item.paymentMethod}</TableCell>
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

      {/* Mobile View */}
      <div className="md:hidden">
        {expenses.map((item) => (
          <Card key={item.id} className="mb-4 cursor-pointer w-full">
            <CardContent className="flex flex-col p-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Date: {item.date}</span>
                <span className="text-sm text-gray-500">Amount: {item.amountPaid}</span>
              </div>
              <div className="mt-2">
                <p className="font-medium">{item.description}</p>
                <p className="text-gray-500">Type: {item.expenseType}</p>
                <p className="text-gray-500">Payment: {item.paymentMethod}</p>
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
    </div>
  )
}

export default Expenses
