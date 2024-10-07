interface Product {
    id: string; // Add this line if 'id' is missing
    name: string;
    sku: string; // Add this line
    category: string; // Add this line
    quantity: number; // Already added
    unitType: string; // Add this line
    purchasePrice: number; // Add this line
    sellingPrice: number; // Already added
    suppliers: string[]; // Add this line
    dateAdded?: string; // Already added
    status: string; // Add this line
}
