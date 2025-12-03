import type { Translations, Language } from './types';

export const translations: Record<Language, Translations> = {
  'zh-TW': {
    nav: {
      home: '首頁',
      aboutMe: '關於我',
      projects: '專案',
      notes: '筆記',
    },
    home: {
      welcome: '歡迎來到我的開發者中心',
      hello: '你好，我是',
      name: '蘇敬甯',
      callMe: '你可以叫我',
      description: '一位熱愛學習與紀錄的開發者。',
      aboutMeButton: '關於我',
      viewNotesButton: '查看筆記',
      exploreWork: '探索我的作品',
      exploreDescription: '發現我的專案、技術筆記和專業歷程',
      aboutMeCard: {
        title: '關於我',
        description: '了解我的教育背景、工作經驗和專業背景',
      },
      projectsCard: {
        title: '我的專案',
        description: '探索我的專案作品集和技術實現',
      },
      notesCard: {
        title: '技術筆記',
        description: '瀏覽我的技術筆記和學習資源',
      },
    },
    common: {
      loading: '載入中...',
      notFound: '請在側邊欄找到您要查找的筆記。',
      browseContent: '瀏覽以下可用內容',
      noItems: '沒有可用項目',
      items: '個項目',
      item: '個項目',
      moreItems: '更多項目...',
    },
    sidebar: {
      navigation: '導航',
    },
    indexPage: {
      browseAvailable: '瀏覽以下可用內容',
    },
  },
  'zh-CN': {
    nav: {
      home: '首页',
      aboutMe: '关于我',
      projects: '项目',
      notes: '笔记',
    },
    home: {
      welcome: '欢迎来到我的开发者中心',
      hello: '你好，我是',
      name: '苏敬甯',
      callMe: '你可以叫我',
      description: '一位热爱学习与纪录的开发者。',
      aboutMeButton: '关于我',
      viewNotesButton: '查看笔记',
      exploreWork: '探索我的作品',
      exploreDescription: '发现我的项目、技术笔记和专业历程',
      aboutMeCard: {
        title: '关于我',
        description: '了解我的教育背景、工作经验和专业背景',
      },
      projectsCard: {
        title: '我的项目',
        description: '探索我的项目作品集和技术实现',
      },
      notesCard: {
        title: '技术笔记',
        description: '浏览我的技术笔记和学习资源',
      },
    },
    common: {
      loading: '加载中...',
      notFound: '请在侧边栏找到您要查找的笔记。',
      browseContent: '浏览以下可用内容',
      noItems: '没有可用项目',
      items: '个项目',
      item: '个项目',
      moreItems: '更多项目...',
    },
    sidebar: {
      navigation: '导航',
    },
    indexPage: {
      browseAvailable: '浏览以下可用内容',
    },
  },
  'en': {
    nav: {
      home: 'Home',
      aboutMe: 'About Me',
      projects: 'Projects',
      notes: 'Notes',
    },
    home: {
      welcome: 'Welcome to My Developer Hub',
      hello: 'Hello, I\'m',
      name: 'Jing-Ning Su',
      callMe: 'You can call me',
      description: 'A passionate developer who loves learning and recording.',
      aboutMeButton: 'About Me',
      viewNotesButton: 'View Notes',
      exploreWork: 'Explore My Work',
      exploreDescription: 'Discover my projects, technical notes, and professional journey',
      aboutMeCard: {
        title: 'About Me',
        description: 'Learn about my education, work experience, and professional background',
      },
      projectsCard: {
        title: 'My Projects',
        description: 'Explore my portfolio of projects and technical implementations',
      },
      notesCard: {
        title: 'Technical Notes',
        description: 'Browse my collection of technical notes and learning resources',
      },
    },
    common: {
      loading: 'Loading content...',
      notFound: 'Please find the note you are looking for in the sidebar.',
      browseContent: 'Browse through the available content below',
      noItems: 'No items available',
      items: 'items',
      item: 'item',
      moreItems: 'more items...',
    },
    sidebar: {
      navigation: 'Navigation',
    },
    indexPage: {
      browseAvailable: 'Browse through the available content below',
    },
  },
};

export const languageNames: Record<Language, string> = {
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文',
  'en': 'English',
};

export const defaultLanguage: Language = 'en';

