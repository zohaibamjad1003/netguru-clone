'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

const insights = [
  {
    type: 'Blog',
    title: 'ChatGPT Just Became a Shop: The Agentic Commerce Revolution',
    href: '/blog/chatgpt-shop',
    image: '/Futuristic.jpg',
    authorImage: '/offline.jpg',
    authorName: 'Tomasz Grynkiewicz',
    date: 'Oct 15, 2025',
  },
  {
    type: 'Podcast',
    title: "Does AI Wear Sneakers? Adidas's Journey With AI",
    href: '/podcast',
    image: '/David.jpg',
  },
  {
    type: 'Blog',
    title: 'Scaling Microservices: Lessons from Netflix, Uber, Amazon, and Spotify',
    href: '/blog/scaling-microservices',
    image: '/city.jpg',
    authorImage: '/white.webp',
    authorName: 'Robert Scholz',
    date: 'May 28, 2026',
  },
]

export default function Insights() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardTwoRef = useRef<HTMLDivElement | null>(null)
  const cardThreeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.max(-1, Math.min(1, (vh * 0.8 - rect.top) / (vh * 0.6)))
      const translateY = -30 * progress

      const cards = [cardTwoRef.current, cardThreeRef.current]
      cards.forEach((el) => {
        if (el) el.style.transform = `translate3d(0, ${translateY}px, 0)`
      })
    }

    let ticking = false
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update()
          ticking = false
        })
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-[#161616]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-[30px] font-[400] text-white mb-15 md:mb-30">
          Explore insights <span className="font-bold">for acceleration</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {insights.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                if (index === 1) cardTwoRef.current = el
                if (index === 2) cardThreeRef.current = el
              }}
              className={`group block overflow-hidden transform transition duration-300 hover:shadow-lg hover:scale-[1.05] ${index === 1 ? 'md:mt-[50px]' : index === 2 ? 'md:mt-[100px]' : ''}`}
              style={{ transform: 'translate3d(0,0,0)' }}
            >
              <Link href={item.href} className="block h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover transition duration-300"
                />

                <div className="p-6 text-white bg-[#333333]">
                <span className="text-xs text-white-600 font-semibold uppercase tracking-wider">
                  {item.type}
                </span>
                <h3 className="mt-2 text-base font-semibold text-white leading-snug transition-colors">
                  {item.title}
                </h3>

                {(item.authorName || index === 1) && (
                  <div className="mt-4 flex items-center justify-between gap-3 text-sm text-white">
                    {item.authorName ? (
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 overflow-hidden bg-white/10">
                          <img
                            src={item.authorImage}
                            alt={item.authorName}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-white font-semibold">
                          {item.authorName}
                          <span className="mx-2 text-white/70">/</span>
                          <span className="text-xs text-white/70">{item.date}</span>
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}

                    <span className="text-white text-xl">{index === 1 ? '↗' : '→'}</span>
                  </div>
                )}
              </div>
            </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-left">
          <Link
            href="/blog"
            className="text-white text-[16px] font-[600] underline underline-offset-4 decoration-white transition-colors hover:text-white/70 hover:decoration-white/70"
          >
            More disruptive insights <span className="text-white">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}