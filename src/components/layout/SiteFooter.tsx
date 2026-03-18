export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main-info">
            <div className="footer__brand">
              <img
                src="/images/logo-hal.png"
                alt="HAL Boulangerie"
                className="footer__logo"
              />
            </div>

            <div className="footer__address">
              <p>住所：東京都渋谷区猿楽町29-18</p>
              <p>電話：03-3344-1010</p>
              <p>営業時間：10:00～20:00</p>
            </div>

            <div className="footer__traffic">
              <p>東急東横線［代官山駅］下車 徒歩3分</p>
              <p>東急東横線・地下鉄日比谷線［中目黒駅］下車 徒歩7分</p>
              <p>JR山手線・JR埼京線・地下鉄日比谷線［恵比寿駅］下車 徒歩10分</p>
            </div>
          </div>

          <nav className="footer__nav">
            <ul className="footer__links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#address">Address</a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="copyright">© 2026 HAL Boulangerie. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
