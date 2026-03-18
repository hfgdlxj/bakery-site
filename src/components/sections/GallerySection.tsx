type GalleryItem =
  | {
      type: 'image'
      src: string
      alt: string
    }
  | {
      type: 'text'
      title: string
      description: string
    }

const topRow: GalleryItem[] = [
  { type: 'image', src: '/images/gallery-1.jpg', alt: 'お店1' },
  {
    type: 'text',
    title: '素材へのこだわり',
    description:
      '国産小麦と発酵バターを中心に、季節ごとの素材を丁寧に選び、毎日焼きたてをお届けします。',
  },
  { type: 'image', src: '/images/gallery-2.jpg', alt: 'お店2' },
  {
    type: 'text',
    title: '職人の手仕事',
    description:
      '生地作りから焼成まで、時間と温度を細かく見極めながら、ひとつひとつ手作業で仕上げています。',
  },
  { type: 'image', src: '/images/gallery-3.jpg', alt: 'お店3' },
  {
    type: 'text',
    title: '焼きたてへの想い',
    description:
      'オーブンから出した瞬間の香りと食感を大切にし、時間帯ごとに焼き上げることで、いつ来ても焼きたてのおいしさを楽しめます。',
  },
]

const bottomRow: GalleryItem[] = [
  { type: 'image', src: '/images/gallery-4.jpg', alt: 'お店4' },
  {
    type: 'text',
    title: '地域に寄り添う店',
    description:
      '朝の一杯から夕方のおやつまで、日常にそっと寄り添うパン屋として、街の皆さまをお迎えします。',
  },
  { type: 'image', src: '/images/gallery-5.jpg', alt: 'お店5' },
  {
    type: 'text',
    title: '季節限定の楽しみ',
    description:
      '旬の果実や素材を取り入れた限定メニューを毎月ご用意。訪れるたびに新しい味と出会えます。',
  },
  { type: 'image', src: '/images/gallery-6.jpg', alt: 'お店6' },
  {
    type: 'text',
    title: '店内で過ごす時間',
    description:
      '木のぬくもりを感じる空間で、焼きたての香りとともにゆったりした時間をお過ごしいただけます。',
  },
]

function renderItem(item: GalleryItem, key: string) {
  if (item.type === 'image') {
    return (
      <div className="gallery__item" key={key}>
        <img src={item.src} alt={item.alt} />
      </div>
    )
  }
  return (
    <div className="gallery__item gallery__item--text" key={key}>
      <div className="gallery__text-card">
        <p className="gallery__text-title">{item.title}</p>
        <p className="gallery__text-desc">{item.description}</p>
      </div>
    </div>
  )
}

export function GallerySection() {
  return (
    <section className="gallery">
      <div className="gallery__row gallery__row--right">
        <div className="gallery__track">
          {topRow.map((item, i) => renderItem(item, `top-a-${i}`))}
          {topRow.map((item, i) => renderItem(item, `top-b-${i}`))}
        </div>
      </div>
      <div className="gallery__row gallery__row--left">
        <div className="gallery__track">
          {bottomRow.map((item, i) => renderItem(item, `bot-a-${i}`))}
          {bottomRow.map((item, i) => renderItem(item, `bot-b-${i}`))}
        </div>
      </div>
    </section>
  )
}
