import type { MultilangText } from '../types';
import { LANGUAGE } from '../constants';

export const nav = {
  home: {
    [LANGUAGE.ZH_TW]: '首頁',
    [LANGUAGE.ZH_CN]: '首页',
    [LANGUAGE.EN]: 'Home',
  } as MultilangText,
  aboutMe: {
    [LANGUAGE.ZH_TW]: '關於我',
    [LANGUAGE.ZH_CN]: '关于我',
    [LANGUAGE.EN]: 'About Me',
  } as MultilangText,
  projects: {
    [LANGUAGE.ZH_TW]: '專案',
    [LANGUAGE.ZH_CN]: '项目',
    [LANGUAGE.EN]: 'Projects',
  } as MultilangText,
  notes: {
    [LANGUAGE.ZH_TW]: '筆記',
    [LANGUAGE.ZH_CN]: '笔记',
    [LANGUAGE.EN]: 'Notes',
  } as MultilangText,
};
