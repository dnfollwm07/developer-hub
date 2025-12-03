import IndexPage from '@/components/IndexPage'
import { getChildrenByPath, getTitleByPath } from '@/lib/sidebar-utils'
import { getServerTranslations } from '@/lib/i18n/server'

export default async function ProjectsPage() {
  const t = getServerTranslations();
  const children = getChildrenByPath('/projects')
  const title = getTitleByPath('/projects')
  
  if (children.length > 0) {
    return <IndexPage title={title} items={children} />
  }
  
  return <div>{t.common.noItems}</div>
}

