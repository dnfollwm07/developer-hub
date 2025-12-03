// 统一导出所有翻译模块
import { nav } from './nav';
import { home } from './home';
import { common } from './common';
import { sidebar } from './sidebar';
import { indexPage } from './indexPage';
import type { Translations, Language, MultilangText } from '../types';
import { LANGUAGE, defaultLanguage, languageNames } from '../constants';

/**
 * 从多语言对象中提取指定语言的文本
 */
function extractLanguage(
  obj: Record<string, unknown>,
  language: Language
): Record<string, unknown> | string {
  // 检查是否是 MultilangText 对象
  if (
    obj &&
    typeof obj === 'object' &&
    LANGUAGE.ZH_TW in obj &&
    LANGUAGE.ZH_CN in obj &&
    LANGUAGE.EN in obj &&
    Object.keys(obj).length === 3
  ) {
    return (obj as MultilangText)[language];
  }
  
  // 递归处理嵌套对象
  const result: Record<string, unknown> = {};
  for (const key in obj) {
    const value = obj[key];
    if (value && typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result[key] = extractLanguage(value as Record<string, unknown>, language);
    } else {
      result[key] = value;
    }
  }
  return result;
}

/**
 * 获取指定语言的翻译
 */
export function getTranslations(language: Language): Translations {
  return {
    nav: extractLanguage(nav, language) as Translations['nav'],
    home: extractLanguage(home, language) as Translations['home'],
    common: extractLanguage(common, language) as Translations['common'],
    sidebar: extractLanguage(sidebar, language) as Translations['sidebar'],
    indexPage: extractLanguage(indexPage, language) as Translations['indexPage'],
  };
}

// 重新导出常量
export { defaultLanguage, languageNames };
