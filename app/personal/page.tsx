import MDXPage from '@/components/mdx-page'
import IndexPage from '@/components/IndexPage'
import { getChildrenByPath, getTitleByPath } from '@/lib/sidebar-utils'
import { getServerTranslations, getServerLanguage } from '@/lib/i18n/server'
import { loadContent, buildContentPath } from '@/lib/content-loader'

export default async function PersonalPage() {
  const language = getServerLanguage();
  const t = getServerTranslations();
  const basePath = buildContentPath('content', 'personal', 'index');
  
  // 尝试加载多语言内容
  const result = await loadContent(basePath, language);
  
  if (result) {
    return <MDXPage source={result.content} />
  }
  
  // 如果文件不存在，显示子节点列表
  const children = getChildrenByPath('/personal')
  const title = getTitleByPath('/personal', language)
  
  if (children.length > 0) {
    return <IndexPage title={title} items={children} />
  }
  
  return <div>{t.common.notFound}</div>
} 