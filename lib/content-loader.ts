import { promises as fs } from 'fs';
import path from 'path';
import type { Language } from './i18n/types';
import { LANGUAGE } from './i18n/constants';

/**
 * 统一的语言回退顺序
 * 如果找不到当前语言的文件，按此顺序尝试：英文 -> 简体中文 -> 繁体中文
 */
const languageFallback: Language[] = [LANGUAGE.EN, LANGUAGE.ZH_CN, LANGUAGE.ZH_TW];

/**
 * 获取文件的所有可能路径（按优先级排序）
 * 支持两种结构：
 * 1. 文件形式：content/personal/education.{language}.mdx
 * 2. 文件夹形式：content/personal/education/index.{language}.mdx
 * 
 * 优先级：
 * 1. 用户选择的语言（文件夹形式 -> 文件形式）
 * 2. 回退语言：英文 -> 简体中文 -> 繁体中文（文件夹形式 -> 文件形式）
 * 3. 无语言后缀的文件（作为最后回退，兼容旧文件结构）
 */
function getFilePaths(basePath: string, language: Language): string[] {
  const paths: string[] = [];
  
  // 1. 当前语言的文件（文件夹形式）
  paths.push(path.join(basePath, `index.${language}.mdx`));
  
  // 2. 当前语言的文件（文件形式）
  paths.push(`${basePath}.${language}.mdx`);
  
  // 3. 回退语言的文件（按统一优先级：EN -> ZH_CN -> ZH_TW）
  // 跳过当前语言，只添加其他语言
  for (const fallbackLang of languageFallback) {
    if (fallbackLang !== language) {
      // 文件夹形式
      paths.push(path.join(basePath, `index.${fallbackLang}.mdx`));
      // 文件形式
      paths.push(`${basePath}.${fallbackLang}.mdx`);
    }
  }
  
  // 4. 无语言后缀的文件（作为最后回退，兼容旧文件结构）
  paths.push(path.join(basePath, 'index.mdx'));
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
      const detectedLanguage = match ? (match[1] as Language) : 'default';
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
  const allLanguages: Language[] = [LANGUAGE.ZH_TW, LANGUAGE.ZH_CN, LANGUAGE.EN];
  const paths: string[] = [];
  
  // 添加所有语言版本（文件夹形式）
  for (const lang of allLanguages) {
    paths.push(path.join(basePath, `index.${lang}.mdx`));
  }
  
  // 添加所有语言版本（文件形式）
  for (const lang of allLanguages) {
    paths.push(`${basePath}.${lang}.mdx`);
  }
  
  // 添加默认文件（文件夹形式）
  paths.push(path.join(basePath, 'index.mdx'));
  
  // 添加默认文件（文件形式）
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

