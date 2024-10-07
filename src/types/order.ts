// codecPOS_web/src/types/order.ts

export interface Order {
    id: string; // or number, depending on your ID type
    customerName: string; // Ensure this property exists
    totalAmount: number;   // Ensure this property exists
    status: string;     
       // Ensure this property exists
    // Add any other relevant fields for your order
  }