import IndexPage from '@/components/IndexPage'
import { getChildrenByPath, getTitleByPath } from '@/lib/sidebar-utils'
import { getServerTranslations } from '@/lib/i18n/server'

export default async function NotesPage() {
  const t = getServerTranslations();
  const children = getChildrenByPath('/notes')
  const title = getTitleByPath('/notes')
  
  if (children.length > 0) {
    return <IndexPage title={title} items={children} />
  }
  
  return <div>{t.common.noItems}</div>
}

