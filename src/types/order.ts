// codecPOS_web/src/types/order.ts

export interface Order {
    id: string; // or number, depending on your ID type
    customerName: string;
    totalAmount: number;
    status: string; // e.g., "pending", "completed", etc.
    // Add any other relevant fields for your order
  }