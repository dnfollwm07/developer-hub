/**
 * 全局语言枚举
 */
export enum LANGUAGE {
  ZH_TW = 'zh-TW',
  ZH_CN = 'zh-CN',
  EN = 'en',
}

/**
 * 语言类型（从枚举派生）
 */
export type Language = LANGUAGE;

/**
 * 语言名称映射
 */
export const languageNames: Record<LANGUAGE, string> = {
  [LANGUAGE.ZH_TW]: '繁體中文',
  [LANGUAGE.ZH_CN]: '简体中文',
  [LANGUAGE.EN]: 'English',
};

/**
 * 默认语言
 */
export const defaultLanguage: Language = LANGUAGE.EN;

