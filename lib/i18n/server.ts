import { cookies } from 'next/headers';
import { translations, defaultLanguage } from './translations';
import type { Language, Translations } from './types';

export function getServerLanguage(): Language {
  // Try to get language from cookies
  const cookieStore = cookies();
  const langCookie = cookieStore.get('language');
  
  if (langCookie?.value && (langCookie.value === 'zh-TW' || langCookie.value === 'zh-CN' || langCookie.value === 'en')) {
    return langCookie.value as Language;
  }
  
  return defaultLanguage;
}

export function getServerTranslations(): Translations {
  const language = getServerLanguage();
  return translations[language];
}

