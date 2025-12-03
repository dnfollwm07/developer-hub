'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface MDXRendererProps {
  source: string;
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const processHighlight = (text: string) => {
  return text.replace(/==([^=]+)==/g, '<span class="highlight">$1</span>');
};

const generateId = (children: React.ReactNode): string => {
  if (!children) return '';
  
  // Convert ReactNode to string
  let text = '';
  React.Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      text += child;
    } else if (React.isValidElement(child) && child.props.children) {
      text += generateId(child.props.children);
    }
  });
  
  // Use a more reliable method for generating IDs from Chinese text
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')    // Replace spaces with hyphens
    .replace(/[^\w\u4e00-\u9fa5-]/g, '') // Keep alphanumeric, Chinese chars and hyphens
    .replace(/-+/g, '-')     // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Trim hyphens from start and end
};

export default function MDXRenderer({ source }: MDXRendererProps) {
  const processedSource = processHighlight(source);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ inline, className, children, ...props }: CodeProps) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style={vscDarkPlus as any}
                language={match[1]}
                PreTag="div"
                customStyle={{
                  margin: '1rem 0',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  backgroundColor: 'var(--background-secondary)',
                }}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...(props as any)}
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
                  fontFamily: 'monospace',
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
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
          h1: (props: ComponentProps) => {
            const id = generateId(props.children);
            return (
              <h1
                id={id}
                style={{
                  fontSize: '2.5rem',
                  margin: '2rem 0 1rem',
                  fontWeight: 'bold',
                  color: 'var(--text-primary)',
                  scrollMarginTop: '100px',
                }}
                {...props}
              />
            );
          },
          h2: (props: ComponentProps) => {
            const id = generateId(props.children);
            return (
              <h2
                id={id}
                style={{
                  fontSize: '2rem',
                  margin: '1.5rem 0 1rem',
                  fontWeight: 'bold',
                  color: 'var(--text-primary)',
                  scrollMarginTop: '100px',
                }}
                {...props}
              />
            );
          },
          h3: (props: ComponentProps) => {
            const id = generateId(props.children);
            return (
              <h3
                id={id}
                style={{
                  fontSize: '1.5rem',
                  margin: '1.25rem 0 1rem',
                  fontWeight: 'bold',
                  color: 'var(--text-primary)',
                  scrollMarginTop: '100px',
                }}
                {...props}
              />
            );
          },
          h4: (props: ComponentProps) => {
            const id = generateId(props.children);
            return (
              <h4
                id={id}
                style={{
                  fontSize: '1.25rem',
                  margin: '1rem 0',
                  fontWeight: 'bold',
                  color: 'var(--text-primary)',
                  scrollMarginTop: '100px',
                }}
                {...props}
              />
            );
          },
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
          em: (props: ComponentProps) => (
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--text-primary)',
              }}
              {...props}
            />
          ),
          strong: (props: ComponentProps) => (
            <strong
              style={{
                fontWeight: 'bold',
                color: 'var(--text-primary)',
              }}
              {...props}
            />
          ),
          del: (props: ComponentProps) => (
            <del
              style={{
                textDecoration: 'line-through',
                color: 'var(--text-secondary)',
              }}
              {...props}
            />
          ),
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
          a: (props: ComponentProps & { href?: string }) => {
            const href = props.href;
            if (href?.startsWith('#')) {
              // Extract the target ID from the href
              const targetId = href.slice(1);
              
              return (
                <a
                  href={href}
                  style={{
                    color: 'var(--accent)',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    
                    // Try to find the element by direct ID
                    let target = document.getElementById(targetId);
                    
                    // If not found, try to generate the ID using our algorithm
                    if (!target && targetId) {
                      // We need to find all headings and check if any matches our target
                      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
                      for (let i = 0; i < headings.length; i++) {
                        const heading = headings[i] as HTMLElement;
                        const headingText = heading.textContent || '';
                        const generatedId = headingText
                          .toLowerCase()
                          .replace(/\s+/g, '-')
                          .replace(/[^\w\u4e00-\u9fa5-]/g, '')
                          .replace(/-+/g, '-')
                          .replace(/^-+|-+$/g, '');
                        
                        if (generatedId === targetId || decodeURIComponent(targetId) === headingText) {
                          target = heading;
                          break;
                        }
                      }
                    }
                    
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  {...props}
                />
              );
            }
            
            return (
              <a
                style={{
                  color: 'var(--accent)',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
                {...props}
              />
            );
          },
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
          span: (props: ComponentProps) => {
            if (props.className === 'highlight') {
              return (
                <span
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--text-primary)',
                    padding: '0.1em 0.3em',
                    borderRadius: '0.2em',
                  }}
                  {...props}
                />
              );
            }
            return <span {...props} />;
          },
        }}
      >
        {processedSource}
      </ReactMarkdown>
    </div>
  );
} 