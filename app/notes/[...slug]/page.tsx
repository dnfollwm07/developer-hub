import { promises as fs } from 'fs'
import path from 'path'
import MDXRenderer from '@/components/mdx-renderer'

interface PageProps {
  params: {
    slug: string[]
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  // 構建文件路徑，將 URL slug 轉換為對應的 MDX 文件路徑
  const filePath = path.join(process.cwd(), 'content', 'notes', ...slug) + '.mdx'
  console.log(filePath)
  
  try {
    const source = await fs.readFile(filePath, 'utf8')
    return <MDXRenderer source={source} />
  } catch {
    return <div>Please find the note you are looking for in the sidebar.</div>
  }
} 