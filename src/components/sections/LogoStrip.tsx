// The logos that scroll across
const logos = [
  'IKEA', 'Volkswagen', 'OLX', 'Żabka', 'Metro Brazil',
  'Ledbury', 'Careem', 'Vinted GO', 'Artemest', 'Delivery Hero',
]

export default function LogoStrip() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      {/* overflow-hidden → hides logos outside the container */}

      <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
        Our clients
      </p>

      {/* The scrolling container */}
      <div className="flex">

        {/* We render the list TWICE — so when first copy ends, second is already there */}
        {/* This creates the seamless infinite loop effect */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex items-center gap-16 animate-marquee whitespace-nowrap"
            // animate-marquee → custom animation we add to tailwind.config
            aria-hidden={copy === 1}
            // aria-hidden on second copy → screen readers only read it once
          >
            {logos.map((logo) => (
              <li key={logo} className="text-gray-400 font-semibold text-lg">
                {logo}
                {/* Replace with <img> tags when you have the actual logo files */}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}