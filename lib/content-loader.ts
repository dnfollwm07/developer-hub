import { promises as fs } from 'fs';
import path from 'path';
import type { Language } from './i18n/types';

/**
 * 语言回退顺序
 * 如果找不到当前语言的文件，按此顺序尝试
 */
const languageFallback: Record<Language, Language[]> = {
  'zh-TW': ['en', 'zh-CN'], // 繁体中文 -> 英文 -> 简体中文
  'zh-CN': ['en', 'zh-TW'], // 简体中文 -> 英文 -> 繁体中文
  'en': ['zh-TW', 'zh-CN'], // 英文 -> 繁体中文 -> 简体中文
};

/**
 * 获取文件的所有可能路径（按优先级排序）
 */
function getFilePaths(basePath: string, language: Language): string[] {
  const paths: string[] = [];
  
  // 1. 当前语言的文件
  paths.push(`${basePath}.${language}.mdx`);
  
  // 2. 回退语言的文件
  for (const fallbackLang of languageFallback[language]) {
    paths.push(`${basePath}.${fallbackLang}.mdx`);
  }
  
  // 3. 默认文件（无语言后缀）
  paths.push(`${basePath}.mdx`);
  
  return paths;
}

/**
 * 尝试加载文件，按优先级顺序
 */
async function tryLoadFile(filePaths: string[]): Promise<{ content: string; language: string } | null> {
  for (const filePath of filePaths) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      // 从文件路径提取语言标识
      const match = filePath.match(/\.(zh-TW|zh-CN|en)\.mdx$/);
      const detectedLanguage = match ? match[1] : 'default';
      return { content, language: detectedLanguage };
    } catch {
      // 继续尝试下一个文件
      continue;
    }
  }
  return null;
}

/**
 * 加载多语言内容
 * @param basePath 文件基础路径（不含扩展名和语言标识）
 * @param language 当前语言
 * @returns 文件内容和检测到的语言，如果找不到则返回 null
 */
export async function loadContent(
  basePath: string,
  language: Language
): Promise<{ content: string; language: string } | null> {
  const filePaths = getFilePaths(basePath, language);
  return await tryLoadFile(filePaths);
}

/**
 * 检查文件是否存在（任何语言版本）
 */
export async function contentExists(basePath: string): Promise<boolean> {
  const allLanguages: Language[] = ['zh-TW', 'zh-CN', 'en'];
  const paths: string[] = [];
  
  // 添加所有语言版本
  for (const lang of allLanguages) {
    paths.push(`${basePath}.${lang}.mdx`);
  }
  
  // 添加默认文件
  paths.push(`${basePath}.mdx`);
  
  // 检查是否有任何文件存在
  for (const filePath of paths) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      continue;
    }
  }
  
  return false;
}

/**
 * 构建内容文件的基础路径
 * @param segments 路径段数组，例如 ['content', 'personal', 'education']
 * @returns 完整的基础路径
 */
export function buildContentPath(...segments: string[]): string {
  return path.join(process.cwd(), ...segments);
}

