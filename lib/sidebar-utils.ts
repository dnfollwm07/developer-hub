import type { SidebarItem, TranslatedSidebarItem } from '@/config/sidebar-types';
import { sidebarConfigs } from '@/config/sidebar';
import type { Language } from './i18n/types';
import { sidebar } from './i18n/translations/sidebar';
import { LANGUAGE } from './i18n/constants';
import type { MultilangText } from './i18n/types';

/**
 * 从多语言对象中获取指定语言的文本
 */
function getText(multilangText: MultilangText, language: Language): string {
  return multilangText[language];
}

/**
 * 将配置项转换为翻译后的项
 */
function translateSidebarItem(
  item: SidebarItem,
  language: Language
): TranslatedSidebarItem {
  const sidebarText = (sidebar as Record<string, MultilangText>)[item.titleKey];
  const title = sidebarText ? getText(sidebarText, language) : item.titleKey;
  
  return {
    title,
    href: item.href,
    children: item.children?.map(child => translateSidebarItem(child, language)),
  };
}

/**
 * 获取翻译后的 sidebar 配置
 */
export function getTranslatedSidebarItems(language: Language): TranslatedSidebarItem[] {
  return sidebarConfigs.map(item => translateSidebarItem(item, language));
}

/**
 * 递归查找 sidebar 中匹配指定路径的项
 */
export function findSidebarItemByPath(
  items: TranslatedSidebarItem[],
  path: string
): TranslatedSidebarItem | null {
  // 规范化路径
  let normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  if (normalizedPath === '') normalizedPath = '/';
  
  for (const item of items) {
    // 精确匹配
    if (item.href === normalizedPath) {
      return item;
    }
    
    // 检查路径是否以当前项的 href 开头
    if (normalizedPath.startsWith(item.href + '/') || normalizedPath === item.href) {
      // 如果有子节点，先递归查找子节点
      if (item.children) {
        const found = findSidebarItemByPath(item.children, normalizedPath);
        if (found) return found;
      }
      
      // 如果路径完全匹配当前项，返回当前项
      if (normalizedPath === item.href) {
        return item;
      }
    }
  }
  
  return null;
}

/**
 * 根据路径获取子节点列表
 */
export function getChildrenByPath(path: string, language?: Language): TranslatedSidebarItem[] {
  // 规范化路径
  const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  
  // 如果没有提供语言，使用默认语言
  const lang: Language = language || LANGUAGE.EN;
  const items = getTranslatedSidebarItems(lang);
  
  // 查找匹配的项
  const item = findSidebarItemByPath(items, normalizedPath);
  
  if (item && item.children) {
    return item.children;
  }
  
  return [];
}

/**
 * 根据路径获取标题
 */
export function getTitleByPath(path: string, language?: Language): string {
  const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  const lang: Language = language || LANGUAGE.EN;
  const items = getTranslatedSidebarItems(lang);
  const item = findSidebarItemByPath(items, normalizedPath);
  return item?.title || 'Content';
}
