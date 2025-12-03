export interface SidebarItem {
  title: string;
  href: string;
  children?: SidebarItem[];
}

export const sidebarItems: SidebarItem[] = [
  {
    title: 'About Me',
    href: '/personal',
    children: [
      { title: 'Education', href: '/personal/education'},
      { title: 'Work Experience', href: '/personal/work_experience'},
    ],
  },
  {
    title: 'My Projects',
    href: '/projects',
    children: [
      {
        title: 'Meituan',
        href: '/projects/meituan'
      },
      {
        title: 'My Web',
        href: '/projects/my-web',
        children: [
          {
            title: 'Tailwind CSS',
            href: '/projects/my-web/tailwindcss'
          },
          {
            title: 'Nextjs',
            href: '/projects/my-web/nextjs'
          }
        ],
      },
    ]
  },
  {
    title: 'My Notes',
    href: '/notes',
    children: [
      { 
        title: 'Operating System', 
        href: '/notes/operating_system',
        children: [
          { 
            title: '作業系統', 
            href: '/notes/operating_system/process_thread' 
          }
        ]
      },
      { 
        title: 'Network', 
        href: '/notes/network/index',
        children: [
          { 
            title: '網絡模型', 
            href: '/notes/network/model' 
          },
          { 
            title: '網卡、路由器、交換機', 
            href: '/notes/network/router_switch' 
          },
          { 
            title: '瀏覽器解析Url', 
            href: '/notes/network/webParseUrl' 
          },
          { 
            title: 'HTTP', 
            href: '/notes/network/http' 
          },
          { 
            title: 'TCP', 
            href: '/notes/network/tcp' 
          },
          { 
            title: 'IP', 
            href: '/notes/network/ip' 
          },
          { 
            title: 'MAC', 
            href: '/notes/network/mac' 
          },
        ]
      },
      { 
        title: 'Data Structure', 
        href: '/notes/data_structure',
        children: [
          { 
            title: '樹', 
            href: '/notes/data_structure/tree' 
          },
        ]
      },
      { 
        title: 'Frontend', 
        href: '/notes/frontend/index',
        children: [
          { 
            title: 'React', 
            href: '/notes/frontend/react/index',
            children: [
              { 
                title: 'React Hooks', 
                href: '/notes/frontend/react/hooks' 
              },
              {
                title: 'useMemo, useState',
                href: '/notes/frontend/react/useMemo_useState'
              },
              {
                title: 'useEffect',
                href: '/notes/frontend/react/useEffect'
              },
              {
                title: 'react.FC',
                href: '/notes/frontend/react/react_fc'
              },
              {
                title: '模塊範例',
                href: '/notes/frontend/react/component_examples'
              },
              {
                title: '組件通信',
                href: '/notes/frontend/react/component_communication'
              }
            ]
          },
          {
            title: 'Electron',
            href: '/notes/frontend/electron/index',
            children: [
              {
                title: 'Main 與 Renderer Process',
                href: '/notes/frontend/electron/main_renderer'
              },
              {
                title: 'IPC 通訊',
                href: '/notes/frontend/electron/ipc'
              },
              {
                title: '原生 API（Native APIs）',
                href: '/notes/frontend/electron/native_apis'
              },
              {
                title: '應用打包與發佈',
                href: '/notes/frontend/electron/packaging_publishing'
              }
            ]
          },
          {
            title: 'CSS',
            href: '/notes/frontend/css/index',
            children: [
              {
                title: 'Selectors',
                href: '/notes/frontend/css/selectors'
              },
              {
                title: 'Box Models',
                href: '/notes/frontend/css/box_model'
              },
              {
                title: 'Layout',
                href: '/notes/frontend/css/layout'
              },
              {
                title: 'Styling',
                href: '/notes/frontend/css/styling-techniques'
              },
              {
                title: '響應式佈局',
                href: '/notes/frontend/css/responsive-design'
              },
              {
                title: '優化與預處理器',
                href: '/notes/frontend/css/optimization-preprocessors'
              },
              {
                title: 'Tailwind CSS',
                href: '/notes/frontend/css/tailwindcss'
              },
            ]
          },
          {
            title: 'HTML',
            href: '/notes/frontend/html',
            children: [
              {
                title: '基礎',
                href: '/notes/frontend/html/basic'
              },
              {
                title: '存儲',
                href: '/notes/frontend/html/storage'
              },
              {
                title: '腳本與性能',
                href: '/notes/frontend/html/scripting'
              },
              {
                title: '構建塊與功能',
                href: '/notes/frontend/html/building_blocks'
              },
              {
                title: '媒體與元素',
                href: '/notes/frontend/html/media'
              }
            ]
          },
          {
            title: 'Nextjs',
            href: '/notes/frontend/nextjs/index'
          },
          {
            title: 'Request',
            href: '/notes/frontend/request',
            children: [
              {
                title: 'RestAPI',
                href: '/notes/frontend/request/restAPI'
              }
            ]
          }
        ]
      },
      { 
        title: 'Android', 
        href: '/notes/android/index'
      },
      { 
        title: 'Backend', 
        href: '/notes/backend/index'
      },
      { 
        title: 'Other Techniques', 
        href: '/notes/other_techniques/index'
      },
      { 
        title: 'Tools', 
        href: '/notes/tools/index'
      },
    ],
  },
  // {
  //   title: '預覽編輯器',
  //   href: '/editor'
  // },
]; 