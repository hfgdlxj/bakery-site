import { z } from 'zod'
import { apiClient } from '../../services/api/client'
import { API_ENDPOINTS } from '../../services/api/endpoints'
import type { NewsItem } from './data'

const newsItemSchema = z.object({
  date: z.string(),
  content: z.string(),
})

const newsListSchema = z.array(newsItemSchema)

export async function fetchNewsItems(): Promise<NewsItem[]> {
  const response = await apiClient.get(API_ENDPOINTS.news)
  return newsListSchema.parse(response.data)
}
