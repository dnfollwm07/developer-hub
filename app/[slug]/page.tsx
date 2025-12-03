import { promises as fs } from 'fs'
import path from 'path'
import MDXPage from '@/components/mdx-page'
import { getServerTranslations } from '@/lib/i18n/server'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  const t = getServerTranslations();
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`)
  
  try {
    const source = await fs.readFile(filePath, 'utf8')
    return <MDXPage source={source} />
  } catch {
    return <div>{t.common.notFound}</div>
  }
} 