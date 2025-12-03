'use client';

import { useLanguage } from './LanguageProvider';
import { getTranslations } from './translations/index';

export function useTranslation() {
  const { language } = useLanguage();
  return getTranslations(language);
}

