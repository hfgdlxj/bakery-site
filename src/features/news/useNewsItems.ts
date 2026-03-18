import { useQuery } from '@tanstack/react-query'
import { fetchNewsItems } from './api'
import { newsItems, type NewsItem } from './data'
import { getDataSourceMode, shouldFallbackToStatic } from '../../services/dataSourceMode'

async function getNewsItemsByMode(): Promise<NewsItem[]> {
  const mode = getDataSourceMode()
  if (mode === 'static') {
    return newsItems
  }

  try {
    return await fetchNewsItems()
  } catch (error) {
    if (shouldFallbackToStatic()) {
      return newsItems
    }
    throw error
  }
}

export function useNewsItems() {
  const mode = getDataSourceMode()
  return useQuery({
    queryKey: ['news-items', mode],
    queryFn: getNewsItemsByMode,
    staleTime: 5 * 60 * 1000,
  })
}
