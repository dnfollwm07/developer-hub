'use client';

import React from 'react';
import { useSidebar } from './SidebarProvider';
import { cn } from '@/lib/utils';

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <main
      className={cn(
        'flex-1 transition-all duration-300 ease-in-out',
        isCollapsed ? 'md:ml-16' : 'md:ml-64'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </main>
  );
}

