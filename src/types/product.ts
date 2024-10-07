/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Product {
    id: string; // Add this line if 'id' is missing
    name: string;
    sku: string; // Add this line
    category: string; // Required property
    quantity: number; // Already added
    unitType: string; // Add this line
    purchasePrice: number; // Add this line
    sellingPrice: number; // Required property
    suppliers: string[]; // Required property
    status: string; // Required property
}
