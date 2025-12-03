# Developer Hub
# 我的筆記網站

This is a personal website built with Next.js and Tailwind CSS to showcase personal profile, project experience, and technical notes.
這是一個使用 Next.js 和 Tailwind CSS 建立的個人網站，用於展示個人介紹、項目經驗和技術筆記。

## Features
## 功能特點

- Responsive layout for all device sizes
- 響應式設計，適配各種設備
- Rich personal profile with skills overview
- 個人介紹頁面，展示基本資訊和技能
- Project showcase presented as interactive cards
- 項目展示區，以卡片形式呈現個人項目
- Technical notes rendered from Markdown content
- 技術筆記區，支援 Markdown 格式
- Automated deployment to Vercel
- 自動化部署到 Vercel
- Multi-language support (Traditional Chinese, Simplified Chinese, English)
- 多語言支援（繁體中文、簡體中文、英文）

## Design Philosophy
## 設計理念

As a personal blog, the core philosophy is **maintenance efficiency**. By managing content with Markdown files, the system balances simplicity, maintainability, and functionality for long-term sustainability.
作為個人部落格，本專案的核心理念是**維護效率**。透過 Markdown 檔案管理內容，在簡潔性、可維護性與功能性之間找到平衡，確保長期運營。

### Why Markdown?
### 為什麼選擇 Markdown？

- **Low maintenance cost**: Pure text files without database management
- **低維護成本**：內容以純文字檔案儲存，無需資料庫
- **Version control friendly**: Every change tracked via Git for easy rollback
- **版本控制整合**：透過 Git 追蹤變更，易於備份與回溯
- **Simple deployment**: Content and code deploy together automatically
- **部署簡潔**：內容更新與程式碼同時自動部署
- **Low learning curve**: Intuitive syntax editable in any text editor
- **學習曲線低**：語法直觀，可用任何文字編輯器編輯

### Best Balance for Personal Maintenance
### 個人維護的最佳平衡

The system keeps a balance in three dimensions:
本系統在以下面向取得平衡：
- **Simplicity vs. capability**: Lightweight to update, powerful for multilingual, rich formatting
- **簡潔性與功能性**：足夠簡單以快速更新，也足夠強大支援多語言與複雜格式
- **Flexibility vs. structure**: Flexible folder organization with clear conventions to avoid chaos
- **靈活性與結構性**：彈性檔案結構搭配清楚約定，避免失控
- **Performance vs. maintainability**: Server components optimize performance while keeping logic debuggable
- **效能與可維護性**：伺服器端渲染保證效能，邏輯簡單易於除錯

Read more at the [Design Philosophy page](https://my-web-kappa-six.vercel.app/projects/my-web/philosophy).
詳細理念請參閱 [設計理念頁面](https://my-web-kappa-six.vercel.app/projects/my-web/philosophy)。

## Tech Stack
## 技術棧

- Next.js
- Next.js
- TypeScript
- TypeScript
- Tailwind CSS
- Tailwind CSS
- gray-matter (parse Markdown frontmatter)
- gray-matter（解析 Markdown）
- remark / rehype (Markdown to HTML pipeline)
- remark / rehype（Markdown 轉 HTML）

## Local Development
## 本地開發

1. Clone the repository
1. 克隆專案

```bash
git clone https://github.com/dnfollwm07/developer-hub.git
cd developer-hub
```

2. Install dependencies
2. 安裝依賴

```bash
npm install
```

3. Start the development server
3. 啟動開發伺服器

```bash
npm run dev
```

4. Visit http://localhost:3000
4. 訪問 http://localhost:3000

## Add New Notes
## 新增筆記

1. Create a Markdown file under `content/notes`
1. 在 `content/notes` 目錄下建立新的 Markdown 檔案
2. Follow the template:
2. 依照以下格式撰寫：

```markdown
---
title: "Note title"
date: "2024-04-11"
tags: ["tag1", "tag2"]
---

# Content

Your note goes here...
```

```markdown
---
title: "筆記標題"
date: "2024-04-11"
tags: ["標籤1", "標籤2"]
---

# 筆記內容

這裡是你的筆記內容...
```

## Customize Content
## 自訂內容

1. Update personal info in `app/page.tsx`
1. 修改個人資訊：編輯 `app/page.tsx`
2. Adjust project list in `data/projects.ts`
2. 調整項目列表：編輯 `data/projects.ts`
3. Tweak global styles in `tailwind.config.js`
3. 調整樣式設定：編輯 `tailwind.config.js`

## Deploy to Vercel
## 部署到 Vercel

1. Push code to GitHub
1. 將程式碼推送到 GitHub
2. Import the project in Vercel
2. 在 Vercel 匯入專案
3. Configure environment variables if needed
3. 視需要設定環境變數
4. Click deploy
4. 點擊部署
