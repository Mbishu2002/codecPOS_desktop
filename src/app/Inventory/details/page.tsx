// codecPOS_web/src/app/Inventory/details/page.tsx
import { InventoryDetails } from '@/components/Inventory/details/InventoryDetails'; // Ensure this path is correct
import { DashboardLayout } from '@/components/Shared/Layout/DashboardLayout';

export default function InventoryDetailsPage() {
  return ( <DashboardLayout> 
    <InventoryDetails />
     </DashboardLayout>);
}