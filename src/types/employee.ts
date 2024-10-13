export interface Employee {
  id: string;                // Unique identifier for the employee
  firstName: string;        // Employee's first name
  lastName: string;         // Employee's last name
  email: string;            // Employee's email address
  phone: string;            // Employee's phone number
  role: string;             // Employee's role or job title
  department: string;       // Department the employee belongs to
  hireDate: Date;           // Date the employee was hired
  status: 'active' | 'inactive' | 'terminated'; // Employment status
  description?: string;     // Optional description
  // Add any additional properties as needed
}
