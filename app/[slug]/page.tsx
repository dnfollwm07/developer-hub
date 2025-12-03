import { promises as fs } from 'fs'
import path from 'path'
import MDXPage from '@/components/mdx-page'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`)
  
  try {
    const source = await fs.readFile(filePath, 'utf8')
    return <MDXPage source={source} />
  } catch {
    return <div>Please find the note you are looking for in the sidebar.</div>
  }
} 