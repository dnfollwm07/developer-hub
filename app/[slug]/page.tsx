import MDXPage from '@/components/mdx-page'
import { getServerTranslations, getServerLanguage } from '@/lib/i18n/server'
import { loadContent, buildContentPath } from '@/lib/content-loader'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  const language = getServerLanguage();
  const t = getServerTranslations();
  const basePath = buildContentPath('content', slug);
  
  // 尝试加载多语言内容
  const result = await loadContent(basePath, language);
  
  if (result) {
    return <MDXPage source={result.content} />
  }
  
  return <div>{t.common.notFound}</div>
} 