"use client"

import { useState } from "react"
import { ProductList } from "@/components/Products/List/ProductList"
import { AddProduct } from "@/components/Products/Form/AddProduct"
// import { ProductDetails } from "@/components/Products/Details/ProductDetails"
import { DashboardLayout } from "@/components/Shared/Layout/DashboardLayout"

export default function ProductsPage() {
  const [view, setView] = useState<"list" | "add" | "details">("list")
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setView("details")
  }

  const handleAddProduct = () => {
    setView("add")
  }

  const handleBack = () => {
    setView("list")
    // setSelectedProduct(null)
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto p-6">
        {view === "list" && (
          <ProductList onProductClick={handleProductClick} onAddProduct={handleAddProduct} />
        )}
        {view === "add" && (
          <AddProduct onBack={handleBack} />
        )}
        {/* {view === "details" && selectedProduct && (
          <ProductDetails product={selectedProduct} onBack={handleBack} />
        )} */}
      </div>
    </DashboardLayout>
  )
}
