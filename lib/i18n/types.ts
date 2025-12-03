import { LANGUAGE } from './constants';

// 导出语言类型（从枚举派生）
export type Language = LANGUAGE;

// 多语言文本类型：每个字段都是一个包含三种语言的对象
export type MultilangText = {
  [LANGUAGE.ZH_TW]: string;
  [LANGUAGE.ZH_CN]: string;
  [LANGUAGE.EN]: string;
};

// 多语言对象类型：用于嵌套对象
export type MultilangObject<T> = {
  [K in keyof T]: T[K] extends object ? MultilangObject<T[K]> : MultilangText;
};

// 翻译后的类型（运行时）
export interface Translations {
  nav: {
    home: string;
    aboutMe: string;
    projects: string;
    notes: string;
  };
  home: {
    welcome: string;
    hello: string;
    name: string;
    callMe: string;
    description: string;
    aboutMeButton: string;
    viewNotesButton: string;
    exploreWork: string;
    exploreDescription: string;
    aboutMeCard: {
      title: string;
      description: string;
    };
    projectsCard: {
      title: string;
      description: string;
    };
    notesCard: {
      title: string;
      description: string;
    };
  };
  common: {
    loading: string;
    notFound: string;
    browseContent: string;
    noItems: string;
    items: string;
    item: string;
    moreItems: string;
  };
  sidebar: {
    navigation: string;
    aboutMe: string;
    education: string;
    workExperience: string;
    myProjects: string;
    meituan: string;
    myWeb: string;
    tailwindCSS: string;
    nextjs: string;
    myNotes: string;
    operatingSystem: string;
    processThread: string;
    network: string;
    networkModel: string;
    routerSwitch: string;
    browserParseUrl: string;
    http: string;
    tcp: string;
    ip: string;
    mac: string;
    dataStructure: string;
    tree: string;
    frontend: string;
    react: string;
    reactHooks: string;
    useMemoUseState: string;
    useEffect: string;
    reactFC: string;
    componentExamples: string;
    componentCommunication: string;
    electron: string;
    mainRenderer: string;
    ipc: string;
    nativeAPIs: string;
    packagingPublishing: string;
    css: string;
    selectors: string;
    boxModels: string;
    layout: string;
    styling: string;
    responsiveDesign: string;
    optimizationPreprocessors: string;
    html: string;
    basics: string;
    storage: string;
    scripting: string;
    buildingBlocks: string;
    media: string;
    request: string;
    restAPI: string;
    android: string;
    backend: string;
    otherTechniques: string;
    tools: string;
  };
  indexPage: {
    browseAvailable: string;
  };
}
