'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ListFilter, Pencil, Trash2, Edit } from "lucide-react"
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  category: string;
  inventory: number;
  price: string;
  image: string;
  inStock: boolean;
}

interface ProductListProps {
  onProductClick: (product: Product) => void;
  onAddProduct: () => void;
}

const products = [
  { id: 1, name: 'Men Grey Hoodie', category: 'Hoodies', inventory: 96, price: '3,490 XAF', image: '/placeholder.svg', inStock: true },
  { id: 2, name: 'Women Striped T-Shirt', category: 'T-Shirt', inventory: 56, price: '3,490 XAF', image: '/placeholder.svg', inStock: true },
  { id: 3, name: 'Women White T-Shirt', category: 'T-Shirt', inventory: 78, price: '2,878 XAF', image: '/placeholder.svg', inStock: true },
  { id: 4, name: 'Men White T-Shirt', category: 'T-Shirt', inventory: 32, price: '2,878 XAF', image: '/placeholder.svg', inStock: true },
  { id: 5, name: 'Women Red T-Shirt', category: 'T-Shirt', inventory: 0, price: '2,878 XAF', image: '/placeholder.svg', inStock: false },
  { id: 6, name: 'Men Black Hoodie', category: 'Hoodies', inventory: 120, price: '3,690 XAF', image: '/placeholder.svg', inStock: true },
  { id: 7, name: 'Women Blue Jeans', category: 'Jeans', inventory: 45, price: '4,990 XAF', image: '/placeholder.svg', inStock: true },
  { id: 8, name: 'Men Khaki Pants', category: 'Pants', inventory: 60, price: '3,990 XAF', image: '/placeholder.svg', inStock: true },
  { id: 9, name: 'Women Floral Dress', category: 'Dresses', inventory: 25, price: '5,490 XAF', image: '/placeholder.svg', inStock: true },
  { id: 10, name: 'Men Denim Jacket', category: 'Jackets', inventory: 0, price: '6,990 XAF', image: '/placeholder.svg', inStock: false },
  { id: 11, name: 'Women Leather Bag', category: 'Accessories', inventory: 15, price: '8,990 XAF', image: '/placeholder.svg', inStock: true },
  { id: 12, name: 'Men Sneakers', category: 'Shoes', inventory: 40, price: '7,490 XAF', image: '/placeholder.svg', inStock: true },
  { id: 13, name: 'Women Sunglasses', category: 'Accessories', inventory: 30, price: '2,490 XAF', image: '/placeholder.svg', inStock: true },
  { id: 14, name: 'Men Polo Shirt', category: 'T-Shirt', inventory: 85, price: '3,290 XAF', image: '/placeholder.svg', inStock: true },
  { id: 15, name: 'Women Cardigan', category: 'Sweaters', inventory: 0, price: '4,790 XAF', image: '/placeholder.svg', inStock: false },
  { id: 16, name: 'Men Swim Shorts', category: 'Swimwear', inventory: 50, price: '2,990 XAF', image: '/placeholder.svg', inStock: true },
  { id: 17, name: 'Women Yoga Pants', category: 'Activewear', inventory: 70, price: '3,790 XAF', image: '/placeholder.svg', inStock: true },
  { id: 18, name: 'Men Formal Shirt', category: 'Shirts', inventory: 55, price: '4,290 XAF', image: '/placeholder.svg', inStock: true },
]
  /* eslint-disable @typescript-eslint/no-unused-vars */

export function ProductList({ onProductClick, onAddProduct }: ProductListProps) {
  const [  /* eslint-disable @typescript-eslint/no-unused-vars */
    selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [view, setView] = useState<'list' | 'grid'>('list')

  const toggleProductSelection = (productId: number) => {   /* eslint-disable @typescript-eslint/no-unused-vars */

    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const isAllSelected = selectedProducts.length === products.length
  const toggleAllSelection = () => { /* eslint-disable @typescript-eslint/no-unused-vars */
    setSelectedProducts(isAllSelected ? [] : products.map(p => p.id))
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <div className="space-x-2">
          <Button variant="outline">Export</Button>
          <Button onClick={onAddProduct}>+ Add Product</Button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px] border-gray-300 text-gray-600">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="in-stock">In Stock</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Input 
              placeholder="Search..." 
              className="pl-10 w-64 border-gray-300 text-gray-600"
            />
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
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className={`border-gray-300 ${view === 'list' ? 'bg-gray-100' : ''}`}
            onClick={() => setView('list')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6H21" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H21" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 18H21" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H3.01" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12H3.01" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H3.01" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className={`border-gray-300 ${view === 'grid' ? 'bg-gray-100' : ''}`}
            onClick={() => setView('grid')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 14H3" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 10H3" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 6H3" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 18H3" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          <Button variant="outline" size="icon" className="border-gray-300">
            <ListFilter className="h-4 w-4 text-gray-600" />
          </Button>
          <Button variant="outline" size="icon" className="border-gray-300">
            <Pencil className="h-4 w-4 text-gray-600" />
          </Button>
          <Button variant="outline" size="icon" className="border-gray-300">
            <Trash2 className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox 
                  checked={isAllSelected}
                  onCheckedChange={toggleAllSelection}
                />
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Inventory</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow 
                key={product.id} 
                onClick={() => onProductClick({...product, id: product.id.toString()})} 
                className="cursor-pointer"
              >
                <TableCell>
                  <Checkbox 
                    checked={ /* eslint-disable @typescript-eslint/no-unused-vars */
                       selectedProducts.includes(product.id)}
                    onCheckedChange={() => toggleProductSelection(product.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      width={40} // Specify the width
                      height={40} // Specify the height
                      className="rounded mr-3" 
                    />
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.category}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.inventory} in stock</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}