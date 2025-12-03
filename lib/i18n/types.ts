export type Language = 'zh-TW' | 'zh-CN' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    aboutMe: string;
    projects: string;
    notes: string;
  };
  
  // Home Page
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
  
  // Common
  common: {
    loading: string;
    notFound: string;
    browseContent: string;
    noItems: string;
    items: string;
    item: string;
    moreItems: string;
  };
  
  // Sidebar
  sidebar: {
    navigation: string;
  };
  
  // Index Page
  indexPage: {
    browseAvailable: string;
  };
}

