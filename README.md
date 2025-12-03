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

作為個人部落格，本專案的核心設計理念是**維護效率**。透過使用 Markdown 檔案管理內容，在簡潔性、可維護性和功能性之間找到最佳平衡點，確保長期可持續運營。

### 為什麼選擇 Markdown？

- **低維護成本**：內容以純文字檔案儲存，無需資料庫管理
- **版本控制整合**：所有變更透過 Git 追蹤，易於備份和恢復
- **部署簡潔**：內容更新與程式碼一起自動部署
- **學習曲線低**：Markdown 語法直觀，可用任何文字編輯器編輯

### 個人維護的最佳平衡

從個人維護角度出發，在以下方面取得平衡：
- **簡潔性與功能性**：足夠簡單以快速更新，足夠強大以支援多語言和複雜格式
- **靈活性與結構性**：靈活的檔案組織，配合清晰的約定防止混亂
- **效能與可維護性**：伺服器端渲染優化效能，簡單的邏輯易於除錯

詳細的設計理念請參閱 [設計理念頁面](https://my-web-kappa-six.vercel.app/projects/my-web/philosophy)。

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
