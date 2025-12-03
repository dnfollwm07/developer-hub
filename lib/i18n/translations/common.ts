import type { MultilangText } from '../types';
import { LANGUAGE } from '../constants';
export const common = {
  loading: {
    [LANGUAGE.ZH_TW]: '載入中...',
    [LANGUAGE.ZH_CN]: '加载中...',
    [LANGUAGE.EN]: 'Loading content...',
  } as MultilangText,
  notFound: {
    [LANGUAGE.ZH_TW]: '找不到此頁面',
    [LANGUAGE.ZH_CN]: '找不到此页面',
    [LANGUAGE.EN]: 'Content not found',
  } as MultilangText,
  browseContent: {
    [LANGUAGE.ZH_TW]: '瀏覽以下可用內容',
    [LANGUAGE.ZH_CN]: '浏览以下可用内容',
    [LANGUAGE.EN]: 'Browse through the available content below',
  } as MultilangText,
  noItems: {
    [LANGUAGE.ZH_TW]: '沒有可用項目',
    [LANGUAGE.ZH_CN]: '没有可用项目',
    [LANGUAGE.EN]: 'No items available',
  } as MultilangText,
  items: {
    [LANGUAGE.ZH_TW]: '個項目',
    [LANGUAGE.ZH_CN]: '个项目',
    [LANGUAGE.EN]: 'items',
  } as MultilangText,
  item: {
    [LANGUAGE.ZH_TW]: '個項目',
    [LANGUAGE.ZH_CN]: '个项目',
    [LANGUAGE.EN]: 'item',
  } as MultilangText,
  moreItems: {
    [LANGUAGE.ZH_TW]: '更多項目...',
    [LANGUAGE.ZH_CN]: '更多项目...',
    [LANGUAGE.EN]: 'more items...',
  } as MultilangText,
};
