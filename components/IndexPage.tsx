'use client';

import Link from 'next/link';
import { ChevronRight, FileText, Folder } from 'lucide-react';
import type { TranslatedSidebarItem } from '@/config/sidebar-types';
import { useTranslation } from '@/lib/i18n/useTranslation';

interface IndexPageProps {
  title: string;
  items: TranslatedSidebarItem[];
}

export default function IndexPage({ title, items }: IndexPageProps) {
  const t = useTranslation();
  
  const renderItems = (items: TranslatedSidebarItem[], level = 0) => {
    return items.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isLeaf = !hasChildren;

      return (
        <div key={item.href} className={level > 0 ? 'ml-6 mt-2' : ''}>
          <Link
            href={item.href}
            className={`
              group flex items-center gap-3 p-4 rounded-lg
              transition-all duration-200
              ${
                isLeaf
                  ? 'bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600'
                  : 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-slate-700 dark:hover:to-slate-600 border border-indigo-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600'
              }
            `}
          >
            <div
              className={`
                flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                ${
                  isLeaf
                    ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                }
                group-hover:scale-110 transition-transform
              `}
            >
              {isLeaf ? (
                <FileText className="w-5 h-5" />
              ) : (
                <Folder className="w-5 h-5" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              {hasChildren && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {item.children?.length} {item.children?.length === 1 ? t.common.item : t.common.items}
                </p>
              )}
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
          </Link>

          {/* 递归渲染子节点（仅显示第一层子节点） */}
          {hasChildren && level === 0 && (
            <div className="mt-3 space-y-2">
              {item.children?.slice(0, 5).map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block ml-14 p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {child.title}
                  </span>
                </Link>
              ))}
              {item.children && item.children.length > 5 && (
                <Link
                  href={item.href}
                  className="block ml-14 p-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  + {item.children.length - 5} {t.common.moreItems}
                </Link>
              )}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{title}</h1>
        <p className="text-slate-600 dark:text-slate-400">
          {t.indexPage.browseAvailable}
        </p>
      </div>

      <div className="space-y-3">
        {items.length > 0 ? (
          renderItems(items)
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400">{t.common.noItems}</p>
          </div>
        )}
      </div>
    </div>
  );
}

