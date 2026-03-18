import { useEffect, useState } from 'react'

export function useLandingPageEffects() {
  const [heroActive, setHeroActive] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHeroActive(true)
    }, 50)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      const activateAll = () => {
        document
          .querySelectorAll('.scroll-reveal')
          .forEach((el) => el.classList.add('is-active'))
      }

      activateAll()
      const fallbackMutationObserver = new MutationObserver(() => {
        activateAll()
      })
      fallbackMutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      })

      return () => {
        fallbackMutationObserver.disconnect()
      }
    }

    const observedElements = new WeakSet<Element>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const observeRevealElements = () => {
      document.querySelectorAll('.scroll-reveal').forEach((el) => {
        if (!observedElements.has(el) && !el.classList.contains('is-active')) {
          observedElements.add(el)
          observer.observe(el)
        }
      })
    }

    observeRevealElements()
    const mutationObserver = new MutationObserver(() => {
      observeRevealElements()
    })
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [])

  return { heroActive }
}
