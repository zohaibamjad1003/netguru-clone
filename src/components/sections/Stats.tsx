'use client'
// ↑ needed because we use useEffect and useRef (browser features)

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 40, suffix: '%', label: 'growth in international orders for a global retailer' },
  { value: 5.0, suffix: '0', label: 'app rating on App Store for a major sports platform' },
  { value: 60, suffix: '%', label: 'more user engagement with hyper-personalization' },
  { value: 21, suffix: '%', label: 'higher conversion for a top global marketplace' },
]

const desktopCardMinWidth = 220 // change this value to adjust desktop card min-width in px

// This is a small helper component that counts up a number
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  // count = the number currently displayed
  // starts at 0, animates up to target

  const ref = useRef<HTMLSpanElement>(null)
  // useRef lets us watch this element without re-rendering

  useEffect(() => {
    // IntersectionObserver watches when an element enters the screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is now visible — start counting up
          let start = 0
          const duration = 500     // 2 seconds total
          const increment = target / (duration / 16)
          // How much to add each frame (60fps = every 16ms)

          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)       // snap to exact final number
              clearInterval(timer)   // stop the interval
            } else {
              setCount(parseFloat(start.toFixed(1)))
              // toFixed(1) keeps 1 decimal place (for 5.0)
            }
          }, 16)

          observer.disconnect() // stop watching once animation starts
        }
      },
      { threshold: 0.5 }
      // threshold: 0.5 → trigger when 50% of element is visible
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect() // cleanup when component unmounts
  }, [target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const update = () => {
      const container = containerRef.current
      if (!container) return

      const { bottom } = container.getBoundingClientRect()
      const vh = window.innerHeight
      const navHeight = 90
      const progress = Math.max(0, Math.min(1, (bottom - navHeight) / (vh - navHeight)))
      const spreadDistance = 90

      cardRefs.current.forEach((card, index) => {
        if (!card) return
        const offsetY = index * spreadDistance * progress
        card.style.transform = `translate3d(0, ${offsetY}px, 0)`
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
    <section className="py-24 bg-black text-white">
      {/* Dark background section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="tangible-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-[120px] mb-16">
          <div className="w-full md:w-[40%]">
            <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-700">
              See <span className="font-bold">tangible results</span>
            </h2>
          </div>
          <div className="w-full md:w-[45%]">
            <p className="text-[#ebebeb] font-[400] text-[16px] md:text-[18px] leading-relaxed">
              Over the years we&apos;ve created a unique process that delivers
              exceptional results with blazing-fast efficiency.
            </p>
          </div>
        </div>

        {/* 4 stats in a row using flexbox */}
        <div
          ref={containerRef}
          className="flex flex-wrap mt-[70px] md:mt-[100px] gap-6 md:gap-10 items-start md:justify-between lg:flex-nowrap"
          style={{ '--desktop-card-min-width': `${desktopCardMinWidth}px` } as any}
        >
          {stats.map((stat, index) => (
            <div
              ref={(el) => { cardRefs.current[index] = el }}
              key={stat.label}
              className="bg-[#333333] rounded-none p-[25px] text-white flex-1 min-w-[260px] md:min-w-[320px] lg:min-w-[var(--desktop-card-min-width)] max-w-full md:max-w-[calc(50%-1.25rem)] lg:basis-[calc((100%-7.5rem)/4)] lg:max-w-[calc((100%-7.5rem)/4)] w-full md:w-auto h-auto"
              style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
            >
              {/* Big number */}
              <p className="text-[61px] font-[400] text-white">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              {/* Description */}
              <p className="mt-3 pb-[130px] mb-16 text-[#ebebeb] text-[14px] font-[400] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}