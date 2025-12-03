import MDXRenderer from '@/components/mdx-renderer'
import IndexPage from '@/components/IndexPage'
import { getChildrenByPath, getTitleByPath } from '@/lib/sidebar-utils'
import { getServerTranslations, getServerLanguage } from '@/lib/i18n/server'
import { loadContent, buildContentPath } from '@/lib/content-loader'

interface PageProps {
  params: {
    slug: string[]
  }
}

export default async function Page({ params }: PageProps) {
  try {
    const { slug } = params
    const language = getServerLanguage();
    const t = getServerTranslations();
    const urlPath = '/notes/' + slug.join('/')
    const basePath = buildContentPath('content', 'notes', ...slug);
    
    console.log('[Notes Page] Loading content:', {
      urlPath,
      basePath,
      slug,
      language,
      cwd: process.cwd(),
    });
    
    // 尝试加载多语言内容
    const result = await loadContent(basePath, language);
    
    if (result) {
      console.log('[Notes Page] Content loaded successfully:', {
        language: result.language,
        contentLength: result.content.length,
      });
      return <MDXRenderer source={result.content} />
    }
    
    // 如果文件不存在，检查是否有子节点
    const children = getChildrenByPath(urlPath, language)
    const title = getTitleByPath(urlPath, language)
    
    console.log('[Notes Page] Content not found, checking children:', {
      urlPath,
      childrenCount: children.length,
      title,
    });
    
    if (children.length > 0) {
      return <IndexPage title={title} items={children} />
    }
    
    console.error('[Notes Page] Content not found and no children:', {
      urlPath,
      basePath,
      slug,
      language,
      cwd: process.cwd(),
    });
    
    return <div>{t.common.notFound}</div>
  } catch (error) {
    console.error('[Notes Page] Error:', error);
    const t = getServerTranslations();
    return <div>Error loading page: {error instanceof Error ? error.message : String(error)}</div>
  }
} 