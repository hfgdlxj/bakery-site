import type { MenuCategory } from './data'

export type CategoryInfo = {
  id: MenuCategory
  labelJa: string
  labelEn: string
  image: string
  description: string
}

export const menuCategories: CategoryInfo[] = [
  {
    id: '定番のパン',
    labelJa: '定番のパン',
    labelEn: 'Classic Breads',
    image: '/images/categories/Classic Breads.jpg',
    description: '毎日焼き上げる、飽きのこない定番の食事パン。素材の風味を最大限に引き出した、当店の顔ともいえる一品揃えです。',
  },
  {
    id: 'お惣菜パン',
    labelJa: 'お惣菜パン',
    labelEn: 'Savory Breads',
    image: '/images/categories/Savory Breads.jpg',
    description: '具材の旨みをたっぷり閉じ込めた、食事にもなるお惣菜パン。ランチや軽食にぴったりの、ボリューム満点なラインナップです。',
  },
  {
    id: 'クロワッサン',
    labelJa: 'クロワッサン',
    labelEn: 'Croissants',
    image: '/images/categories/Croissants.jpg',
    description: 'フランス産発酵バターを丁寧に折り込んだ、幾重もの層が美しいヴィエノワズリー。サクサクの食感と芳醇なバターの香りをお楽しみください。',
  },
  {
    id: '菓子パン',
    labelJa: '菓子パン',
    labelEn: 'Sweet Breads',
    image: '/images/categories/Sweet Breads.jpg',
    description: '甘さの中に職人のこだわりを感じる菓子パン。おやつにも贈り物にも喜ばれる、見た目も可愛らしいラインナップです。',
  },
  {
    id: 'サンドイッチ',
    labelJa: 'サンドイッチ',
    labelEn: 'Sandwiches',
    image: '/images/categories/Sandwiches.jpg',
    description: '自家製パンに新鮮な具材を挟んだ、こだわりのサンドイッチ。朝食にもランチにも、いつでも気軽にどうぞ。',
  },
  {
    id: 'コーヒー',
    labelJa: 'コーヒー',
    labelEn: 'Coffee',
    image: '/images/categories/coffee.jpg',
    description: 'パンとの相性を追求した、当店オリジナルブレンドのコーヒー。焼きたてのパンと一緒に、至福のひとときをお楽しみください。',
  },
]
