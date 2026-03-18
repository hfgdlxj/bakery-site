import { useState } from 'react'
import { SiteHeader } from '../components/layout/SiteHeader'
import { SiteFooter } from '../components/layout/SiteFooter'
import { HeroSection } from '../components/sections/HeroSection'
import { NewsSection } from '../components/sections/NewsSection'
import { MenuSection } from '../components/sections/MenuSection'
import { GallerySection } from '../components/sections/GallerySection'
import { AddressSection } from '../components/sections/AddressSection'
import { ContactSection } from '../components/sections/ContactSection'
import { useLandingPageEffects } from '../hooks/useLandingPageEffects'
import '../styles/site.css'

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { heroActive } = useLandingPageEffects()

  return (
    <>
      <SiteHeader
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((prev) => !prev)}
        onClose={() => setMenuOpen(false)}
      />

      <main>
        <HeroSection isActive={heroActive} />
        <NewsSection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
        <AddressSection />
      </main>

      <SiteFooter />
    </>
  )
}
