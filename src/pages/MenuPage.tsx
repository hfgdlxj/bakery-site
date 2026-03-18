import { Link } from 'react-router-dom'
import { menuCategories } from '../features/menu/categories'
import { menuItems } from '../features/menu/data'
import { SiteHeader } from '../components/layout/SiteHeader'
import { SiteFooter } from '../components/layout/SiteFooter'
import { useState } from 'react'
import '../styles/menu-page.css'

export function MenuPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <SiteHeader
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((prev) => !prev)}
        onClose={() => setMenuOpen(false)}
      />

      <div className="menu-page">
        <div className="menu-page__back">
          <Link to="/" className="menu-page__back-link">
            ← トップページへ戻る
          </Link>
        </div>

        <div className="container">
          <header className="menu-page__hero">
            <h1>MENU</h1>
            <p>
              素材にこだわり、毎朝丁寧に焼き上げたパンと飲み物を取り揃えております。
              <br />
              季節や素材に合わせた多彩なラインナップをご堪能ください。
            </p>
          </header>

          <section className="menu-page__categories">
            <h2 className="menu-page__categories-title">CATEGORY</h2>
            <div className="category-grid">
              {menuCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#cat-${cat.id}`}
                  className="category-card"
                  aria-label={cat.labelJa}
                >
                  <img
                    src={cat.image}
                    alt={cat.labelJa}
                    className="category-card__img"
                    loading="lazy"
                  />
                  <div className="category-card__overlay">
                    <span className="category-card__label-en">{cat.labelEn}</span>
                    <span className="category-card__label-ja">{cat.labelJa}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {menuCategories.map((cat) => {
            const products = menuItems.filter((item) => item.category === cat.id)
            if (products.length === 0) return null

            return (
              <section
                key={cat.id}
                id={`cat-${cat.id}`}
                className="menu-category-section"
              >
                <div className="menu-category-section__header">
                  <h3 className="menu-category-section__title-ja">{cat.labelJa}</h3>
                  <span className="menu-category-section__title-en">{cat.labelEn}</span>
                </div>
                <p className="menu-category-section__description">{cat.description}</p>

                <div className="menu-product-grid">
                  {products.map((item) => (
                    <article key={item.name} className="menu-product-card">
                      <div className="menu-product-card__img-wrap">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="menu-product-card__img"
                          loading="lazy"
                        />
                      </div>
                      <div className="menu-product-card__body">
                        <h4 className="menu-product-card__name">{item.name}</h4>
                        <p className="menu-product-card__desc">{item.description}</p>
                        <div className="menu-product-card__price">
                          <span className="currency">¥</span>
                          <span className="amount">{item.price}</span>
                          <span className="tax-in">(税込)</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
