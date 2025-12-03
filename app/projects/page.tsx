import IndexPage from '@/components/IndexPage'
import { getChildrenByPath, getTitleByPath } from '@/lib/sidebar-utils'

export default async function ProjectsPage() {
  const children = getChildrenByPath('/projects')
  const title = getTitleByPath('/projects')
  
  if (children.length > 0) {
    return <IndexPage title={title} items={children} />
  }
  
  return <div>No projects available.</div>
}

