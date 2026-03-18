export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: '営業時間を教えてください。',
    answer:
      '営業時間は毎日10:00〜20:00です。年末年始の営業日や臨時休業はNEWSをご確認ください。',
  },
  {
    question: '予約や取り置きはできますか？',
    answer:
      '商品によってはお電話で取り置きが可能です。数量や受け取り時間は店舗までご相談ください。',
  },
  {
    question: 'アレルギー表示はありますか？',
    answer:
      '主要原材料と特定原材料に関する情報をご案内しています。詳細はスタッフまでお声がけください。',
  },
  {
    question: '支払い方法を教えてください。',
    answer: '現金、各種クレジットカード、交通系電子マネーに対応しています。',
  },
]
