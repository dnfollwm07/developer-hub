import { cookies } from 'next/headers';
import { getTranslations } from './translations/index';
import { LANGUAGE, defaultLanguage } from './constants';
import type { Language, Translations } from './types';

export function getServerLanguage(): Language {
  // Try to get language from cookies
  const cookieStore = cookies();
  const langCookie = cookieStore.get('language');
  
  if (langCookie?.value) {
    const langValue = langCookie.value as Language;
    // 验证是否是有效的语言枚举值
    if (Object.values(LANGUAGE).includes(langValue)) {
      return langValue;
    }
  }
  
  return defaultLanguage;
}

export function getServerTranslations(): Translations {
  const language = getServerLanguage();
  return getTranslations(language);
}

