import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage'
import { MenuPage } from '../../pages/MenuPage'
import { NotFoundPage } from '../../pages/NotFoundPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''))
      let frameCount = 0
      let frameId: number | null = null

      const tryScroll = () => {
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' })
          return
        }

        frameCount += 1
        if (frameCount < 20) {
          frameId = window.requestAnimationFrame(tryScroll)
          return
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }

      tryScroll()
      return () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId)
        }
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  )
}
