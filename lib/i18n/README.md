# 多语言架构说明

## 架构设计

采用**对象形式**的方式管理多语言配置。每个需要翻译的字段都是一个对象，包含三种语言的键值对。

## 目录结构

```
lib/i18n/
├── translations/          # 翻译模块目录
│   ├── nav.ts            # 导航栏翻译
│   ├── home.ts           # 首页翻译
│   ├── common.ts         # 通用翻译
│   ├── sidebar.ts        # Sidebar 翻译
│   ├── indexPage.ts      # 索引页翻译
│   └── index.ts          # 统一导出和组合函数
├── types.ts              # 类型定义
├── LanguageProvider.tsx  # 语言上下文 Provider
├── useTranslation.ts     # 客户端翻译 Hook
└── server.ts             # 服务器端翻译函数
```

## 优势

1. **直观易读**：每个字段的三种语言翻译都在同一个地方，一目了然
2. **易于维护**：添加新内容时，只需在一个对象中添加三种语言的翻译
3. **易于对比**：可以同时看到三种语言的翻译，方便检查一致性
4. **易于发现缺失**：如果某个语言缺少翻译，很容易发现
5. **类型安全**：TypeScript 类型检查确保翻译完整性

## 翻译格式

每个翻译字段都是一个对象，包含三种语言的键值对。使用 `LANGUAGE` 枚举而不是字符串：

```typescript
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
};
```

## 语言枚举

使用全局的 `LANGUAGE` 枚举来管理语言，避免字符串拼写错误：

```typescript
import { LANGUAGE } from '@/lib/i18n/constants';

// 使用枚举
const lang = LANGUAGE.ZH_TW;  // ✅ 正确
const lang2 = 'zh-TW';        // ❌ 不推荐，容易拼写错误
```

## 添加新翻译

### 1. 在对应的翻译文件中添加

例如，要在 Sidebar 中添加新项：

```typescript
// lib/i18n/translations/sidebar.ts
import { LANGUAGE } from '../constants';

export const sidebar = {
  // ... 现有字段
  newItem: {
    [LANGUAGE.ZH_TW]: '新項目',
    [LANGUAGE.ZH_CN]: '新项目',
    [LANGUAGE.EN]: 'New Item',
  } as MultilangText,
};
```

### 2. 更新类型定义

```typescript
// lib/i18n/types.ts
export interface Translations {
  sidebar: {
    // ... 现有字段
    newItem: string;  // 添加类型定义
  };
}
```

### 3. 在配置中使用

```typescript
// config/sidebar.ts
{
  titleKey: 'newItem',  // 使用翻译键
  href: '/path/to/item',
}
```

## Content 文件的多语言支持

对于 MDX 内容文件，使用文件命名方式：

```
content/
├── personal/
│   ├── education.zh-TW.mdx  # 繁体中文版本
│   ├── education.zh-CN.mdx  # 简体中文版本
│   └── education.en.mdx     # 英文版本
```

系统会自动根据当前语言加载对应的文件，如果找不到当前语言的文件，会按照回退顺序加载。

## 使用方式

### 客户端组件

```typescript
import { useTranslation } from '@/lib/i18n/useTranslation';

function MyComponent() {
  const t = useTranslation();
  return <div>{t.sidebar.newItem}</div>;
}
```

### 服务器组件

```typescript
import { getServerTranslations } from '@/lib/i18n/server';

export default async function MyPage() {
  const t = getServerTranslations();
  return <div>{t.sidebar.newItem}</div>;
}
```

## 文件说明

- `translations/nav.ts` - 导航栏相关翻译
- `translations/home.ts` - 首页相关翻译
- `translations/common.ts` - 通用文本翻译
- `translations/sidebar.ts` - Sidebar 标题翻译
- `translations/indexPage.ts` - 索引页翻译
- `translations/index.ts` - 统一导出和组合函数

## 最佳实践

1. **保持一致性**：确保所有三种语言的翻译都存在
2. **使用类型**：使用 `as MultilangText` 确保类型正确
3. **模块化**：按功能模块组织翻译文件
4. **命名规范**：使用 camelCase 命名翻译键
