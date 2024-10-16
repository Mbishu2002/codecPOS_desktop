'use client'

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Pagination from "@/components/ui/pagination"
import { Search, FileDown, Plus, Pencil, Trash2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type StockMovement = {
  id: number
  type: 'Added' | 'Sold' | 'Returned' | 'Adjustment'
  quantity: number
  date: string
  supplier: string
  reason: string
  performedBy: string
}

const stockMovementsData: StockMovement[] = [
  { id: 1, type: "Added", quantity: 100, date: "2023-06-01", supplier: "Supplier A", reason: "Restocking", performedBy: "John Doe" },
  { id: 2, type: "Sold", quantity: 50, date: "2023-06-02", supplier: "-", reason: "Customer Purchase", performedBy: "Jane Smith" },
  { id: 3, type: "Returned", quantity: 10, date: "2023-06-03", supplier: "-", reason: "Defective Product", performedBy: "Mike Johnson" },
  { id: 4, type: "Adjustment", quantity: -5, date: "2023-06-04", supplier: "-", reason: "Inventory Count", performedBy: "Sarah Brown" },
  { id: 5, type: "Added", quantity: 200, date: "2023-06-05", supplier: "Supplier B", reason: "New Stock", performedBy: "John Doe" },
]

export function StockMovementTable() {
  const [movements] = useState<StockMovement[]>(stockMovementsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedMovements, setSelectedMovements] = useState<number[]>([])
  const [selectedMovement, setSelectedMovement] = useState<StockMovement | null>(null)
  const itemsPerPage = 10

  const filteredMovements = movements.filter(movement =>
    Object.values(movement).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const pageCount = Math.ceil(filteredMovements.length / itemsPerPage)
  const paginatedMovements = filteredMovements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const toggleMovementSelection = (movementId: number) => {
    setSelectedMovements(prevSelected =>
      prevSelected.includes(movementId)
        ? prevSelected.filter(id => id !== movementId)
        : [...prevSelected, movementId]
    )
  }

  const toggleAllMovements = () => {
    setSelectedMovements(
      selectedMovements.length === paginatedMovements.length
        ? []
        : paginatedMovements.map(m => m.id)
    )
  }

  const openOverlay = (movement: StockMovement) => {
    setSelectedMovement(movement);
  }

  const closeOverlay = () => {
    setSelectedMovement(null);
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Stock Movement Tracking</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline">
              <FileDown className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button onClick={() => { /* Add movement logic */ }}>
              <Plus className="mr-2 h-4 w-4" />
              Add Movement
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center py-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Movements</SelectItem>
                <SelectItem value="added">Added</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="returned">Returned</SelectItem>
                <SelectItem value="adjustment">Adjustment</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-2"
            />
            <Button variant="ghost" className="ml-2">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox
                      checked={selectedMovements.length === paginatedMovements.length}
                      onCheckedChange={toggleAllMovements}
                    />
                  </TableHead>
                  <TableHead>Movement Type</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Performed By</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedMovements.map((movement) => (
                  <TableRow key={movement.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedMovements.includes(movement.id)}
                        onCheckedChange={() => toggleMovementSelection(movement.id)}
                      />
                    </TableCell>
                    <TableCell>{movement.type}</TableCell>
                    <TableCell>{movement.quantity}</TableCell>
                    <TableCell>{movement.date}</TableCell>
                    <TableCell>{movement.supplier}</TableCell>
                    <TableCell>{movement.reason}</TableCell>
                    <TableCell>{movement.performedBy}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => openOverlay(movement)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4">
            <Pagination 
              currentPage={currentPage} 
              totalPages={pageCount} 
              onPageChange={setCurrentPage} 
            />
          </div>
        </CardContent>
      </Card>

      {/* Mobile View */}
      <div className="md:hidden">
        {movements.map((movement) => (
          <Card key={movement.id} className="mb-4 cursor-pointer w-full" onClick={() => openOverlay(movement)}>
            <CardContent className="flex flex-col p-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Type: {movement.type}</span>
                <span className="text-sm text-gray-500">Date: {movement.date}</span>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-sm text-gray-500">Quantity: {movement.quantity}</p>
                <p className="text-sm text-gray-500">Performed By: {movement.performedBy}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Overlay for additional movement details */}
      {selectedMovement && (
        <Dialog open={!!selectedMovement} onOpenChange={closeOverlay}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Movement Details</DialogTitle>
            </DialogHeader>
            <p><strong>Type:</strong> {selectedMovement.type}</p>
            <p><strong>Quantity:</strong> {selectedMovement.quantity}</p>
            <p><strong>Date:</strong> {selectedMovement.date}</p>
            <p><strong>Supplier:</strong> {selectedMovement.supplier}</p>
            <p><strong>Reason:</strong> {selectedMovement.reason}</p>
            <p><strong>Performed By:</strong> {selectedMovement.performedBy}</p>
            <Button onClick={closeOverlay}>Close</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
