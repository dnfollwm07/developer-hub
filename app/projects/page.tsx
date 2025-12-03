import IndexPage from '@/components/IndexPage'
import { getChildrenByPath, getTitleByPath } from '@/lib/sidebar-utils'
import { getServerTranslations, getServerLanguage } from '@/lib/i18n/server'
import { loadContent, buildContentPath } from '@/lib/content-loader'
import MDXRenderer from '@/components/mdx-renderer'

export default async function ProjectsPage() {
  const language = getServerLanguage();
  const t = getServerTranslations();
  const basePath = buildContentPath('content', 'projects', 'index');
  
  // 尝试加载多语言内容
  const result = await loadContent(basePath, language);
  
  if (result) {
    return <MDXRenderer source={result.content} />
  }
  
  // 如果文件不存在，显示子节点列表
  const children = getChildrenByPath('/projects')
  const title = getTitleByPath('/projects', language)
  
  if (children.length > 0) {
    return <IndexPage title={title} items={children} />
  }
  
  return <div>{t.common.noItems}</div>
}

