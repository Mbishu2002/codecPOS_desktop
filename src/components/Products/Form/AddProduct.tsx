'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Camera } from 'lucide-react'

interface AddProductProps {
  onBack: () => void;
}

export function AddProduct({ onBack }: AddProductProps) {
  //const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedShops, setSelectedShops] = useState<string[]>(['Shop3 New'])

  /*const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  } */

  const handleShopChange = (shop: string) => {
    setSelectedShops(prev => 
      prev.includes(shop) 
        ? prev.filter(s => s !== shop)
        : [...prev, shop]
    )
  }

  return (
    <>
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ChevronLeft className="mr-2 h-5 w-5" /> Back
      </Button>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold flex items-center text-gray-800">
          Add Product
        </h1>
        <div className="space-x-2">
          <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50">Cancel</Button>
          <Button className="bg-[#1A7DC4] hover:bg-[#1565a0]">Save</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="productName" className="text-sm font-medium text-gray-700">Product Name</Label>
                  <Input id="productName" placeholder="Summer T-Shirt" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="productDescription" className="text-sm font-medium text-gray-700">Product Description</Label>
                  <Textarea id="productDescription" placeholder="Product description" className="mt-1 h-32" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">Featured Image</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Button variant="outline" className="w-full text-[#1A7DC4] border-[#1A7DC4] hover:bg-[#1A7DC4] hover:text-white">Add File</Button>
                    <p className="text-sm text-gray-500 mt-2">Or drag and drop files</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">Images</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Button variant="outline" className="w-full text-[#1A7DC4] border-[#1A7DC4] hover:bg-[#1A7DC4] hover:text-white">Add File</Button>
                    <p className="text-sm text-gray-500 mt-2">Or drag and drop files</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Price</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="productPrice" className="text-sm font-medium text-gray-700">Product Price</Label>
                  <Input id="productPrice" placeholder="Enter price" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="productType" className="text-sm font-medium text-gray-700">Product Type</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Product Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="digital">Digital Product</SelectItem>
                      <SelectItem value="service">Service</SelectItem>
                      <SelectItem value="type3">Product Type 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="discountPrice" className="text-sm font-medium text-gray-700">Discount Price</Label>
                  <Input id="discountPrice" placeholder="Discount Price" className="mt-1" />
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <Switch id="tax" />
                <Label htmlFor="tax" className="text-sm font-medium text-gray-700">Add tax for this product</Label>
              </div>
              <p className="text-sm text-gray-500 mt-2">This is digital item</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Categories</h2>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category1">Category 1</SelectItem>
                  <SelectItem value="category2">Category 2</SelectItem>
                  <SelectItem value="category3">Category 3</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Select Shop</h2>
              <div className="space-y-2">
                {['Shop Name 1', 'Myshop2', 'Shop3 New', 'Malingo Shop', 'Douala Shop'].map((shop) => (
                  <div key={shop} className="flex items-center">
                    <Checkbox
                      id={shop}
                      checked={selectedShops.includes(shop)}
                      onCheckedChange={() => handleShopChange(shop)}
                      className="border-gray-300 text-[#1A7DC4] focus:ring-[#1A7DC4]"
                    />
                    <label htmlFor={shop} className="ml-2 text-sm font-medium text-gray-700">
                      {shop}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Scan</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Camera className="mx-auto mb-2 text-gray-400" size={24} />
                <p className="text-sm text-gray-500">Scan Image</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}