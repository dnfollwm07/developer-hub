import MDXPage from '@/components/mdx-page'
import { getServerTranslations, getServerLanguage } from '@/lib/i18n/server'
import { loadContent, buildContentPath } from '@/lib/content-loader'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params
  
  // 排除静态资源文件（包括 favicon.ico, favicon.png 等）
  const staticExtensions = ['.ico', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.json', '.xml', '.txt', '.css', '.js'];
  const staticFileNames = ['favicon.ico', 'favicon.png', 'robots.txt', 'sitemap.xml'];
  
  const isStaticFile = staticExtensions.some(ext => slug.toLowerCase().endsWith(ext)) ||
                       staticFileNames.includes(slug.toLowerCase());
  
  if (isStaticFile) {
    // 返回 404，让 Next.js 处理静态资源
    return <div>Not Found</div>;
  }
  
  const language = getServerLanguage();
  const t = getServerTranslations();
  const basePath = buildContentPath('content', slug);
  
  // 尝试加载多语言内容
  const result = await loadContent(basePath, language);
  
  if (result) {
    return <MDXPage source={result.content} />
  }
  
  return <div>{t.common.notFound}</div>
} 