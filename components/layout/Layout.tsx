'use client';

import React from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={styles.container}>
      {/* 頂部標題區域 */}
      <Header />
      
      {/* 主內容區域 */}
      <div style={styles.mainContent}>
        {/* 右側內容區域 */}
        <main style={styles.content}>
          <div style={styles.contentContainer}>{children}</div>
        </main>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'var(--background)',
    display: 'flex',
    flexDirection: 'column'
  },
  mainContent: {
    marginTop: '4rem',
    display: 'flex'
  },
  content: {
    flex: 1,
    overflow: 'auto'
  },
  contentContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1.5rem'
  }
} as const; 