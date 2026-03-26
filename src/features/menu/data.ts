export type MenuCategory =
  | '定番のパン'
  | 'お惣菜パン'
  | 'クロワッサン'
  | '菓子パン'
  | 'サンドイッチ'
  | 'コーヒー'

export type MenuItem = {
  name: string
  description: string
  price: number
  category: MenuCategory
  image: string
  imageAlt: string
  featured: boolean
  reverse?: boolean
}

export const menuItems: MenuItem[] = [
  {
    name: 'カヌレ',
    description:
      '外はカリッと香ばしく、中はしっとりとした食感が特徴のフランスの伝統菓子です。ラム酒とバニラの風味が広がる、大人にも人気の一品です。',
    price: 280,
    category: '定番のパン',
    image: '/images/menu/Classic Bread1.jpg',
    imageAlt: 'パン・オ・レザン',
    featured: true,
  },
  {
    name: 'バゲット',
    description:
      '外はパリッと香ばしく、中はほどよい弾力のあるシンプルなフランスパンです。そのままでも、サンドイッチやお食事と合わせてもお楽しみいただけます。',
    price: 310,
    category: 'お惣菜パン',
    image: '/images/menu/Savory Bread1.jpg',
    imageAlt: 'バゲット・トラディション',
    featured: true,
    reverse: true,
  },
  {
    name: 'クロワッサン',
    description:
      'フランス産の発酵バターを生地に丁寧に折り込み、幾重にも層を重ねて香ばしく焼き上げました。表面はサクサク、中はバターの風味が広がるしっとりとした食感に仕上げています。',
    price: 360,
    category: 'クロワッサン',
    image: '/images/menu/Croissants1.jpg',
    imageAlt: 'クロワッサン',
    featured: true,
  },
  {
    name: 'ブール',
    description:
      '外は香ばしく焼き上げ、中はやわらかくふんわりとした食感が楽しめる丸いパンです。シンプルな味わいで、そのままでもお食事にも合わせやすい一品です。',
    price: 300,
    category: '菓子パン',
    image: '/images/menu/Sweet Bread2.jpg',
    imageAlt: 'パン・オ・マロン',
    featured: true,
    reverse: true,
  },
  {
    name: '生ハムと野菜のシリアルサンド',
    description:
      '香ばしい穀物入りのバゲットに、塩気のある生ハムと瑞々しいトマト、レタスを合わせました。穀物の食感と素材本来の旨みを楽しめる、ヘルシーな一品に仕上げています。',
    price: 690,
    category: 'サンドイッチ',
    image: '/images/menu/Sandwiches1.jpg',
    imageAlt: 'パン・オ・ショコラ',
    featured: true,
  },
  {
    name: 'コーヒー',
    description:
      '香ばしい香りとほどよい苦味が楽しめる、定番のブラックコーヒーです。すっきりとした後味で、パンやスイーツとの相性も抜群です。',
    price: 320,
    category: 'コーヒー',
    image: '/images/menu/coffee1.jpg',
    imageAlt: 'コーヒー',
    featured: true,
    reverse: true,
  },
  {
    name: 'ルスティックブレッド',
    description:
      '自家製天然酵母をじっくり育て、石窯でゆっくり焼き上げた素朴なカンパーニュです。パリッとした皮と弾力のある気泡が美しいクラムが特徴。そのままでも、スープに添えても。',
    price: 420,
    category: '定番のパン',
    image: '/images/menu/Classic Bread2.jpg',
    imageAlt: 'ルスティックブレッド',
    featured: false,
  },
  {
    name: '全粒粉カンパーニュ',
    description:
      '国産全粒粉をたっぷり配合し、ナッツの風味を豊かに感じるどっしりとした食事パンです。噛むほどに広がる深い旨みとほのかな酸味は、チーズとの相性が抜群です。',
    price: 480,
    category: '定番のパン',
    image: '/images/menu/Classic Bread3.jpg',
    imageAlt: '全粒粉カンパーニュ',
    featured: false,
  },
  {
    name: '焦がしバターのデニッシュ',
    description:
      'ノワゼット（焦がしバター）を丁寧に折り込んだデニッシュ生地を、幾層にも重ねて焼き上げました。芳ばしい香りとサクッとした食感が後を引く逸品です。',
    price: 320,
    category: 'クロワッサン',
    image: '/images/menu/Croissants2.jpg',
    imageAlt: '焦がしバターのデニッシュ',
    featured: false,
  },
  {
    name: 'フルーツデニッシュ',
    description:
      'バター香るサクサクのデニッシュ生地に、季節のフルーツと濃厚なカスタードクリームをのせました。見た目も華やか、味わいも贅沢な一品です。',
    price: 380,
    category: 'クロワッサン',
    image: '/images/menu/Croissants3.jpg',
    imageAlt: 'フルーツデニッシュ',
    featured: false,
  },
  {
    name: 'ベーコンエピ',
    description:
      '麦の穂をイメージした成形が特徴のエピ。粒マスタードをたっぷり塗り込んだ生地に、ジューシーなベーコンを包み込みました。サクサクした食感と塩気が食欲をそそります。',
    price: 350,
    category: 'お惣菜パン',
    image: '/images/menu/Savory Bread2.jpg',
    imageAlt: 'ベーコンエピ',
    featured: false,
  },
  {
    name: 'オリーブとトマトのフォカッチャ',
    description:
      'もちもちとした食感のフォカッチャ生地に、瑞々しいトマトと塩漬けオリーブを並べ、オリーブオイルをたっぷりかけて焼き上げました。ハーブの香りが食欲を刺激します。',
    price: 280,
    category: 'お惣菜パン',
    image: '/images/menu/Savory Bread3.jpg',
    imageAlt: 'オリーブとトマトのフォカッチャ',
    featured: false,
  },
  {
    name: '抹茶あんぱん',
    description:
      '宇治産抹茶を練り込んだふんわりとした生地に、国産小豆を丁寧に炊き上げた粒あんをたっぷり包みました。抹茶の香りとほどよい甘さが絶妙なバランスです。',
    price: 260,
    category: '菓子パン',
    image: '/images/menu/Sweet Bread4.jpg',
    imageAlt: '抹茶あんぱん',
    featured: false,
  },
  {
    name: '塩バタークリームパン',
    description:
      'ほんのり甘いブリオッシュ生地に、塩気の効いた特製バタークリームをたっぷり詰めました。濃厚なのに後味さっぱりで、一度食べたらやみつきになる味わいです。',
    price: 280,
    category: '菓子パン',
    image: '/images/menu/Sweet Bread3.jpg',
    imageAlt: '塩バタークリームパン',
    featured: false,
  },
  {
    name: 'ハムとチーズのサンドイッチ',
    description:
      'バゲットをスライスし、薄切りハムとグリュイエールチーズをたっぷり挟みました。シンプルながらも素材の旨みが際立つ、毎日でも食べたくなるサンドイッチです。',
    price: 680,
    category: 'サンドイッチ',
    image: '/images/menu/Sandwiches2.jpg',
    imageAlt: 'ハムとチーズのサンドイッチ',
    featured: false,
  },
  {
    name: 'BLTサンドイッチ',
    description:
      'カリカリのベーコン、フレッシュなレタスと完熟トマトを、手作りマヨネーズと一緒にソフトバゲットに挟みました。食べ応えのある定番サンドです。',
    price: 720,
    category: 'サンドイッチ',
    image: '/images/menu/Sandwiches3.jpg',
    imageAlt: 'BLTサンドイッチ',
    featured: false,
  },
  {
    name: 'ブレンドコーヒー',
    description:
      '厳選した豆をブレンドし、深みのあるコクと柔らかな酸味が調和した一杯です。パンとの相性を考え抜いた、当店オリジナルのブレンドです。',
    price: 480,
    category: 'コーヒー',
    image: '/images/menu/coffee2.jpg',
    imageAlt: 'ブレンドコーヒー',
    featured: false,
  },
  {
    name: 'カフェラテ',
    description:
      '深煎りエスプレッソに、濃厚でなめらかなスチームミルクをたっぷり注いだカフェラテです。口当たりが柔らかく、ほんのり甘みを感じる仕上がりです。',
    price: 550,
    category: 'コーヒー',
    image: '/images/menu/coffee3.jpg',
    imageAlt: 'カフェラテ',
    featured: false,
  },
]
