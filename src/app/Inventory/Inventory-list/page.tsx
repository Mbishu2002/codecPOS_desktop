// Import the InventoryList component
import { InventoryList } from '@/components/Inventory/InventoryList/Inventory-list'; // Ensure this path is correct
import { DashboardLayout } from '@/components/Shared/Layout/DashboardLayout';

// Default export of the InventoryListPage component
export default function InventoryListPage() {

  return( 
  <DashboardLayout> <InventoryList /> 
  </DashboardLayout>
  );  // This should render the InventoryList component
}
