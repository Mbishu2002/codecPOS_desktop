"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import Image from 'next/image'

interface Category {
  id: string;
  name: string;
  image?: File | null | string;
  description?: string;
  itemCount?: number;
}

// Mock data for categories
const initialCategories: Category[] = [
  { id: "1", name: "Men Clothes", itemCount: 24, image: "/placeholder.svg?height=100&width=100" },
  { id: "2", name: "Women Clothes", itemCount: 12, image: "/placeholder.svg?height=100&width=100" },
  { id: "3", name: "Accessories", itemCount: 43, image: "/placeholder.svg?height=100&width=100" },
  { id: "4", name: "Cotton Clothes", itemCount: 31, image: "/placeholder.svg?height=100&width=100" },
  { id: "5", name: "Summer Clothes", itemCount: 26, image: "/placeholder.svg?height=100&width=100" },
  { id: "6", name: "Wedding Clothes", itemCount: 52, image: "/placeholder.svg?height=100&width=100" },
]

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false)
  const [newCategory, setNewCategory] = useState<Partial<Category>>({ name: "", description: "", image: null })
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddCategory = () => {
    const categoryToAdd: Category = {
      id: (categories.length + 1).toString(),
      name: newCategory.name || "",
      itemCount: 0,
      image: newCategory.image || "/placeholder.svg?height=100&width=100"
    }
    setCategories([...categories, categoryToAdd])
    setIsAddCategoryOpen(false)
    setNewCategory({ name: "", description: "", image: null })
  }

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category)
    setNewCategory({ 
      name: category.name, 
      description: category.description, 
      image: typeof category.image === 'string' ? category.image : null
    })
    setIsAddCategoryOpen(true)
  }

  const handleUpdateCategory = () => {
    if (editingCategory) {
      const updatedCategories = categories.map(cat =>
        cat.id === editingCategory.id ? { ...cat, ...newCategory, image: newCategory.image || cat.image } : cat
      )
      setCategories(updatedCategories)
    }
    setIsAddCategoryOpen(false)
    setEditingCategory(null)
    setNewCategory({ name: "", description: "", image: null })
  }

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(categories.filter(cat => cat.id !== categoryId))
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Categories</h1>
        <Dialog open={isAddCategoryOpen} onOpenChange={setIsAddCategoryOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingCategory ? "Edit Category" : "Add New Category"}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image
                </Label>
                <Input
                  id="image"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files ? e.target.files[0] : null;
                    setNewCategory({ ...newCategory, image: file });
                  }}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={editingCategory ? handleUpdateCategory : handleAddCategory}>
              {editingCategory ? "Update Category" : "Add Category"}
            </Button>
          </DialogContent>
        </Dialog>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-64">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.map((category) => (
            <Card key={category.id}>
              <CardContent className="p-4">
                <Image 
                  src={typeof category.image === 'string' ? category.image : "/placeholder.svg?height=100&width=100"} 
                  alt={category.name} 
                  width={100}
                  height={100}
                  className="w-full h-40 object-cover mb-2 rounded" 
                />
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.itemCount} items</p>
                <div className="flex justify-end mt-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEditCategory(category)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteCategory(category.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories