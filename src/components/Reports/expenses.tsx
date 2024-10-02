"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Search, Plus, Edit, Trash2 } from "lucide-react"

// Mock data for expenses
const initialExpenses = [
  { id: 1, date: "2023-01-01", description: "Office Supplies for cleaning", amountPaid: "4,000 XAF", expenseType: "Office Supplies", paymentMethod: "MTN MOMO" },
  { id: 2, date: "2023-01-01", description: "Salary Payment", amountPaid: "4,000 XAF", expenseType: "Office", paymentMethod: "ORANGE MONEY" },
  // Add more mock data here...
]

// Mock data for expense types
const initialExpenseTypes = [
  { id: 1, type: "Salary Payment", description: "Income from selling products" },
  { id: 2, type: "Salary Payment", description: "Income from providing service Revenue" },
  // Add more mock data here...
]

const Expenses = () => {
  const [view, setView] = useState("expenses") // 'expenses' or 'expenseTypes'
  const [expenses, setExpenses] = useState(initialExpenses)
  const [expenseTypes, setExpenseTypes] = useState(initialExpenseTypes)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedItems, setSelectedItems] = useState([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newItem, setNewItem] = useState({})

  const itemsPerPage = 10
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const filteredItems = view === "expenses"
    ? expenses.filter(expense =>
        expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.expenseType.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : expenseTypes.filter(type =>
        type.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        type.description.toLowerCase().includes(searchTerm.toLowerCase())
      )

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleCheckboxChange = (id) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const handleAddItem = () => {
    if (view === "expenses") {
      setExpenses([...expenses, { ...newItem, id: expenses.length + 1 }])
    } else {
      setExpenseTypes([...expenseTypes, { ...newItem, id: expenseTypes.length + 1 }])
    }
    setIsAddDialogOpen(false)
    setNewItem({})
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{view === "expenses" ? "Expenses" : "Expense Type"}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setView(view === "expenses" ? "expenseTypes" : "expenses")}>
            {view === "expenses" ? "View Expense Types" : "View Expenses"}
          </Button>
          <Button variant="outline">Export</Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add {view === "expenses" ? "Expense" : "Expense Type"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New {view === "expenses" ? "Expense" : "Expense Type"}</DialogTitle>
              </DialogHeader>
              {view === "expenses" ? (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newItem.date || ""}
                      onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">Description</Label>
                    <Input
                      id="description"
                      value={newItem.description || ""}
                      onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="amountPaid" className="text-right">Amount Paid</Label>
                    <Input
                      id="amountPaid"
                      value={newItem.amountPaid || ""}
                      onChange={(e) => setNewItem({ ...newItem, amountPaid: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="expenseType" className="text-right">Expense Type</Label>
                    <Input
                      id="expenseType"
                      value={newItem.expenseType || ""}
                      onChange={(e) => setNewItem({ ...newItem, expenseType: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="paymentMethod" className="text-right">Payment Method</Label>
                    <Input
                      id="paymentMethod"
                      value={newItem.paymentMethod || ""}
                      onChange={(e) => setNewItem({ ...newItem, paymentMethod: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">Expense Type</Label>
                    <Input
                      id="type"
                      value={newItem.type || ""}
                      onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">Description</Label>
                    <Input
                      id="description"
                      value={newItem.description || ""}
                      onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
              )}
              <Button onClick={handleAddItem}>Add {view === "expenses" ? "Expense" : "Expense Type"}</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Those are your business Expenses</h2>
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
              {view === "expenses" ? (
                <>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount Paid</TableHead>
                  <TableHead>Expense Type</TableHead>
                  <TableHead>Payment Method</TableHead>
                </>
              ) : (
                <>
                  <TableHead>Expense Type</TableHead>
                  <TableHead>Description</TableHead>
                </>
              )}
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={() => handleCheckboxChange(item.id)}
                  />
                </TableCell>
                {view === "expenses" ? (
                  <>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.amountPaid}</TableCell>
                    <TableCell>{item.expenseType}</TableCell>
                    <TableCell>{item.paymentMethod}</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.description}</TableCell>
                  </>
                )}
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

export default Expenses