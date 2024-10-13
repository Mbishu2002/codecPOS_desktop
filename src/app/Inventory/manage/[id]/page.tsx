import { InventoryItemDetails } from '@/components/Inventory/details/InventoryItemDetails'
import { Product } from "@/types/product"; // Adjust the import path as necessary

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  // Fetch product details using params.id
  const product = await fetchProductById(params.id); // Replace with actual fetching logic

  return <InventoryItemDetails product={product} />
}

async function fetchProductById(id: string): Promise<Product> {
  // Simulate fetching product details
  return {
    id,
    name: "Sample Product",
    sku: "SKU123",
    quantity: 10,
    unitType: "pcs",
    purchasePrice: 100,
    sellingPrice: 150, // Add the missing property
    category: "Electronics", // Add the missing property
    suppliers: ["Supplier A", "Supplier B"], // Add the missing property
    status: "Available", // Add the missing property
    description: "This is a sample product description.", // Add the missing property
    price: 120, // Add the missing property
  };
}
