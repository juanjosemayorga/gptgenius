import React, { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <h1>Layout</h1>
      {children}
    </>
  );
}

export default DashboardLayout;
