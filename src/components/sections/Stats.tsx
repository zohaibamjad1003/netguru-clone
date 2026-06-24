'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 40, suffix: '%', label: 'growth in international orders for a global retailer' },
  { value: 5.0, suffix: '0', label: 'app rating on App Store for a major sports platform' },
  { value: 60, suffix: '%', label: 'more user engagement with hyper-personalization' },
  { value: 21, suffix: '%', label: 'higher conversion for a top global marketplace' },
]

const desktopCardMinWidth = 220

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 500
          const increment = target / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(parseFloat(start.toFixed(1)))
            }
          }, 16)

          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
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

        {/* MOBILE — horizontal snap slider */}
        <div className="md:hidden overflow-hidden mt-[70px]">
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#333333] p-[25px] text-white snap-start shrink-0 w-[75vw]"
              >
                <p className="text-[61px] font-[400] text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 pb-6 mb-16 text-[#ebebeb] text-[14px] font-[400] leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP — original layout */}
        <div
          ref={containerRef}
          className="hidden md:flex mt-[100px] gap-6 items-start justify-between flex-wrap lg:flex-nowrap overflow-hidden"
          style={{ '--desktop-card-min-width': `${desktopCardMinWidth}px` } as any}
        >
          {stats.map((stat, index) => (
            <div
              ref={(el) => { cardRefs.current[index] = el }}
              key={stat.label}
              className="bg-[#333333] rounded-none p-[25px] text-white flex-1 min-w-0 md:min-w-[220px] lg:min-w-[var(--desktop-card-min-width)] lg:basis-[calc((100%-7.5rem)/4)] lg:max-w-[calc((100%-7.5rem)/4)]"
              style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
            >
              <p className="text-[61px] font-[400] text-white">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
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