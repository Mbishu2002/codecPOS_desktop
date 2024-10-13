/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Product {
    id: string; // Add this line if 'id' is missing
    name: string;
    sku: string; // Add this line
    quantity: number; // Already added
    unitType: string; // Add this line
    purchasePrice: number; // Add this line
    sellingPrice: number; // Required property
    category: string; // Required property
    suppliers: string[]; // Required property
    status: string; // Required property
    description: string; // Add the missing property
    price: number; // Required property
}
