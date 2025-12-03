import { promises as fs } from 'fs'
import path from 'path'
import MDXPage from '@/components/mdx-page'
import IndexPage from '@/components/IndexPage'
import { getChildrenByPath, getTitleByPath } from '@/lib/sidebar-utils'

export default async function PersonalPage() {
  const filePath = path.join(process.cwd(), 'content', 'personal', 'index.mdx')
  
  try {
    const source = await fs.readFile(filePath, 'utf8')
    return <MDXPage source={source} />
  } catch {
    // 如果文件不存在，显示子节点列表
    const children = getChildrenByPath('/personal')
    const title = getTitleByPath('/personal')
    
    if (children.length > 0) {
      return <IndexPage title={title} items={children} />
    }
    
    return <div>Please find the note you are looking for in the sidebar.</div>
  }
} 