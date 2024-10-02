'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { PenIcon, TrashIcon } from 'lucide-react'
import {DeleteConfirmationModal} from '@/components/ui/Modal/delete-confrimation-modal'
import { EmptyState } from '@/components/Orders/Empty/NoOrders'

type Order = {
  id: string
  date: string
  deliveryStatus: 'Delivered' | 'Pending' | 'Failed'
  amountPaid: string
  changeGiven: string
  paymentStatus: 'Paid' | 'Pending'
  netAmountPaid: string
}

const orders: Order[] = [
  { id: '#12512B', date: 'May 5, 4:20 PM', deliveryStatus: 'Delivered', amountPaid: '4,000 XAF', changeGiven: '2,000 XAF', paymentStatus: 'Paid', netAmountPaid: '2,000 XAF' },
  { id: '#12523C', date: 'May 5, 4:15 PM', deliveryStatus: 'Delivered', amountPaid: '23,000 XAF', changeGiven: '1,000 XAF', paymentStatus: 'Paid', netAmountPaid: '22,000 XAF' },
  { id: '#51232A', date: 'May 5, 4:15 PM', deliveryStatus: 'Delivered', amountPaid: '551 XAF', changeGiven: '-', paymentStatus: 'Paid', netAmountPaid: '551 XAF' },
  { id: '#23534D', date: 'May 5, 4:12 PM', deliveryStatus: 'Delivered', amountPaid: '2,974 XAF', changeGiven: '-', paymentStatus: 'Paid', netAmountPaid: '2,974 XAF' },
  { id: '#51323C', date: 'May 5, 4:12 PM', deliveryStatus: 'Delivered', amountPaid: '2,306 XAF', changeGiven: '-', paymentStatus: 'Paid', netAmountPaid: '2,306 XAF' },
  { id: '#35622A', date: 'May 5, 4:12 PM', deliveryStatus: 'Delivered', amountPaid: '8,744 XAF', changeGiven: '-', paymentStatus: 'Paid', netAmountPaid: '8,744 XAF' },
  { id: '#34232D', date: 'May 5, 4:10 PM', deliveryStatus: 'Pending', amountPaid: '4,455 XAF', changeGiven: '-', paymentStatus: 'Paid', netAmountPaid: '4,455 XAF' },
  { id: '#56212D', date: 'May 5, 4:08 PM', deliveryStatus: 'Pending', amountPaid: '3,679 XAF', changeGiven: '-', paymentStatus: 'Paid', netAmountPaid: '3,679 XAF' },
  { id: '#76543E', date: 'May 5, 4:08 PM', deliveryStatus: 'Pending', amountPaid: '2,878 XAF', changeGiven: '-', paymentStatus: 'Paid', netAmountPaid: '2,878 XAF' },
  { id: '#12512B', date: 'May 5, 4:05 PM', deliveryStatus: 'Pending', amountPaid: '9,646 XAF', changeGiven: '--', paymentStatus: 'Paid', netAmountPaid: '9,646 XAF' },
  { id: '#12523C', date: 'May 5, 4:05 PM', deliveryStatus: 'Failed', amountPaid: '4,000 XAF', changeGiven: '2,000 XAF', paymentStatus: 'Paid', netAmountPaid: '2,000 XAF' },
  { id: '#23534D', date: 'May 5, 4:04 PM', deliveryStatus: 'Pending', amountPaid: '4,000 XAF', changeGiven: '2,000 XAF', paymentStatus: 'Pending', netAmountPaid: '2,000 XAF' },
  { id: '#12523C', date: 'May 5, 4:04 PM', deliveryStatus: 'Failed', amountPaid: '10,000 XAF', changeGiven: '3,000 XAF', paymentStatus: 'Pending', netAmountPaid: '7,000 XAF' },
]

interface OrderListProps {
  onOrderClick: (order: Order) => void;
  onAddOrder: () => void;
}

export function OrderList({ onOrderClick, onAddOrder }: OrderListProps) {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [orderToDelete, setOrderToDelete] = useState<string | null>(null)

  const toggleOrderSelection = (orderId: string) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    )
  }

  const isOrderSelected = (orderId: string) => selectedOrders.includes(orderId)

  const handleDeleteClick = () => {
    if (selectedOrders.length > 0) {
      setOrderToDelete(selectedOrders[0])
      setIsDeleteModalOpen(true)
    }
  }

  const handleDeleteConfirm = () => {
    // Implement delete logic here
    console.log(`Deleting order: ${orderToDelete}`)
    setIsDeleteModalOpen(false)
    setOrderToDelete(null)
    // Reset selected orders after deletion
    setSelectedOrders([])
  }

  if (orders.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="space-x-2">
          <Button variant="outline">Export</Button>
          <Button onClick={onAddOrder}>+ Add Order</Button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="w-48">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative w-64">
          <Input type="text" placeholder="Search..." className="pl-10" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <PenIcon className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleDeleteClick}
            disabled={selectedOrders.length === 0}
          >
            <TrashIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Delivery Status</TableHead>
              <TableHead>Amount Paid</TableHead>
              <TableHead>Change Given</TableHead>
              <TableHead>Payment status</TableHead>
              <TableHead>Net Amount Paid</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index} onClick={() => onOrderClick(order)} className="cursor-pointer">
                <TableCell>
                  <Checkbox
                    checked={isOrderSelected(order.id)}
                    onCheckedChange={() => toggleOrderSelection(order.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">
                  <Link href={`/orders/${order.id}`}>{order.id}</Link>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${order.deliveryStatus === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.deliveryStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'}`}>
                    {order.deliveryStatus}
                  </span>
                </TableCell>
                <TableCell>{order.amountPaid}</TableCell>
                <TableCell>{order.changeGiven}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${order.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {order.paymentStatus}
                  </span>
                </TableCell>
                <TableCell>{order.netAmountPaid}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  )
}