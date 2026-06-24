const logos = [
  '/ikea.svg',
  '/volkswagen.svg',
  '/sportano.svg',
  '/olx.svg',
  '/zabka.svg',
  '/metro-brazil.svg',
  '/ledbury.svg',
  '/careem.svg',
  '/vinted-go.svg',
  '/artemest.svg',
  '/delivery-hero.svg',
  '/cosmo.svg',
]
// 12 logo URLs for SVGs

export default function CommerceFootprint() {
  return (
    // Dark background section, same color family as your other dark sections
    <section className="py-24 text-white" style={{ backgroundColor: '#333333' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* LOGO GRID */}
        {/* Row 1: Text (2 columns) */}
        {/* Row 2 & 3: Logos (6 columns each) */}
        
        {/* Row 1 - Text Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-20">
          <h2 className="text-[30px]  font-[400] leading-snug">
            Benefit from our wide <span className="font-bold">commerce footprint</span>
          </h2>

          <p className="text-[18px] font-[400] text-[#ebebeb] ml-0 md:ml-[70px] text-base leading-relaxed md:pt-2">
            We empower leading brands to transform B2B solutions, marketplaces,
            and retail ecosystems with cutting-edge technology, AI-powered
            personalization, and scalable digital solutions.
          </p>
        </div>

        

        {/* Row 2 - First 6 Logos */}
        <div className="grid grid-cols-3 gap-6 mb-16 md:flex md:items-center md:justify-between md:gap-8">
          {logos.slice(0, 6).map((url) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:opacity-100 transition-opacity md:flex-1"
            >
              <img 
                src={url}
                alt=""
                className="h-6 md:h-8 w-[100px] opacity-90 object-contain filter brightness-0 invert"
              />
            </a>
          ))}
        </div>

        {/* Row 3 - Last 6 Logos */}
        <div className="grid grid-cols-3 gap-6 md:flex md:items-center md:justify-between md:gap-8">
          {logos.slice(6, 12).map((url) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:opacity-100 transition-opacity md:flex-1"
            >
              <img 
                src={url}
                alt=""
                className="h-6 md:h-8 w-[100px] opacity-90 object-contain filter brightness-0 invert"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}