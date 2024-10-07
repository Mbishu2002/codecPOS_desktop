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
    name: "Sample Product", // Ensure all required properties are included
    sku: "SKU123",
    quantity: 10,
    unitType: "pcs",
    purchasePrice: 100,
    // Add other properties as needed
  };
}
