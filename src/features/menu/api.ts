import { z } from 'zod'
import { apiClient } from '../../services/api/client'
import { API_ENDPOINTS } from '../../services/api/endpoints'
import type { MenuItem } from './data'

const menuCategorySchema = z.enum([
  '定番のパン',
  'お惣菜パン',
  'クロワッサン',
  '菓子パン',
  'サンドイッチ',
  'コーヒー',
])

const menuItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: menuCategorySchema,
  image: z.string(),
  imageAlt: z.string(),
  featured: z.boolean(),
  reverse: z.boolean().optional(),
})

const menuListSchema = z.array(menuItemSchema)

export async function fetchMenuItems(): Promise<MenuItem[]> {
  const response = await apiClient.get(API_ENDPOINTS.menu)
  return menuListSchema.parse(response.data)
}
