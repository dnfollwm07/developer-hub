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
 * 语言切换按钮文本（固定显示，不随语言变化）
 */
export const languageButtonText: Record<LANGUAGE, string> = {
  [LANGUAGE.ZH_TW]: 'Language',
  [LANGUAGE.ZH_CN]: 'Language',
  [LANGUAGE.EN]: '语言',
};

/**
 * 默认语言
 */
export const defaultLanguage: Language = LANGUAGE.EN;

