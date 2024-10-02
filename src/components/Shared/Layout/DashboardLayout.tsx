import React from 'react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Dashboard Header</header>
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
      <footer>Dashboard Footer</footer>
    </div>
  )
}

export default DashboardLayout
