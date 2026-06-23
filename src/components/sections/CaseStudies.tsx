import Link from 'next/link'

// Store data in an array — easy to add/edit later
const caseStudies = [
  {
    slug: 'delivery-hero',
    client: 'Delivery Hero',
    tag: 'Team Extension',
    title: 'Scaling Core Apps for Delivery Hero, a Q-Commerce Giant',
    image: '/Delivery .png',
    thumbImage: '/delivery-hero.svg',
    thumbFit: 'contain',
    thumbWidth: '100%',
    thumbFilter: 'invert(1) brightness(2)',
    summaryRight: 'TEAM EXTENSION',
    bottomText: 'Supporting a global leader in q-commerce with on-demand expertise across iOS, Android, Python & more',
  },
  {
    slug: 'vinted-go',
    client: 'Vinted GO',
    tag: 'Web Development',
    title: 'Ecommerce Boost with On-Demand Team Extension',
    image: '/vinted.png',
    thumbImage: '/vinted-go.svg',
    thumbFit: 'contain',
    thumbWidth: '100%',
    thumbFilter: 'invert(1) brightness(2)',
    summaryRight: 'WEB DEVELOPMENT',
    bottomText: 'Growing Vinted GO’s European marketshare with seamless backend carrier integrations and scalable shipping',
  },
  {
    slug: 'olx',
    client: 'OLX',
    tag: 'UX/UI',
    title: '21% Higher Conversion for a Top RE Marketplace',
    image: '/Otodom.png',
    thumbImage: '/olx.svg',
    thumbFit: 'contain',
    thumbWidth: '100%',
    thumbFilter: 'invert(1) brightness(2)',
    summaryRight: 'UX/UI',
    bottomText: 'Augmenting a highly demanding team with product design experts for rapid, tangible results',
  },
  {
    slug: 'zabka',
    client: 'Żabka',
    tag: 'Backend Development',
    title: 'System Architecture for Autonomous Stores by Żabka',
    image: '/zabka.png',
    thumbImage: '/zabka.svg',
    thumbFit: 'contain',
    thumbWidth: '100%',
    thumbFilter: 'invert(1) brightness(2)',
    summaryRight: 'Backend Development',
    bottomText: 'Planning, designing, implementing, and maintaining autonomous stores architecture for a major chain',
  },
  {
    slug: 'metro-brazil',
    client: 'Metro Brazil',
    tag: 'Cross-Platform',
    title: 'Flexible, Scalable App for a Global Ecommerce Platform',
    image: '/Metro.png',
    thumbImage: '/metro-brazil.svg',
    thumbFit: 'contain',
    thumbWidth: '100%',
    thumbFilter: 'invert(1) brightness(2)',
    summaryRight: 'CROSS-PLATFORM DEVELOPMENT',
    bottomText: 'Cross-platform online shopping app that offers a seamless and unified experience across devices',
  },
  {
    slug: 'ubs',
    client: 'UBS',
    tag: 'Mobile App Redesign',
    title: 'Team Extension for Mobile Design Revamp at Speed',
    image: '/UBS.jpg',
    thumbImage: '/ubs.svg',
    thumbFit: 'contain',
    thumbWidth: '100%',
    thumbFilter: 'invert(1) brightness(2)',
    summaryRight: 'MOBILE APP REDESIGN',
    bottomText: 'Seamless and consistent experience, unified payment flows, and easier in-app navigation',
  },
]

export default function CaseStudies() {
  const caseStudySpacing = 90 // change this value to adjust vertical spacing for 2nd, 4th, and 6th cards

  return (
    <section className="py-25 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-0"> 

        {/* Section heading */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[30px] font-semi-bold text-white mb-16">
          Reimagined marketplaces, B2B, and{' '}
          {/* {' '} adds a space between text and the span below */}
          <span className="font-bold">retail ecosystems</span>
        </h2>

        {/* Three rows, two columns each */}
        <div className="space-y-10 md:space-y-20">
          {[caseStudies.slice(0, 2), caseStudies.slice(2, 4), caseStudies.slice(4, 6)].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`w-full md:w-[83%] ${rowIndex === 1 ? 'md:ml-auto' : ''} flex flex-col md:flex-row items-start justify-start gap-8 md:gap-25`}
            >
              {row.map((study, studyIndex) => {
                const caseId = rowIndex * 2 + studyIndex + 1
                return (
                  <Link
                    key={study.slug}
                    id={`${caseId}`}
                    href={`/clients/${study.slug}`}
                    // Template literal: /clients/delivery-hero, /clients/vinted-go, etc.
                    className={`group case-study-${caseId} block rounded-none overflow-visible w-full md:w-1/2 self-start ${[2, 4, 6].includes(caseId) ? 'md:mt-[90px]' : ''}`}
                    // group → lets child elements react to parent hover
                  >
                    <div className="relative h-[320px] sm:h-[360px] md:h-[450px] w-full overflow-visible">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover transition-transform duration-300 origin-bottom group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute bottom-[5%] right-5 hidden h-[50px] items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:flex">
                        <span className="block h-[2px] w-12 bg-white" />
                        <span className="text-white text-lg">→</span>
                      </div>
                    </div>

                    {/* Three-row card content */}
                    <div className="pt-5 pb-2 space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="w-[80px] overflow-hidden bg-transparent p-0">
                          <img
                            src={study.thumbImage || study.image}
                            alt={`${study.client} thumbnail`}
                            className="h-[35px] block transition-all duration-300"
                            style={{
                              objectFit: (study.thumbFit || 'cover') as React.CSSProperties['objectFit'],
                              width: study.thumbWidth || '100%',
                              filter: study.thumbFilter || 'invert(1) brightness(2)',
                            }}
                          />
                        </div>
                        <p className="text-[12px] text-[#ebebeb] text-right flex-1 font-[800]">
                          {study.summaryRight}
                        </p>
                      </div>

                      <h3 className="text-[24px] font-[700] text-white leading-snug transition-colors group-hover:underline">
                        {study.title}
                      </h3>

                      <p className="text-[14px] text-[#ebebeb] font-[400]">
                        {study.bottomText}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          ))}
        </div>

        {/* "More case studies" link */}
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/clients"
              className="group inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-[#b9b9b9]"
            >
              <span className="underline decoration-white underline-offset-4 transition-colors group-hover:decoration-[#b9b9b9]">
                More case studies
              </span>
              <span className="text-xl transition-colors group-hover:text-[#b9b9b9]">→</span>
            </Link>
          </div>

          <Link
            href="/clients"
            className="inline-block border border-black text-black text-sm px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors"
          >
            More case studies
          </Link>
        </div>

      </div>
    </section>
  )
}