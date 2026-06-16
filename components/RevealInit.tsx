'use client'
import { useEffect } from 'react'

export default function RevealInit() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 60)
          }
        })
      },
      { threshold: 0.1 }
    )

    reveals.forEach((el) => observer.observe(el))

    // Hero reveals immediately on load
    document.querySelectorAll('#hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 + i * 120)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
