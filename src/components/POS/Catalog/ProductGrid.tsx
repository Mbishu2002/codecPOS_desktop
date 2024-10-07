"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Minus, Plus, X } from "lucide-react"
import Image from 'next/image'

// Mock data for products (expanded)
const products = [
  { id: 1, name: "Men White T-Shirt", price: 3490, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 2, name: "Men Grey Shoes", price: 5990, image: "/placeholder.svg?height=100&width=100", inStock: false },
  { id: 3, name: "Men Blue Suit", price: 29990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 4, name: "Women Red Dress", price: 8990, image: "/placeholder.svg?height=100&width=100", inStock: false },
  { id: 5, name: "Women White Blouse", price: 4490, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 6, name: "Kids Yellow Raincoat", price: 6990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 7, name: "Men Black Jeans", price: 7990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 8, name: "Women Blue Jeans", price: 7990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 9, name: "Kids Green T-Shirt", price: 2990, image: "/placeholder.svg?height=100&width=100", inStock: false },
  { id: 10, name: "Men Brown Leather Jacket", price: 19990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 11, name: "Women Black Heels", price: 8990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 12, name: "Kids Blue Sneakers", price: 4990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 13, name: "Men Green Polo Shirt", price: 4990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 14, name: "Women Purple Sweater", price: 7990, image: "/placeholder.svg?height=100&width=100", inStock: false },
  { id: 15, name: "Kids Red Cap", price: 1990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 16, name: "Men Navy Blue Blazer", price: 24990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 17, name: "Women Beige Scarf", price: 3490, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 18, name: "Kids Pink Dress", price: 5990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 19, name: "Men Grey Sweater", price: 8990, image: "/placeholder.svg?height=100&width=100", inStock: true },
  { id: 20, name: "Women White Sneakers", price: 6990, image: "/placeholder.svg?height=100&width=100", inStock: false },
]

// Mock data for inventories
const inventories = [
  { id: 1, name: "Main Store" },
  { id: 2, name: "Warehouse A" },
  { id: 3, name: "Warehouse B" },
]

const ProductCard = ({ product, onAddToCart }) => (
  <Card className="w-full">
    <CardContent className="p-4">
      <Image src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" width={100} height={100} />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm">{product.price} XAF</p>
      <div className="flex justify-between items-center mt-2">
        <span className={`text-xs ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
      </div>
      <Button 
        className="w-full mt-2" 
        onClick={() => onAddToCart(product)}
        disabled={!product.inStock}
      >
        Add to Cart
      </Button>
    </CardContent>
  </Card>
)

const CartItem = ({ item, onUpdateQuantity, onRemove, onChangeInventory }) => (
  <div className="flex flex-col py-2 border-b">
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm">{item.price} XAF</p>
      </div>
      <div className="flex items-center">
        <Button variant="outline" size="icon" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
          <Minus className="h-4 w-4" />
        </Button>
        <span className="mx-2">{item.quantity}</span>
        <Button variant="outline" size="icon" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onRemove(item.id)} className="ml-2">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
    <div className="mt-2">
      <Select 
        value={item.inventory} 
        onValueChange={(value) => onChangeInventory(item.id, value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Inventory" />
        </SelectTrigger>
        <SelectContent>
          {inventories.map((inventory) => (
            <SelectItem key={inventory.id} value={inventory.id.toString()}>
              {inventory.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </div>
)

export function Pos() {
  const [cartItems, setCartItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [promoCode, setPromoCode] = useState("")
  const [paymentType, setPaymentType] = useState("CASH")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1, inventory: "1" }])
    }
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const changeInventory = (id, inventoryId) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, inventory: inventoryId } : item
    ))
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="w-full md:w-2/3">
        <div className="flex gap-4 mb-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="inStock">In Stock</SelectItem>
              <SelectItem value="outOfStock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
          <Input 
            type="text" 
            placeholder="Live Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button 
            variant="outline" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ←
          </Button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button 
                key={page} 
                variant={page === currentPage ? "default" : "outline"}
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
            →
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            {cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                onChangeInventory={changeInventory}
              />
            ))}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Offer</h3>
              <div className="flex gap-2">
                <Input 
                  type="text" 
                  placeholder="Enter Promo Code" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button>APPLY</Button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Payment Type</h3>
              <Select value={paymentType} onValueChange={setPaymentType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CASH">CASH</SelectItem>
                  <SelectItem value="CARD">CARD</SelectItem>
                  <SelectItem value="MOBILE">MOBILE MONEY</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Price Details</h3>
              <div className="flex justify-between">
                <span>Order Total</span>
                <span>{calculateTotal()} XAF</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between font-bold mt-2">
                <span>Total</span>
                <span>{calculateTotal()} XAF</span>
              </div>
            </div>
            <Button className="w-full mt-4">PAY</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}