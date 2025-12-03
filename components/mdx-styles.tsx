'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

interface ComponentProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

export const mdxComponents = {
  // 代码块样式
  code: ({ inline, className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        customStyle={{
          margin: '1rem 0',
          padding: '1rem',
          borderRadius: '0.5rem',
          fontSize: '0.9rem',
        }}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          padding: '0.2em 0.4em',
          borderRadius: '0.25rem',
          fontSize: '0.9em',
        }}
        {...props}
      >
        {children}
      </code>
    );
  },
  // 段落样式
  p: (props: ComponentProps) => (
    <p
      style={{
        margin: '1rem 0',
        lineHeight: '1.6',
        fontSize: '1.1rem',
      }}
      {...props}
    />
  ),
  // 标题样式
  h1: (props: ComponentProps) => (
    <h1
      style={{
        fontSize: '2.5rem',
        margin: '2rem 0 1rem',
        fontWeight: 'bold',
        color: 'var(--text-primary)',
      }}
      {...props}
    />
  ),
  h2: (props: ComponentProps) => (
    <h2
      style={{
        fontSize: '2rem',
        margin: '1.5rem 0 1rem',
        fontWeight: 'bold',
        color: 'var(--text-primary)',
      }}
      {...props}
    />
  ),
  h3: (props: ComponentProps) => (
    <h3
      style={{
        fontSize: '1.5rem',
        margin: '1.25rem 0 1rem',
        fontWeight: 'bold',
        color: 'var(--text-primary)',
      }}
      {...props}
    />
  ),
  h4: (props: ComponentProps) => (
    <h4
      style={{
        fontSize: '1.25rem',
        margin: '1rem 0',
        fontWeight: 'bold',
        color: 'var(--text-primary)',
      }}
      {...props}
    />
  ),
  // 列表样式
  ul: (props: ComponentProps) => (
    <ul
      style={{
        margin: '1rem 0',
        paddingLeft: '2rem',
        listStyleType: 'disc',
      }}
      {...props}
    />
  ),
  ol: (props: ComponentProps) => (
    <ol
      style={{
        margin: '1rem 0',
        paddingLeft: '2rem',
        listStyleType: 'decimal',
      }}
      {...props}
    />
  ),
  li: (props: ComponentProps) => (
    <li
      style={{
        margin: '0.5rem 0',
        lineHeight: '1.6',
      }}
      {...props}
    />
  ),
  // 引用样式
  blockquote: (props: ComponentProps) => (
    <blockquote
      style={{
        borderLeft: '4px solid var(--accent)',
        margin: '1rem 0',
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--background-secondary)',
        fontStyle: 'italic',
      }}
      {...props}
    />
  ),
  // 图片样式
  img: (props: ComponentProps) => (
    <img
      style={{
        maxWidth: '100%',
        height: 'auto',
        margin: '1rem 0',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      {...props}
    />
  ),
  // 表格样式
  table: (props: ComponentProps) => (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: '1rem 0',
        overflowX: 'auto',
        display: 'block',
      }}
      {...props}
    />
  ),
  th: (props: ComponentProps) => (
    <th
      style={{
        border: '1px solid var(--border)',
        padding: '0.75rem',
        textAlign: 'left',
        backgroundColor: 'var(--background-secondary)',
        fontWeight: 'bold',
      }}
      {...props}
    />
  ),
  td: (props: ComponentProps) => (
    <td
      style={{
        border: '1px solid var(--border)',
        padding: '0.75rem',
      }}
      {...props}
    />
  ),
  // 强调样式
  em: (props: ComponentProps) => (
    <em
      style={{
        fontStyle: 'italic',
        color: 'var(--text-primary)',
      }}
      {...props}
    />
  ),
  // 加粗样式
  strong: (props: ComponentProps) => (
    <strong
      style={{
        fontWeight: 'bold',
        color: 'var(--text-primary)',
      }}
      {...props}
    />
  ),
  // 删除线样式
  del: (props: ComponentProps) => (
    <del
      style={{
        textDecoration: 'line-through',
        color: 'var(--text-secondary)',
      }}
      {...props}
    />
  ),
  // 高亮样式
  mark: (props: ComponentProps) => (
    <mark
      style={{
        backgroundColor: 'var(--accent)',
        color: 'var(--text-primary)',
        padding: '0.1em 0.3em',
        borderRadius: '0.2em',
      }}
      {...props}
    />
  ),
  // 行内代码样式
  inlineCode: (props: ComponentProps) => (
    <code
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        padding: '0.2em 0.4em',
        borderRadius: '0.25rem',
        fontSize: '0.9em',
        fontFamily: 'monospace',
      }}
      {...props}
    />
  ),
  // 链接样式
  a: (props: ComponentProps) => (
    <a
      style={{
        color: 'var(--accent)',
        textDecoration: 'underline',
        cursor: 'pointer',
      }}
      {...props}
    />
  ),
  // 水平分割线样式
  hr: (props: ComponentProps) => (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid var(--border)',
        margin: '2rem 0',
      }}
      {...props}
    />
  ),
}; 