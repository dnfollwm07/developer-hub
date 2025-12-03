import type { SidebarItem } from './sidebar-types';

// Sidebar 配置使用翻译键
// 实际的标题会通过 getTranslatedSidebarItems 函数根据当前语言动态获取
export const sidebarConfig: SidebarItem = {
  titleKey: 'aboutMe',
  href: '/personal',
  children: [
    { titleKey: 'summary', href: '/personal/summary'},
    { titleKey: 'technicalSkills', href: '/personal/technical_skills'},
    { titleKey: 'education', href: '/personal/education'},
    { titleKey: 'workExperience', href: '/personal/work_experience'},
  ],
};

export const sidebarConfigs: SidebarItem[] = [
  {
    titleKey: 'aboutMe',
    href: '/personal',
    children: [
      { titleKey: 'summary', href: '/personal/summary'},
      { titleKey: 'technicalSkills', href: '/personal/technical_skills'},
      { titleKey: 'education', href: '/personal/education'},
      { titleKey: 'workExperience', href: '/personal/work_experience'},
    ],
  },
  {
    titleKey: 'myProjects',
    href: '/projects',
    children: [
      {
        titleKey: 'flightBookingPlatform',
        href: '/projects/flight-booking-platform'
      },
      {
        titleKey: 'oncallAutomation',
        href: '/projects/oncall-automation'
      },
      {
        titleKey: 'snippai',
        href: '/projects/snippai'
      },
      {
        titleKey: 'myWeb',
        href: '/projects/my-web',
        children: [
          {
            titleKey: 'tailwindCSS',
            href: '/projects/my-web/tailwindcss'
          },
          {
            titleKey: 'nextjs',
            href: '/projects/my-web/nextjs'
          }
        ],
      },
    ]
  },
  {
    titleKey: 'myNotes',
    href: '/notes',
    children: [
      { 
        titleKey: 'operatingSystem', 
        href: '/notes/operating_system',
        children: [
          { 
            titleKey: 'processThread', 
            href: '/notes/operating_system/process_thread' 
          }
        ]
      },
      { 
        titleKey: 'network', 
        href: '/notes/network/index',
        children: [
          { 
            titleKey: 'networkModel', 
            href: '/notes/network/model' 
          },
          { 
            titleKey: 'routerSwitch', 
            href: '/notes/network/router_switch' 
          },
          { 
            titleKey: 'browserParseUrl', 
            href: '/notes/network/webParseUrl' 
          },
          { 
            titleKey: 'http', 
            href: '/notes/network/http' 
          },
          { 
            titleKey: 'tcp', 
            href: '/notes/network/tcp' 
          },
          { 
            titleKey: 'ip', 
            href: '/notes/network/ip' 
          },
          { 
            titleKey: 'mac', 
            href: '/notes/network/mac' 
          },
        ]
      },
      { 
        titleKey: 'dataStructure', 
        href: '/notes/data_structure',
        children: [
          { 
            titleKey: 'tree', 
            href: '/notes/data_structure/tree' 
          },
        ]
      },
      { 
        titleKey: 'frontend', 
        href: '/notes/frontend/index',
        children: [
          { 
            titleKey: 'react', 
            href: '/notes/frontend/react/index',
            children: [
              { 
                titleKey: 'reactHooks', 
                href: '/notes/frontend/react/hooks' 
              },
              {
                titleKey: 'useMemoUseState',
                href: '/notes/frontend/react/useMemo_useState'
              },
              {
                titleKey: 'useEffect',
                href: '/notes/frontend/react/useEffect'
              },
              {
                titleKey: 'reactFC',
                href: '/notes/frontend/react/react_fc'
              },
              {
                titleKey: 'componentExamples',
                href: '/notes/frontend/react/component_examples'
              },
              {
                titleKey: 'componentCommunication',
                href: '/notes/frontend/react/component_communication'
              }
            ]
          },
          {
            titleKey: 'electron',
            href: '/notes/frontend/electron/index',
            children: [
              {
                titleKey: 'mainRenderer',
                href: '/notes/frontend/electron/main_renderer'
              },
              {
                titleKey: 'ipc',
                href: '/notes/frontend/electron/ipc'
              },
              {
                titleKey: 'nativeAPIs',
                href: '/notes/frontend/electron/native_apis'
              },
              {
                titleKey: 'packagingPublishing',
                href: '/notes/frontend/electron/packaging_publishing'
              }
            ]
          },
          {
            titleKey: 'css',
            href: '/notes/frontend/css/index',
            children: [
              {
                titleKey: 'selectors',
                href: '/notes/frontend/css/selectors'
              },
              {
                titleKey: 'boxModels',
                href: '/notes/frontend/css/box_model'
              },
              {
                titleKey: 'layout',
                href: '/notes/frontend/css/layout'
              },
              {
                titleKey: 'styling',
                href: '/notes/frontend/css/styling-techniques'
              },
              {
                titleKey: 'responsiveDesign',
                href: '/notes/frontend/css/responsive-design'
              },
              {
                titleKey: 'optimizationPreprocessors',
                href: '/notes/frontend/css/optimization-preprocessors'
              },
              {
                titleKey: 'tailwindCSS',
                href: '/notes/frontend/css/tailwindcss'
              },
            ]
          },
          {
            titleKey: 'html',
            href: '/notes/frontend/html',
            children: [
              {
                titleKey: 'basics',
                href: '/notes/frontend/html/basic'
              },
              {
                titleKey: 'storage',
                href: '/notes/frontend/html/storage'
              },
              {
                titleKey: 'scripting',
                href: '/notes/frontend/html/scripting'
              },
              {
                titleKey: 'buildingBlocks',
                href: '/notes/frontend/html/building_blocks'
              },
              {
                titleKey: 'media',
                href: '/notes/frontend/html/media'
              }
            ]
          },
          {
            titleKey: 'nextjs',
            href: '/notes/frontend/nextjs/index'
          },
          {
            titleKey: 'request',
            href: '/notes/frontend/request',
            children: [
              {
                titleKey: 'restAPI',
                href: '/notes/frontend/request/restAPI'
              }
            ]
          }
        ]
      },
      { 
        titleKey: 'android', 
        href: '/notes/android/index'
      },
      { 
        titleKey: 'backend', 
        href: '/notes/backend/index'
      },
      { 
        titleKey: 'otherTechniques', 
        href: '/notes/other_techniques/index'
      },
      { 
        titleKey: 'tools', 
        href: '/notes/tools/index'
      },
    ],
  },
];
