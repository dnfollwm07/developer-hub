import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { SidebarProvider } from '@/components/layout/SidebarProvider';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jing-Ning Su - Developer Hub',
  description: 'Personal website showcasing projects, technical notes, and professional journey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <SidebarProvider>
            <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
              <Header />
              <div className="flex flex-1 pt-16">
                <Sidebar />
                <ContentWrapper>{children}</ContentWrapper>
              </div>
            </div>
          </SidebarProvider>
        </LanguageProvider>
      </body>
    </html>
  );
} 