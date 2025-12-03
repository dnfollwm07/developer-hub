import IndexPage from '@/components/IndexPage'
import { getChildrenByPath, getTitleByPath } from '@/lib/sidebar-utils'

export default async function NotesPage() {
  const children = getChildrenByPath('/notes')
  const title = getTitleByPath('/notes')
  
  if (children.length > 0) {
    return <IndexPage title={title} items={children} />
  }
  
  return <div>No notes available.</div>
}

