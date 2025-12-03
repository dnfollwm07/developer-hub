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
  const { slug } = params
  const language = getServerLanguage();
  const t = getServerTranslations();
  const urlPath = '/personal/' + slug.join('/')
  const basePath = buildContentPath('content', 'personal', ...slug);
  
  // 尝试加载多语言内容
  const result = await loadContent(basePath, language);
  
  if (result) {
    return <MDXRenderer source={result.content} />
  }
  
  // 如果文件不存在，检查是否有子节点
  const children = getChildrenByPath(urlPath)
  const title = getTitleByPath(urlPath, language)
  
  if (children.length > 0) {
    return <IndexPage title={title} items={children} />
  }
  
  return <div>{t.common.notFound}</div>
} 