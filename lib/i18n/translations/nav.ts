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
  editor: {
    [LANGUAGE.ZH_TW]: '編輯器',
    [LANGUAGE.ZH_CN]: '编辑器',
    [LANGUAGE.EN]: 'Editor',
  } as MultilangText,
  editorPlaceholder: {
    [LANGUAGE.ZH_TW]: '在這裡輸入 Markdown 內容...',
    [LANGUAGE.ZH_CN]: '在这里输入 Markdown 内容...',
    [LANGUAGE.EN]: 'Enter Markdown content here...',
  } as MultilangText,
  preview: {
    [LANGUAGE.ZH_TW]: '預覽',
    [LANGUAGE.ZH_CN]: '预览',
    [LANGUAGE.EN]: 'Preview',
  } as MultilangText,
  editorTitle: {
    [LANGUAGE.ZH_TW]: 'Markdown 預覽編輯器',
    [LANGUAGE.ZH_CN]: 'Markdown 预览编辑器',
    [LANGUAGE.EN]: 'Markdown Preview Editor',
  } as MultilangText,
  copyMarkdown: {
    [LANGUAGE.ZH_TW]: '複製',
    [LANGUAGE.ZH_CN]: '复制',
    [LANGUAGE.EN]: 'Copy',
  } as MultilangText,
  copied: {
    [LANGUAGE.ZH_TW]: '已複製',
    [LANGUAGE.ZH_CN]: '已复制',
    [LANGUAGE.EN]: 'Copied',
  } as MultilangText,
  downloadMarkdown: {
    [LANGUAGE.ZH_TW]: '下載',
    [LANGUAGE.ZH_CN]: '下载',
    [LANGUAGE.EN]: 'Download',
  } as MultilangText,
};
