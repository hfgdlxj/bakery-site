import { SectionTitle } from '../common/SectionTitle'
import { useNewsItems } from '../../features/news/useNewsItems'

export function NewsSection() {
  const { data, isLoading, isError } = useNewsItems()
  const items = data ?? []

  return (
    <section className="news section scroll-reveal" id="news">
      <div className="container">
        <SectionTitle title="NEWS" />
        {isLoading && <p className="data-status">読み込み中です...</p>}
        {isError && <p className="data-status">データの取得に失敗しました。</p>}
        <ul className="news-list">
          {items.map((item) => (
            <li className="news-item" key={`${item.date}-${item.content}`}>
              <a href="#">
                <div className="news-header">{item.date}</div>
                <div className="news-body">
                  <p className="content">{item.content}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="news-more">
          <a href="#" className="btn-more">
            more
          </a>
        </div>
      </div>
    </section>
  )
}
