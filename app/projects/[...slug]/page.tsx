import { promises as fs } from 'fs'
import path from 'path'
import MDXRenderer from '@/components/mdx-renderer'
import IndexPage from '@/components/IndexPage'
import { getChildrenByPath, getTitleByPath } from '@/lib/sidebar-utils'

interface PageProps {
  params: {
    slug: string[]
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  // 構建文件路徑，將 URL slug 轉換為對應的 MDX 文件路徑
  const filePath = path.join(process.cwd(), 'content', 'projects', ...slug) + '.mdx'
  const urlPath = '/projects/' + slug.join('/')
  
  try {
    const source = await fs.readFile(filePath, 'utf8')
    return <MDXRenderer source={source} />
  } catch {
    // 如果文件不存在，检查是否有子节点
    const children = getChildrenByPath(urlPath)
    const title = getTitleByPath(urlPath)
    
    if (children.length > 0) {
      return <IndexPage title={title} items={children} />
    }
    
    return <div>Please find the note you are looking for in the sidebar.</div>
  }
} 