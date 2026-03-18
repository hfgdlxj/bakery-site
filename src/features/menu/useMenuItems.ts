import { useQuery } from '@tanstack/react-query'
import { fetchMenuItems } from './api'
import { menuItems, type MenuItem } from './data'
import { getDataSourceMode, shouldFallbackToStatic } from '../../services/dataSourceMode'

async function getMenuItemsByMode(): Promise<MenuItem[]> {
  const mode = getDataSourceMode()
  if (mode === 'static') {
    return menuItems
  }

  try {
    return await fetchMenuItems()
  } catch (error) {
    if (shouldFallbackToStatic()) {
      return menuItems
    }
    throw error
  }
}

export function useMenuItems() {
  const mode = getDataSourceMode()
  return useQuery({
    queryKey: ['menu-items', mode],
    queryFn: getMenuItemsByMode,
    staleTime: 5 * 60 * 1000,
  })
}
