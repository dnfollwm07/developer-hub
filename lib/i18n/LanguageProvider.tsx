'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from './types';
import { defaultLanguage } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'zh-TW' || savedLanguage === 'zh-CN' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language;
      if (browserLang.startsWith('zh')) {
        // Check if Traditional or Simplified
        const isTraditional = browserLang.includes('TW') || browserLang.includes('HK');
        setLanguageState(isTraditional ? 'zh-TW' : 'zh-CN');
      } else {
        setLanguageState('en');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Set cookie for server-side access
    if (typeof document !== 'undefined') {
      document.cookie = `language=${lang}; path=/; max-age=31536000`; // 1 year
      document.documentElement.lang = lang;
    }
  };

  // Update HTML lang attribute when language changes
  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  if (!mounted) {
    // Return default language during SSR
    return (
      <LanguageContext.Provider value={{ language: defaultLanguage, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

