type HeroSectionProps = {
  isActive: boolean
}

export function HeroSection({ isActive }: HeroSectionProps) {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className={`hero__img-wrapper${isActive ? ' is-active' : ''}`}>
          <img src="/images/hero-bread.jpg" alt="焼きたてパン" className="hero-main-img" />

          <div className="hero__badge">
            <div className="rotating-text">
              <svg viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="transparent"
                />
                <text>
                  <textPath href="#circlePath">
                    HAL BOULANGERIE HAL BOULANGERIE
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="badge__thumb">
              <img src="/images/thumb-bread.jpg" alt="小图" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
