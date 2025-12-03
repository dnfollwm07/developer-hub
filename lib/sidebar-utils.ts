import type { SidebarItem } from '@/config/sidebar';
import { sidebarItems } from '@/config/sidebar';

/**
 * 递归查找 sidebar 中匹配指定路径的项
 */
export function findSidebarItemByPath(
  items: SidebarItem[],
  path: string
): SidebarItem | null {
  // 规范化路径
  let normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  if (normalizedPath === '') normalizedPath = '/';
  
  for (const item of items) {
    // 精确匹配
    if (item.href === normalizedPath) {
      return item;
    }
    
    // 检查路径是否以当前项的 href 开头
    if (normalizedPath.startsWith(item.href + '/') || normalizedPath === item.href) {
      // 如果有子节点，先递归查找子节点
      if (item.children) {
        const found = findSidebarItemByPath(item.children, normalizedPath);
        if (found) return found;
      }
      
      // 如果路径完全匹配当前项，返回当前项
      if (normalizedPath === item.href) {
        return item;
      }
    }
  }
  
  return null;
}

/**
 * 根据路径获取子节点列表
 */
export function getChildrenByPath(path: string): SidebarItem[] {
  // 规范化路径
  const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  
  // 查找匹配的项
  const item = findSidebarItemByPath(sidebarItems, normalizedPath);
  
  if (item && item.children) {
    return item.children;
  }
  
  return [];
}

/**
 * 根据路径获取标题
 */
export function getTitleByPath(path: string): string {
  const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  const item = findSidebarItemByPath(sidebarItems, normalizedPath);
  return item?.title || 'Content';
}

