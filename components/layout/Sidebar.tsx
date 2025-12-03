'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { useSidebar } from './SidebarProvider';
import type { TranslatedSidebarItem } from '@/config/sidebar-types';
import { getTranslatedSidebarItems } from '@/lib/sidebar-utils';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { useMemo } from 'react';

interface SidebarItemProps {
  item: TranslatedSidebarItem;
  level?: number;
}

const SidebarItemComponent: React.FC<SidebarItemProps> = ({ item, level = 0 }) => {
  const { isCollapsed, expandedItems, toggleItem } = useSidebar();
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedItems.includes(item.href);
  const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

  return (
    <div className="mb-1">
      <div className="flex items-center group">
        {/* 固定宽度的箭头按钮容器，确保对齐 */}
        <div className="w-6 flex-shrink-0 flex items-center justify-start">
          {hasChildren && !isCollapsed && (
            <button
              onClick={() => toggleItem(item.href)}
              className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              )}
            </button>
          )}
        </div>
        <Link
          href={item.href}
          onClick={() => {
            // 如果有子节点且 sidebar 未折叠，点击时展开/折叠，但不阻止导航
            if (hasChildren && !isCollapsed) {
              toggleItem(item.title);
            }
          }}
          className={`
            flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${isCollapsed ? 'px-2' : 'pl-1 pr-3'}
            ${level > 0 ? 'ml-4 text-xs' : ''}
            ${
              isActive
                ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-semibold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
            }
          `}
          title={isCollapsed ? item.title : undefined}
        >
          {!isCollapsed && item.title}
          {isCollapsed && <span className="text-xs">•</span>}
        </Link>
      </div>

      {!isCollapsed && hasChildren && isExpanded && (
        <div className="mt-1 ml-4 space-y-1 border-l border-slate-200 dark:border-slate-700 pl-2">
          {item.children?.map((child) => (
            <SidebarItemComponent key={child.href} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const t = useTranslation();
  const { language } = useLanguage();
  
  // 获取翻译后的 sidebar 配置
  const sidebarItems = useMemo(() => {
    return getTranslatedSidebarItems(language);
  }, [language]);

  return (
    <aside
      className={cn(
        'fixed left-0 top-16 bottom-0 z-40',
        'bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800',
        'transition-all duration-300 ease-in-out',
        'shadow-lg hidden md:block',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          {!isCollapsed && (
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              {t.sidebar.navigation}
            </h2>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <Menu className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            ) : (
              <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {sidebarItems.map((item) => (
            <SidebarItemComponent key={item.href} item={item} />
          ))}
        </nav>
      </div>
    </aside>
  );
} 