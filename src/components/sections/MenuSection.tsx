import { Link } from 'react-router-dom'
import { SectionTitle } from '../common/SectionTitle'
import { useMenuItems } from '../../features/menu/useMenuItems'

export function MenuSection() {
  const { data, isLoading, isError } = useMenuItems()
  const featuredItems = (data ?? []).filter((item) => item.featured)

  return (
    <section className="menu section scroll-reveal" id="menu">
      <div className="container">
        <SectionTitle title="MENU" />
        {isLoading && <p className="data-status">読み込み中です...</p>}
        {isError && <p className="data-status">データの取得に失敗しました。</p>}

        {featuredItems.map((item) => (
          <div
            className={`menu-item scroll-reveal${item.reverse ? ' is-reverse' : ''}`}
            key={item.name}
          >
            {item.reverse ? (
              <>
                <div className="menu-item__img">
                  <img src={item.image} alt={item.imageAlt} className="custom-shape" />
                  <div className="menu-item__img-overlay">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <div className="menu-item__price">
                      <span className="currency">¥</span>
                      <span className="amount">{item.price}</span>
                      <span className="tax-in">(税込)</span>
                    </div>
                  </div>
                </div>
                <div className="menu-item__info">
                  <h4>{item.name}</h4>
                  <br />
                  <p>{item.description}</p>
                  <div className="menu-item__price">
                    <span className="currency">¥</span>
                    <span className="amount">{item.price}</span>
                    <span className="tax-in">(税込)</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="menu-item__info">
                  <h4>{item.name}</h4>
                  <br />
                  <p>{item.description}</p>
                  <div className="menu-item__price">
                    <span className="currency">¥</span>
                    <span className="amount">{item.price}</span>
                    <span className="tax-in">(税込)</span>
                  </div>
                </div>
                <div className="menu-item__img">
                  <img src={item.image} alt={item.imageAlt} className="custom-shape" />
                  <div className="menu-item__img-overlay">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <div className="menu-item__price">
                      <span className="currency">¥</span>
                      <span className="amount">{item.price}</span>
                      <span className="tax-in">(税込)</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        <div className="menu-more">
          <Link to="/menu" className="btn-more">
            メニューを全て見る
          </Link>
        </div>
      </div>
    </section>
  )
}
