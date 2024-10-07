"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Search, Plus, Edit, Trash2 } from "lucide-react"

// Remove unused imports
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for income entries
const initialIncomeEntries = [
  { id: 1, date: "2023-01-01", description: "Product Sales", amountPaid: "4,000 XAF", source: "Sales" },
  { id: 2, date: "2023-01-01", description: "Service Revenue", amountPaid: "70,000 XAF", source: "Services" },
  { id: 3, date: "2023-01-02", description: "Consulting Fee", amountPaid: "50,000 XAF", source: "Services" },
  { id: 4, date: "2023-01-03", description: "Product Sales", amountPaid: "6,000 XAF", source: "Sales" },
  { id: 5, date: "2023-01-04", description: "Subscription Revenue", amountPaid: "20,000 XAF", source: "Subscriptions" },
  // Add more mock data here...
]

// Mock data for income types
const initialIncomeTypes = [
  { id: 1, type: "Sales", description: "Income from selling products" },
  { id: 2, type: "Services", description: "Income from providing service Revenue" },
  { id: 3, type: "Subscriptions", description: "Income from recurring subscriptions" },
  // Add more mock data here...
]

const Income = () => {
  const [view, setView] = useState("income") // 'income' or 'incomeTypes'
  const [incomeEntries, setIncomeEntries] = useState(initialIncomeEntries)
  const [incomeTypes, setIncomeTypes] = useState(initialIncomeTypes)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedItems, setSelectedItems] = useState([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newItem, setNewItem] = useState({})

  const itemsPerPage = 10
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const filteredItems = view === "income"
    ? incomeEntries.filter(entry =>
        entry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.source.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : incomeTypes.filter(type =>
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
    if (view === "income") {
      setIncomeEntries([...incomeEntries, { ...newItem, id: incomeEntries.length + 1 }])
    } else {
      setIncomeTypes([...incomeTypes, { ...newItem, id: incomeTypes.length + 1 }])
    }
    setIsAddDialogOpen(false)
    setNewItem({})
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{view === "income" ? "Income" : "Income Type"}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setView(view === "income" ? "incomeTypes" : "income")}>
            {view === "income" ? "View Income Types" : "View Income"}
          </Button>
          <Button variant="outline">Export</Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add {view === "income" ? "Income" : "Income Type"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New {view === "income" ? "Income" : "Income Type"}</DialogTitle>
              </DialogHeader>
              {view === "income" ? (
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
                    <Label htmlFor="source" className="text-right">Source</Label>
                    <Input
                      id="source"
                      value={newItem.source || ""}
                      onChange={(e) => setNewItem({ ...newItem, source: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="type" className="text-right">Income Type</Label>
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
              <Button onClick={handleAddItem}>Add {view === "income" ? "Income" : "Income Type"}</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Analyze your business Income</h2>
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
              {view === "income" ? (
                <>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount Paid</TableHead>
                  <TableHead>Source</TableHead>
                </>
              ) : (
                <>
                  <TableHead>Income Type</TableHead>
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
                {view === "income" ? (
                  <>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.amountPaid}</TableCell>
                    <TableCell>{item.source}</TableCell>
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

export default Income