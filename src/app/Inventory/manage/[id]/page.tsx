import { InventoryItemDetails } from '@/components/Inventory/details/InventoryItemDetails'

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  // Fetch product details using params.id
  const product = await fetchProductById(params.id); // Replace with actual fetching logic

  return <InventoryItemDetails product={product} />
}

async function fetchProductById(id: string): Promise<Product> {
  // Simulate fetching product details
  return {
    id,
    name: 'Product Name',
    sku: 'Product SKU',
    category: 'Product Category',
    quantity: 0,
    unitType: 'Unit',
    purchasePrice: 0,
    sellingPrice: 0,
    suppliers: [],
    status: 'Active'
  };
}
