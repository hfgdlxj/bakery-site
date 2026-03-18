import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type SiteHeaderProps = {
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

export function SiteHeader({ isOpen, onToggle, onClose }: SiteHeaderProps) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSectionNavigate = (sectionId: string) => {
    return (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      onClose()

      if (location.pathname === '/') {
        const scrollToTarget = () => {
          const target = document.getElementById(sectionId)
          if (target) {
            target.scrollIntoView({ behavior: 'auto', block: 'start' })
            window.history.replaceState(null, '', `/#${sectionId}`)
          }
        }

        scrollToTarget()
        window.requestAnimationFrame(scrollToTarget)
        return
      }

      navigate(`/#${sectionId}`)
    }
  }

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/#home" className="logo" onClick={handleSectionNavigate('home')}>
          <img src="/images/logo-hal.png" alt="HAL Boulangerie" />
        </a>
        <button
          className={`nav-toggle${isOpen ? ' is-active' : ''}`}
          onClick={onToggle}
          aria-label="メニューを開閉"
          aria-expanded={isOpen}
          aria-controls="site-nav-menu"
        >
          <span />
        </button>
      </div>
      <nav
        id="site-nav-menu"
        className={`nav-menu${isOpen ? ' is-active' : ''}`}
        aria-hidden={!isOpen}
      >
        <ul>
          <li>
            <a href="/#home" onClick={handleSectionNavigate('home')}>
              Home
            </a>
          </li>
          <li>
            <a href="/#news" onClick={handleSectionNavigate('news')}>
              News
            </a>
          </li>
          <li>
            <a href="/#menu" onClick={handleSectionNavigate('menu')}>
              Menu
            </a>
          </li>
          <li>
            <a href="/#address" onClick={handleSectionNavigate('address')}>
              Address
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={handleSectionNavigate('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
