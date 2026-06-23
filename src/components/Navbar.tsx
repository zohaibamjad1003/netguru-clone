'use client'
// ↑ This tells Next.js this component uses browser features (useState)
// Without this line, useState won't work in Next.js App Router

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
// ↑ Link is Next.js's version of <a> tag. Use it for internal page links.
// It makes navigation fast (no full page reload)

// These are the 5 nav links Netguru has
const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Commerce', href: '/commerce' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Clients', href: '/clients' },
  { label: 'About us', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

const megaMenuData: Record<string, { title: string; description: string; blocks: Array<{ heading: string; text: string }> }> = {
  Services: {
    title: 'Services overview',
    description: 'Explore our full-service commerce and digital product capabilities.',
    blocks: [
      { heading: 'Strategy', text: 'Roadmaps, research, and product discovery.' },
      { heading: 'Design', text: 'Experience design, branding, and UX systems.' },
      { heading: 'Engineering', text: 'Custom development for commerce and platforms.' },
    ],
  },
  Commerce: {
    title: 'Commerce solutions',
    description: 'Commerce operations, platforms, and AI-powered experiences.',
    blocks: [
      { heading: 'Platform Build', text: 'B2B, D2C, marketplace, and headless commerce.' },
      { heading: 'Optimization', text: 'Conversion, performance, and growth-focused updates.' },
      { heading: 'AI & Automation', text: 'Personalization, recommendations, and automation flows.' },
    ],
  },
  Solutions: {
    title: 'Solutions suite',
    description: 'Pre-built and bespoke solutions for high-growth commerce teams.',
    blocks: [
      { heading: 'Retail', text: 'Omnichannel, store, and loyalty solutions.' },
      { heading: 'Marketplaces', text: 'Multi-vendor, B2B, and vertical marketplace systems.' },
      { heading: 'Payments', text: 'Checkout, subscriptions, and global payments.' },
    ],
  },
  Clients: {
    title: 'Client success',
    description: 'Trusted by commerce brands at every stage of growth.',
    blocks: [
      { heading: 'Case studies', text: 'Featured work across retail, marketplaces, and SaaS.' },
      { heading: 'Partnerships', text: 'Long-term collaboration with product and marketing teams.' },
      { heading: 'Support', text: 'Dedicated teams for launch and ongoing delivery.' },
    ],
  },
  'About us': {
    title: 'About Netguru',
    description: 'Our story, values, and the teams building modern commerce products.',
    blocks: [
      { heading: 'Culture', text: 'Team-first delivery and transparent collaboration.' },
      { heading: 'Careers', text: 'Open roles, hiring process, and employee benefits.' },
      { heading: 'News', text: 'Latest insights, awards, and company updates.' },
    ],
  },
  Insights: {
    title: 'Insights & trends',
    description: 'Research, articles, and commerce thinking from our experts.',
    blocks: [
      { heading: 'Reports', text: 'Industry reports and market trend analysis.' },
      { heading: 'Stories', text: 'Customer journeys and product growth stories.' },
      { heading: 'Guides', text: 'Practical best practices for commerce leaders.' },
    ],
  },
}

const solutionsMegaMenu = {
  leftHeading: 'For Commerce',
  leftCards: [
    {
      title: 'Skill Design System',
      description: 'Ship accessible UI faster with design system built for shops, marketplaces, and B2B products.',
    },
    {
      title: 'AI Product Discovery',
      description: 'Turn complex product data into intelligent conversations',
    },
  ],
  rightHeading: 'For other industries',
  rightLinks: [
    { label: 'Finance and Banking', href: '#' },
    { label: 'Healthcare and life science', href: '#' },
    { label: 'Education', href: '#' },
    { label: 'Proptech', href: '#' },
  ],
}

const clientsMegaMenu = {
  leftHeading: 'Client stories',
  leftCards: [
    {
      image: '/delivery.webp',
      description: 'Scaling Core Apps For Delivery Hero, Local Delivery & Q-Commerce Giant',
    },
    {
      image: '/Vinted.webp',
      description: 'How Vinted Expanded its Global Marketplace with On-Demand Team Extension',
    },
  ],
  rightHeading: 'Other Projects',
  rightLinks: [
    { label: 'App for Global Ecommerce Platform', href: '#' },
    { label: 'Cross-Platform Mobile App for Sports Retailer', href: '#' },
    { label: 'Rapid Website Redesign for a 24% Increase in Traffic', href: '#' },
    { label: '50% Efficiency Gains with Silk Design System', href: '#' },
    { label: '60% More Engagement With AI', href: '#' },
  ],
}

const aboutMegaMenu = {
  column1Heading: 'About Us',
  column1Links: [
    { label: 'About Netguru', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'Sustainability', href: '#' },
  ],
  column2Heading: 'Join Netguru',
  column2Links: [
    { label: 'Working at Netguru', href: '#' },
    { label: 'Job opportunities', href: '#' },
  ],
}

const insightsMegaMenu = {
  leftHeading: 'Latest insights',
  leftCards: [
    {
      image: '/Woman.webp',
      description: 'Overcoming Integration Challenges in Super App Development',
    },
    {
      image: '/businessman.webp',
      description: 'Building Data Foundations: The Key to Scalable Enterprise AI',
    },
  ],
  rightHeading: 'Newsletters and originals',
  rightLinks: [
    { label: 'Podcast', href: '#' },
    { label: 'Next in Commerce newsletter', href: '#' },
    { label: 'AI Applied by Kuba Filipowski', href: '#' },
    { label: 'Hidden Heroes', href: '#' },
  ],
  bottomLink: { label: 'Read our blog', href: '#' },
}

const servicesSubmenuItems = [
  {
    key: 'Strategy & Innovation',
    label: 'Strategy & Innovation',
    contentTitle: 'Discovery & research',
    contentText: 'In-depth discovery, customer research, and product vision workshops to define the right commerce strategy.',
    contentColumns: [
      {
        heading: 'Capabilities',
        paragraphs: [
          'Digital Product Strategy',
          'Product Discovery & Research',
          'Rapid Prototyping',
          'Technology Strategy',
          'Innovation & R&D',
        ],
      },
      {
        heading: 'Methods',
        paragraphs: [
          'Design Thinking',
          'Lean Product Development',
          'Product Analytics',
          'Experimentation Platforms',
        ],
      },
    ],
  },
  {
    key: 'Software Engineering',
    label: 'Software Engineering',
    contentTitle: 'Experience design',
    contentText: 'Design systems, UX flows, and visual experiences crafted for conversion and retention.',
    contentColumns: [
      {
        heading: 'Capabilities',
        paragraphs: [
          'Software Development',
          'Web Development',
          'Mobile Development',
          'MVP Development',
          'API Development',
        ],
      },
      {
        heading: 'Technologies',
        paragraphs: [
          'React',
          'Vue',
          'Python',
          'Node.js',
          'iOS (Swift)',
          'React Native',
          'Kotlin Multiplatform',
        ],
      },
      {
        heading: ' ',
        paragraphs: [
          'Next.js',
          'Angular',
          'Ruby on Rails',
          'Java',
          'Android (Kotlin)',
          'Flutter',          
        ],
      },
    ],
  },
  {
    key: 'Product & Experience Design',
    label: 'Product & Experience Design',
    contentTitle: 'Engineering',
    contentText: 'Custom commerce platforms, integrations, and scalable engineering ',
    contentColumns: [
      {
        heading: 'Capabilities',
        paragraphs: [
          'Product Design',
          'UX Design',
          'UI Design',
          'Design Systems',
          'UX Research',
          'illustration',
        ],
      },
      {
        heading: 'Tools',
        paragraphs: [
          'Figma',
          'design tokens',
          'Accessibility (WCAG)',
          'Motion Design',
        ],
      },
    ],
  },
  {
    key: 'AI & Data',
    label: 'AI & Data',
    contentTitle: 'Operations support',
    contentText: 'Ongoing commerce operations, release management, and performance optimization.',
    contentColumns: [
      {
        heading: 'Capabilities',
        paragraphs: [
          'AI Development',
          'AI Pods',
          'Forward Deployed Engineer',
          'AI Agents',
          'Machine Learning',
          'Data Engineering',
        ],
      },
      {
        heading: 'Technologies',
        paragraphs: [
          ''
        ],
      },
    ],
  },
  {
    key: 'Cloud & Platform Engineering',
    label: 'Cloud & Platform Engineering',
    contentTitle: 'AI & automation',
    contentText: 'Personalization, automation, and data-driven commerce experiences powered by AI.',
    contentColumns: [
      {
        heading: 'Capabilities',
        paragraphs: [
          'Cloud Architecture',
          'DevOps & Platform Engineering',
          'Infrastructure as a Code',
          'Platform Modernization'
        ],
      },
      {
        heading: 'Technologies',
        paragraphs: [
          'AWS',
          'Aure',
        ],
      },
    ],
  },
  {
    key: 'Quality, Delivery & Scale',
    label: 'Quality, Delivery & Scale',
    contentTitle: 'Growth enablement',
    contentText: 'Conversion, retention, and revenue acceleration through smarter product and marketing alignment.',
    contentColumns: [
      {
        heading: 'CAPABILITIES',
        paragraphs: [
          'Quality Assurance',
          'Project Management',
          'Software Management',
        ],
      },
      {
        heading: 'ENGAGED MODELS',
        paragraphs: [
          'Staff Augmentation',
          'Delivery Center',
        ],
      },
    ],
  },
]

const commerceSubmenuItems = [
  {
    key: 'Strategy & Innovation',
    label: 'Strategy & Innovation',
    contentTitle: 'Strategy & Innovation',
    contentText: 'Build modern commerce platforms for D2C, B2B, marketplaces, and headless commerce.',
    contentColumns: [
      {
        heading: 'CAPABILITIES',
        paragraphs: [
          'Composable Commerce Strategy',
          'Commerce Architecture',
          'Replatforming & Modernization',
          'MACH & Headless Consulting',
        ],
      },
      {
        heading: 'FRAMEWORKS',
        paragraphs: [
          'MACH Architecture',
          'Headless Architecture',
          'API-first Commerce',
          'Microservices Commerce',
        ],
      },
    ],
  },
  {
    key: 'Commerce Engineering',
    label: 'Commerce Engineering',
    contentTitle: 'Commerce Engineering',
    contentText: 'Improve conversion, performance, and checkout efficiency across the customer journey.',
    contentColumns: [
      {
        heading: 'CAPABILITIES',
        paragraphs: [
          'Headless CMS Development',
          'Design System',
          'B2B & B2C Platforms',
          'Marketplace Development',
          'Retail Media Platforms',
        ],
      },
      {
        heading: 'TECHNOLOGIES',
        paragraphs: [
          'VTEX',
          'Medusa',
          'SAP Commerce Cloud',
          'Contentful',
          'Storyblok',
        ],
      },
      {
        heading: '',
        paragraphs: [
          'Saleor',
          'CommerceTools',
          'Shopify Plus',
          'Strapi',
        ],
      },
    ],
  },
  {
    key: 'Omnichannel & Operations',
    label: 'Omnichannel & Operations',
    contentTitle: 'Omnichannel & Operations',
    contentText: 'Design product experiences that make commerce easier to use and more engaging for customers.',
    contentColumns: [
      {
        heading: 'CAPABILITIES',
        paragraphs: [
          'Omnichannel',
          'Ordermanagement (OMS)',
          'Inventory & Fulfillment Orchestration',
          'POS & Store Integrations',
        ],
      },
      {
        heading: 'TECHNOLOGIES',
        paragraphs: [
          'Fluent Commerce',
        ],
      },
    ],
  },
  {
    key: 'Product Data & Content',
    label: 'Product Data & Content',
    contentTitle: 'Product Data & Content',
    contentText: 'Manage and optimize product information and content across all channels.',
    contentColumns: [
      {
        heading: 'CAPABILITIES',
        paragraphs: [
          'Product Data Management',
          'Catalog Enrichment',
          'Content Orchestration',
          'Catalog & Data Governance',
        ],
      },
      {
        heading: 'TECHNOLOGIES',
        paragraphs: [
          'Pimcore',
          'Salsify',
          'inRiver',
        ],
      },
    ],
  },
  {
    key: 'Loyalty & Monetization',
    label: 'Loyalty & Monetization',
    contentTitle: 'Loyalty & Monetization',
    contentText: 'Use automation and personalization to make commerce smarter and more profitable.',
    contentColumns: [
      {
        heading: 'CAPABILITIES',
        paragraphs: [
          'Loyalty & Promotions',
          'Personalization & Experimentation',
          'Retail Media & Monetization',
          'Analytics & Insights',
        ],
      },
      {
        heading: 'TECHNOLOGIES',
        paragraphs: [
          'OpenLoyalty',
          'Vautcherify',
          'Monetate',
        ],
      },
    ],
  },
  {
    key: 'AI in Commerce',
    label: 'AI in Commerce',
    contentTitle: 'AI in Commerce',
    contentText: 'Align product, marketing, and operations to drive repeatable revenue growth.',
    contentColumns: [
      {
        heading: 'CAPABILITIES',
        paragraphs: [
          'AI Commerce Chatbot',
          'Intelligent Search & Discovery',
          'Pricing & Recommendation Engines',
          'Automation & Agents',
        ],
      },
      {
        heading: 'SEARCH SOLUTIONS',
        paragraphs: [
          'Algolia',
          'Bloomreach',
          'Elasticsearch',

        ],
      },
    ],
  },
]

const insightsSubmenuItems = [
  {
    key: 'Reports',
    label: 'Reports',
    contentTitle: 'Reports',
    contentText: 'Deep industry reports, market analysis, and data-backed commerce insights.',
  },
  {
    key: 'Stories',
    label: 'Stories',
    contentTitle: 'Stories',
    contentText: 'Customer case studies and real product stories from modern commerce teams.',
  },
  {
    key: 'Guides',
    label: 'Guides',
    contentTitle: 'Guides',
    contentText: 'Actionable guides and best practices for commerce innovation and operations.',
  },
  {
    key: 'Trends',
    label: 'Trends',
    contentTitle: 'Trends',
    contentText: 'Current commerce and digital product trends shaping the next wave of growth.',
  },
  {
    key: 'Events',
    label: 'Events',
    contentTitle: 'Events',
    contentText: 'Webinars, conferences, and live sessions connected to commerce transformation.',
  },
  {
    key: 'Research',
    label: 'Research',
    contentTitle: 'Research',
    contentText: 'Original research, benchmarks, and experimentation insights for leaders.',
  },
]

export default function Navbar() {
  // useState controls whether mobile menu is open or closed
  // isOpen = false means menu is hidden by default
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredMegaItem, setHoveredMegaItem] = useState(servicesSubmenuItems[0].key)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)
  const [activeMobileSubItem, setActiveMobileSubItem] = useState<string | null>(null)
  const lastScrollY = useRef(0)

  const renderMobileSectionDetails = (section: string) => {
    if (section === 'Services' || section === 'Commerce') {
      const items = section === 'Services' ? servicesSubmenuItems : commerceSubmenuItems
      return (
        <div className="mt-2 space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveMobileSubItem(activeMobileSubItem === item.key ? null : item.key)}
              className="w-full text-left rounded-lg px-4 py-3 text-white transition-colors hover:bg-white/10 hover:text-green-500"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold">{item.label}</span>
                <span className="text-white/70">{activeMobileSubItem === item.key ? '−' : '+'}</span>
              </div>
              {activeMobileSubItem === item.key && (
                <p className="mt-3 text-sm text-gray-300">
                  {item.contentText}
                </p>
              )}
            </button>
          ))}
        </div>
      )
    }

    if (section === 'Solutions') {
      return (
        <div className="mt-2 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">{solutionsMegaMenu.leftHeading}</h4>
            {solutionsMegaMenu.leftCards.map((card) => (
              <div key={card.title} className="rounded-lg border border-white/10 bg-black/40 p-4 transition-colors hover:border-green-500 hover:bg-white/10">
                <p className="text-sm font-semibold text-white">{card.title}</p>
                <p className="mt-2 text-sm text-gray-300">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">{solutionsMegaMenu.rightHeading}</h4>
            {solutionsMegaMenu.rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-sm text-white transition-colors hover:bg-white/10 hover:text-green-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )
    }

    if (section === 'Clients') {
      return (
        <div className="mt-2 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">{clientsMegaMenu.leftHeading}</h4>
            {clientsMegaMenu.leftCards.map((card) => (
              <div key={card.description} className="rounded-lg border border-white/10 bg-black/40 overflow-hidden transition-colors hover:border-green-500 hover:bg-white/10">
                <img src={card.image} alt="Client story" className="h-32 w-full object-cover" />
                <p className="p-4 text-sm text-gray-300">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">{clientsMegaMenu.rightHeading}</h4>
            {clientsMegaMenu.rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-sm text-white transition-colors hover:bg-white/10 hover:text-green-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )
    }

    if (section === 'About us') {
      return (
        <div className="mt-2 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">{aboutMegaMenu.column1Heading}</h4>
            {aboutMegaMenu.column1Links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-sm text-white transition-colors hover:bg-white/10 hover:text-green-500"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">{aboutMegaMenu.column2Heading}</h4>
            {aboutMegaMenu.column2Links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-sm text-white transition-colors hover:bg-white/10 hover:text-green-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )
    }

    if (section === 'Insights') {
      return (
        <div className="mt-2 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">{insightsMegaMenu.leftHeading}</h4>
            {insightsMegaMenu.leftCards.map((card) => (
              <div key={card.description} className="rounded-lg border border-white/10 bg-black/40 overflow-hidden transition-colors hover:border-green-500 hover:bg-white/10">
                <img src={card.image} alt="Insight story" className="h-32 w-full object-cover" />
                <p className="p-4 text-sm text-gray-300">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">{insightsMegaMenu.rightHeading}</h4>
            {insightsMegaMenu.rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-sm text-white transition-colors hover:bg-white/10 hover:text-green-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href={insightsMegaMenu.bottomLink.href}
              className="inline-block rounded-lg px-4 py-3 text-sm text-white transition-colors hover:bg-white/10 hover:text-green-500"
            >
              {insightsMegaMenu.bottomLink.label}
            </a>
          </div>
        </div>
      )
    }

    return null
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const threshold = window.innerHeight * 0.9 // 90vh
      const isPastThreshold = currentScrollY > threshold

      setIsScrolledPastThreshold(isPastThreshold)

      // 2. Determine visibility based on scroll direction and threshold
      if (isOpen) {
        // Force visible when mobile menu is open
        setIsVisible(true)
      } else if (!isPastThreshold) {
        // Always visible when within the top 90vh
        setIsVisible(true)
      } else {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down -> hide navbar
          setIsVisible(false)
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up -> show navbar
          setIsVisible(true)
        }
      }

      // Update last scroll position (ensure non-negative for mobile bounce)
      lastScrollY.current = Math.max(0, currentScrollY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  useEffect(() => {
    if (typeof document === 'undefined') return
    const shouldLock = isOpen || !!hoveredLink
    document.body.style.overflow = shouldLock ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, hoveredLink])

  return (
    // <nav> is the HTML element for navigation
    // sticky top-0 → sticks to top when you scroll
    // z-50 → stays on top of all other elements
    // transition-all duration-300 ease-in-out → smooth transition for translate and bg changes
    <nav
      onMouseLeave={() => setHoveredLink(null)}
      className={`group fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolledPastThreshold
          ? 'bg-black shadow-sm'
          : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >

      {/* This div centers the content and limits max width */}
      <div className="max-w-[1230px] mx-auto flex items-center justify-between h-19 px-4 sm:px-6 lg:px-0">

        {/* LEFT SIDE: Logo */}
        <Link href="/" className="flex items-center h-11 px-3 py-2 sm:px-4 sm:py-2">
          <img
            src="/netguru_white.svg"
            alt="Netguru"
            className="h-full w-auto object-contain filter "
          />
        </Link>

        {/* CENTER: Nav links — hidden on mobile/tablet, visible on desktop */}
        <ul className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <li
              key={link.label}
              onMouseEnter={() => {
                setHoveredLink(link.label)
                if (link.label === 'Services') {
                  setHoveredMegaItem(servicesSubmenuItems[0].key)
                } else if (link.label === 'Commerce') {
                  setHoveredMegaItem(commerceSubmenuItems[0].key)
                } else if (link.label === 'Insights') {
                  setHoveredMegaItem(insightsSubmenuItems[0].key)
                }
              }}
            >
              <Link
                href={link.href}
                className={`relative inline-flex h-18 items-center px-4 text-[16px] font-semibold underline-offset-4 transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-[2px] after:content-[''] ${
                  hoveredLink === link.label
                    ? 'text-white underline after:bg-green-500'
                    : hoveredLink
                      ? 'text-[rgb(185,185,185)] after:bg-transparent'
                      : 'text-white hover:text-gray-200 after:bg-transparent'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE: CTA Button (desktop only) */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-solid border-white bg-transparent px-7 py-3 text-[14px] font-semibold text-white transition-colors group-hover:border-green-600 group-hover:bg-green-600 group-hover:text-black hover:!border-[#cba6f5] hover:!bg-[#cba6f5] hover:!text-black"
          >
            <span>Get in touch</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* HAMBURGER BUTTON: Mobile and tablet */}
        {/* lg:hidden → visible on small and medium screens, hidden on desktop */}
        <button
          className="lg:hidden flex flex-col gap-1.5 px-3 py-3"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Three lines that make the hamburger icon */}
          <span className="w-6 h-0.5 bg-white block"></span>
          <span className="w-6 h-0.5 bg-white block"></span>
          <span className="w-6 h-0.5 bg-white block"></span>
        </button>

      </div>

      {/* DESKTOP MEGA MENU */}
      {hoveredLink && (
        <div className="hidden md:block absolute inset-x-0 top-full bg-black border-t border-[#505050] border-b border-[#505050] shadow-xl text-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-10">
            {hoveredLink === 'Services' || hoveredLink === 'Commerce' ? (
              <div className="grid gap-8 lg:grid-cols-[25%_1px_75%]">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="space-y-2">
                    {(hoveredLink === 'Services' ? servicesSubmenuItems : commerceSubmenuItems).map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onMouseEnter={() => setHoveredMegaItem(item.key)}
                        className={`group flex w-full items-center justify-between text-left px-4 py-3 text-[16px] transition-colors hover:bg-[#333333] ${
                          hoveredMegaItem === item.key ? 'bg-[#333333] text-white' : 'text-white-400 hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className={`text-[16px] transition-opacity group-hover:opacity-100 ${
                            hoveredMegaItem === item.key ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          &rarr;
                        </span>
                      </button>
                    ))}
                  </div>
                  <Link
                    href={hoveredLink === 'Services' ? '/services' : '/commerce'}
                    className="px-4 text-[16px] font-normal text-white no-underline underline-offset-4 hover:underline"
                  >
                    {hoveredLink === 'Services' ? 'All services' : 'All commerce'}
                  </Link>
                </div>
                <div className="hidden lg:block w-px bg-[#505050]" />
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 lg:p-0">
                  {((hoveredLink === 'Services' ? servicesSubmenuItems : commerceSubmenuItems).find((item) => item.key === hoveredMegaItem)?.contentColumns || []).map((column) => (
                    <div key={column.heading} className="space-y-3 rounded-xl p-6 text-[16px] text-white font-normal">
                      <h3 className="text-[16px] text-white font-normal">{column.heading}</h3>
                      {column.paragraphs.map((paragraph, paragraphIndex) => (
                        <a
                          key={paragraphIndex}
                          href="#"
                          className="block text-[16px] text-white font-normal no-underline underline-offset-4 hover:text-[rgb(185,185,185)] hover:underline transition-colors"
                        >
                          {paragraph}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : hoveredLink === 'Solutions' ? (
              <div className="grid gap-8 lg:grid-cols-[50%_50%]">
                <div>
                  <h3 className="text-[16px] text-white font-normal mb-6">{solutionsMegaMenu.leftHeading}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {solutionsMegaMenu.leftCards.map((card) => (
                      <div key={card.title} className="bg-[#333333] p-5 text-[16px] text-white font-normal">
                        <p className="text-[14px] text-white font-normal mb-3">{card.title}</p>
                        <p className="text-[12px] text-white font-normal">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[16px] text-white font-normal mb-6">{solutionsMegaMenu.rightHeading}</h3>
                  <div className="space-y-3">
                    {solutionsMegaMenu.rightLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block text-[16px] text-white font-normal no-underline underline-offset-4 hover:text-[rgb(185,185,185)] hover:underline transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : hoveredLink === 'Clients' ? (
              <div className="grid gap-8 lg:grid-cols-[50%_23%_27%]">
                <div>
                  <h3 className="text-[16px] text-white font-normal mb-6">{clientsMegaMenu.leftHeading}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {clientsMegaMenu.leftCards.map((card) => (
                      <div className="bg-[#333333] text-[16px] text-white font-normal">
                        <img src={card.image} className="h-38 w-full object-cover" />
                        <p className="text-[14px] text-white font-normal p-5">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[16px] text-white font-normal mb-6">{clientsMegaMenu.rightHeading}</h3>
                  <div className="space-y-3">
                    {clientsMegaMenu.rightLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block text-[16px] text-white font-normal no-underline underline-offset-4 hover:text-[rgb(185,185,185)] hover:underline transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div />
              </div>
            ) : hoveredLink === 'About us' ? (
              <div className="grid gap-8 lg:grid-cols-[40%_40%_20%]">
                <div>
                  <h3 className="text-[16px] text-white font-normal mb-6">{aboutMegaMenu.column1Heading}</h3>
                  <div className="space-y-3">
                    {aboutMegaMenu.column1Links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block text-[16px] text-white font-normal no-underline underline-offset-4 hover:text-[rgb(185,185,185)] hover:underline transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[16px] text-white font-normal mb-6">{aboutMegaMenu.column2Heading}</h3>
                  <div className="space-y-3">
                    {aboutMegaMenu.column2Links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block text-[16px] text-white font-normal no-underline underline-offset-4 hover:text-[rgb(185,185,185)] hover:underline transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div />
              </div>
            ) : hoveredLink === 'Insights' ? (
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-[16px] text-white font-normal mb-6">{insightsMegaMenu.leftHeading}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {insightsMegaMenu.leftCards.map((card) => (
                      <div  className="bg-[#333333] text-[14px] text-white font-normal">
                        <img src={card.image}  className="h-38 w-full object-cover" />
                        <p className="text-[14px] text-white font-normal p-5">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-[1fr_1px_auto]">
                  <div>
                    <h3 className="text-[16px] text-white font-normal mb-6">{insightsMegaMenu.rightHeading}</h3>
                    <div className="space-y-3">
                      {insightsMegaMenu.rightLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="block text-[16px] text-white font-normal no-underline underline-offset-4 hover:text-[rgb(185,185,185)] hover:underline transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:block bg-white/20" />
                  <div className="flex items-end">
                    <a
                      href={insightsMegaMenu.bottomLink.href}
                      className="text-[16px] text-white font-normal no-underline underline-offset-4 hover:text-[rgb(185,185,185)] hover:underline transition-colors"
                    >
                      {insightsMegaMenu.bottomLink.label}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-3">
                  <p className="text-sm text-gray-300">
                    {megaMenuData[hoveredLink]?.description || 'Use this panel to add content for the selected item.'}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">
                    {megaMenuData[hoveredLink]?.title || hoveredLink}
                  </h2>
                </div>
                {(megaMenuData[hoveredLink]?.blocks || []).map((block) => (
                  <div key={block.heading} className="rounded-xl border border-gray-800 bg-[#111111] p-6">
                    <p className="text-sm font-semibold text-white">{block.heading}</p>
                    <p className="mt-3 text-sm text-gray-400">{block.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MOBILE MENU: Only shows when isOpen is true */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-[#505050] px-6 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  className="w-full text-left text-white transition-colors hover:text-green-500"
                  onClick={() => setOpenMobileSection(openMobileSection === link.label ? null : link.label)}
                >
                  <div className="flex items-center justify-between gap-3 rounded-lg border border-white/10 px-4 py-3 hover:bg-white/10">
                    <span className="text-sm font-semibold">{link.label}</span>
                    <span className="text-sm text-white/70">{openMobileSection === link.label ? '−' : '+'}</span>
                  </div>
                </button>
                {openMobileSection === link.label && (
                  <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-4">
                    {renderMobileSectionDetails(link.label)}
                  </div>
                )}
              </li>
            ))}
            {/* Mobile CTA button */}
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white bg-transparent px-5 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors rounded-none"
                onClick={() => setIsOpen(false)}
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}
