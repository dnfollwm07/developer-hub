import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from './mdx-components';

interface MDXPageProps {
  source: string;
}

export default function MDXPage({ source }: MDXPageProps) {
  const components = useMDXComponents({});
  
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </article>
  );
} 