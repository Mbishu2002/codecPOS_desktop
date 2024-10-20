'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { ListFilter, Pencil, Trash2 } from "lucide-react"
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number;
  name: string;
  category: string;
  inventory: number;
  price: string;
  image: string;
  inStock: boolean;
  description: string; // Added description property
}

interface ProductListProps {
  onProductClick: (product: Product) => void;
  onAddProduct: () => void;
}

const products: Product[] = [
  { id: 1, name: 'Men Grey Hoodie', category: 'Hoodies', inventory: 96, price: '3,490 XAF', image: '/placeholder.svg', inStock: true, description: 'A comfortable and stylish hoodie for men.' },
  { id: 2, name: 'Women Striped T-Shirt', category: 'T-Shirt', inventory: 56, price: '3,490 XAF', image: '/placeholder.svg', inStock: true, description: 'A classic striped tee for women.' },
  { id: 3, name: 'Women White T-Shirt', category: 'T-Shirt', inventory: 78, price: '2,878 XAF', image: '/placeholder.svg', inStock: true, description: 'A simple yet elegant white tee for women.' },
  { id: 4, name: 'Men White T-Shirt', category: 'T-Shirt', inventory: 32, price: '2,878 XAF', image: '/placeholder.svg', inStock: true, description: 'A crisp white tee for men.' },
  { id: 5, name: 'Women Red T-Shirt', category: 'T-Shirt', inventory: 0, price: '2,878 XAF', image: '/placeholder.svg', inStock: false, description: 'A vibrant red tee for women.' },
  { id: 6, name: 'Men Black Hoodie', category: 'Hoodies', inventory: 120, price: '3,690 XAF', image: '/placeholder.svg', inStock: true, description: 'A sleek black hoodie for men.' },
  { id: 7, name: 'Women Blue Jeans', category: 'Jeans', inventory: 45, price: '4,990 XAF', image: '/placeholder.svg', inStock: true, description: 'A pair of stylish blue jeans for women.' },
  { id: 8, name: 'Men Khaki Pants', category: 'Pants', inventory: 60, price: '3,990 XAF', image: '/placeholder.svg', inStock: true, description: 'A pair of durable khaki pants for men.' },
  { id: 9, name: 'Women Floral Dress', category: 'Dresses', inventory: 25, price: '5,490 XAF', image: '/placeholder.svg', inStock: true, description: 'A beautiful floral dress for women.' },
  { id: 10, name: 'Men Denim Jacket', category: 'Jackets', inventory: 0, price: '6,990 XAF', image: '/placeholder.svg', inStock: false, description: 'A classic denim jacket for men.' },
  { id: 11, name: 'Women Leather Bag', category: 'Accessories', inventory: 15, price: '8,990 XAF', image: '/placeholder.svg', inStock: true, description: 'A stylish leather bag for women.' },
  { id: 12, name: 'Men Sneakers', category: 'Shoes', inventory: 40, price: '7,490 XAF', image: '/placeholder.svg', inStock: true, description: 'A pair of comfortable sneakers for men.' },
  { id: 13, name: 'Women Sunglasses', category: 'Accessories', inventory: 30, price: '2,490 XAF', image: '/placeholder.svg', inStock: true, description: 'A pair of trendy sunglasses for women.' },
  { id: 14, name: 'Men Polo Shirt', category: 'T-Shirt', inventory: 85, price: '3,290 XAF', image: '/placeholder.svg', inStock: true, description: 'A classic polo shirt for men.' },
  { id: 15, name: 'Women Cardigan', category: 'Sweaters', inventory: 0, price: '4,790 XAF', image: '/placeholder.svg', inStock: false, description: 'A cozy cardigan for women.' },
  { id: 16, name: 'Men Swim Shorts', category: 'Swimwear', inventory: 50, price: '2,990 XAF', image: '/placeholder.svg', inStock: true, description: 'A pair of comfortable swim shorts for men.' },
  { id: 17, name: 'Women Yoga Pants', category: 'Activewear', inventory: 70, price: '3,790 XAF', image: '/placeholder.svg', inStock: true, description: 'A pair of yoga pants for women.' },
  { id: 18, name: 'Men Formal Shirt', category: 'Shirts', inventory: 55, price: '4,290 XAF', image: '/placeholder.svg', inStock: true, description: 'A formal shirt for men.' },
]

export function ProductList({ onProductClick, onAddProduct }: ProductListProps) {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [view, setView] = useState<'list' | 'grid'>('list')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const isAllSelected = selectedProducts.length === products.length
  const toggleAllSelection = () => {
    setSelectedProducts(isAllSelected ? [] : products.map(p => p.id))
  }

  const openOverlay = (product: Product) => {
    setSelectedProduct(product);
  }

  const closeOverlay = () => {
    setSelectedProduct(null);
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

      {/* Desktop View */}
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
                onClick={() => onProductClick(product)} 
                className="cursor-pointer"
              >
                <TableCell>
                  <Checkbox 
                    checked={selectedProducts.includes(product.id)}
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

      {/* Mobile View */}
      <div className="md:hidden">
      {products.map((product) => (
          <Card key={product.id} className="mb-4 cursor-pointer w-full" onClick={() => openOverlay(product)}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={40} 
                  height={40} 
                  className="rounded mr-3" 
                />
                <div>
                  <h2 className="font-medium">{product.name}</h2>
                  <p className="text-gray-500">{product.category}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span>{product.inventory} in stock</span>
                <span>{product.price}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Overlay for additional product details */}
      {selectedProduct && (
        <Dialog open={!!selectedProduct} onOpenChange={closeOverlay}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedProduct.name}</DialogTitle>
            </DialogHeader>
            <p><strong>Category:</strong> {selectedProduct.category}</p>
            <p><strong>Inventory:</strong> {selectedProduct.inventory}</p>
            <p><strong>Price:</strong> {selectedProduct.price}</p>
            <Button onClick={closeOverlay}>Close</Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
