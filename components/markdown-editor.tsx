'use client';

import React, { useState } from 'react';
import MDXRenderer from './mdx-renderer';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { Copy, Download, Check } from 'lucide-react';

export const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [copied, setCopied] = useState(false);
  const t = useTranslation();

  const handleCopy = async () => {
    if (!markdown.trim()) return;
    
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    if (!markdown.trim()) return;
    
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.mdx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-3 px-4 pt-2 pb-4">
      {/* 標題和操作按鈕 */}
      <div className="flex items-center justify-between mb-3 pb-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {t.nav.editorTitle || 'Markdown 預覽編輯器'}
        </h1>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            disabled={!markdown.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 
                     disabled:bg-slate-400 disabled:cursor-not-allowed
                     text-white rounded-lg transition-colors duration-200
                     text-sm font-medium"
            title={t.nav.copyMarkdown || '複製 Markdown'}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t.nav.copied || '已複製'}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{t.nav.copyMarkdown || '複製'}</span>
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            disabled={!markdown.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 
                     disabled:bg-slate-400 disabled:cursor-not-allowed
                     text-white rounded-lg transition-colors duration-200
                     text-sm font-medium"
            title={t.nav.downloadMarkdown || '下載為 .mdx 文件'}
          >
            <Download className="w-4 h-4" />
            <span>{t.nav.downloadMarkdown || '下載'}</span>
          </button>
        </div>
      </div>
      
      {/* 編輯器和預覽區域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(90vh-9.5rem)]">
        {/* 編輯區域 */}
        <div className="flex flex-col h-full">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
            {t.nav.editor || '編輯區'}
          </h3>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="flex-1 p-4 border border-slate-300 dark:border-slate-700 rounded-lg 
                       bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100
                       text-base leading-relaxed resize-none
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                       font-mono"
            placeholder={t.nav.editorPlaceholder || "在這裡輸入 Markdown 內容..."}
          />
        </div>

        {/* 预览区域 */}
        <div className="flex flex-col h-full overflow-auto">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
            {t.nav.preview || '預覽區'}
          </h3>
          <div className="flex-1 p-4 border border-slate-300 dark:border-slate-700 rounded-lg 
                         bg-white dark:bg-slate-800 overflow-auto">
            <MDXRenderer source={markdown} />
          </div>
        </div>
      </div>
    </div>
  );
}; 