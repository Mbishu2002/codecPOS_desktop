"use client"

//import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data
const customers = [
    { id: 1, name: "William Johnson", phone: "237674537760", orders: 5, spent: "4,056 XAF" },
    { id: 2, name: "Laura Smith", phone: "237674537771", orders: 12, spent: "4,056 XAF" },
    { id: 3, name: "David Brown", phone: "237674534573", orders: 6, spent: "26,000 XAF" },
    { id: 4, name: "Alice Taylor", phone: "237677734537", orders: 3, spent: "4,056 XAF" },
    { id: 5, name: "Robert Davis", phone: "South Olestad", orders: 15, spent: "26,000 XAF" },
    { id: 6, name: "Olivia Wilson", phone: "237674537773", orders: 12, spent: "4,056 XAF" },
    { id: 7, name: "William Anderson", phone: "237637760745", orders: 3, spent: "4,056 XAF" },
    { id: 8, name: "Daniel Martinez", phone: "237674537760", orders: 7, spent: "1,339 XAF" },
  ]
  
interface Customer {
  id: number;
  name: string;
  phone: string;
  orders: number;
  spent: string;
}

interface CustomerListProps {
  onCustomerClick: (customer: Customer) => void;
  onAddCustomer: () => void;
}

export function CustomerList({ onCustomerClick, onAddCustomer }: CustomerListProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Customers</h1>
        <Button onClick={onAddCustomer}>Add Customer</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Spent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} onClick={() => onCustomerClick(customer)} className="cursor-pointer">
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-3">
                      <Avatar className="bg-blue-100 text-blue-600">
                        <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span>{customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.spent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}