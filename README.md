# 我的筆記網站

這是一個使用 Next.js 和 Tailwind CSS 建立的個人網站，用於展示個人介紹、項目經驗和技術筆記。

## 功能特點

- 響應式設計，適配各種設備
- 個人介紹頁面，展示基本信息和技能
- 項目展示區，以卡片形式展示個人項目
- 技術筆記區，支援 Markdown 格式
- 自動化部署到 Vercel
- 多語言支援（繁體中文、簡體中文、英文）

## 設計理念

本專案的核心設計理念是**內容部署的簡單化**。透過使用簡單的 Markdown 語法，我們建立了一個系統，讓任何人都能夠輕鬆添加和編輯內容，無需前端開發知識。

### 為什麼選擇 Markdown？

- **簡潔易學**：Markdown 語法直觀，任何人都能快速上手
- **版本控制友好**：內容以純文字檔案形式存在，易於追蹤和管理
- **技術與內容分離**：內容創作者專注於內容品質，開發者專注於系統架構
- **靈活擴展**：支援多語言、自訂元件，同時保持簡單性

### 平衡清晰度與簡易性

我們在**頁面的清晰呈現**和**配置的簡易性**之間找到了最佳平衡點：
- 內容結構清晰明確，易於閱讀和理解
- 配置過程簡單直觀，降低使用門檻
- 技術架構優雅，確保長期可維護性

詳細的設計理念請參閱 [設計理念頁面](/projects/my-web/philosophy)。

## 技術棧

- Next.js
- TypeScript
- Tailwind CSS
- gray-matter（解析 Markdown）
- remark / rehype（Markdown 轉 HTML）

## 本地開發

1. 克隆項目

```bash
git clone https://github.com/dnfollwm07/developer-hub.git
cd developer-hub
```

2. 安裝依賴

```bash
npm install
```

3. 啟動開發服務器

```bash
npm run dev
```

4. 訪問 http://localhost:3000

## 新增筆記

1. 在 `content/notes` 目錄下創建新的 Markdown 文件
2. 文件格式如下：

```markdown
---
title: "筆記標題"
date: "2024-04-11"
tags: ["標籤1", "標籤2"]
---

# 筆記內容

這裡是你的筆記內容...
```

## 自訂內容

1. 修改個人信息：編輯 `app/page.tsx`
2. 修改項目列表：編輯 `data/projects.ts`
3. 修改網站樣式：編輯 `tailwind.config.js`

## 部署到 Vercel

1. 將代碼推送到 GitHub 倉庫
2. 在 Vercel 中導入項目
3. 配置環境變量（如果需要）
4. 點擊部署
