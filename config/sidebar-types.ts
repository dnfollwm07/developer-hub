// Sidebar 配置类型定义
// 使用 titleKey 而不是 title，titleKey 对应 translations.ts 中的键

export interface SidebarItem {
  titleKey: string; // 翻译键，对应 translations.sidebar 中的键
  href: string;
  children?: SidebarItem[];
}

// 翻译后的 SidebarItem（用于运行时）
export interface TranslatedSidebarItem {
  title: string; // 翻译后的标题
  href: string;
  children?: TranslatedSidebarItem[];
}

