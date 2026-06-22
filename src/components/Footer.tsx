import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#505050] bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">

        {/* Row 1 */}
        <div className="py-8 flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img src="/netguru.svg" className="h-16 w-auto object-contain filter brightness-0 invert" />
                <p className="text-sm text-[#d4d4d4] mb-0">Our Clients:</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-between md:gap-10">
            {[
              { src: '/olx.svg', label: '21% Higher Conversion for a Top RE Marketplace' },
              { src: '/delivery-hero.svg', label: 'Scaling Core Apps for Delivery Hero, a Q-Commerce Giant' },
              { src: '/vinted-go.svg', label: 'Ecommerce Boost with On-Demand Team Extension' },
              { src: '/zabka.svg', label: 'System Architecture for Autonomous Stores by Żabka' },
            ].map((item) => (
              <div key={item.label} className="group w-full md:basis-[18%] md:max-w-[18%] flex flex-col items-start gap-4 text-left">
                <img src={item.src} alt={item.label} className="h-15 w-16 object-contain filter brightness-0 invert" />
                <span className="text-sm text-white group-hover:underline">{item.label}</span>
              </div>
            ))}
            
          </div>
        </div>

        {/* Row 2 */}
        <div className="border-t border-[#505050] py-8">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="w-full md:basis-[48%] md:min-w-[320px]">
              <h3 className="text-white text-[14px] font-[400] mb-4">Partnerships:</h3>
              <div className="flex flex-wrap justify-between gap-4">
                {['/microsoft.svg', '/aws.svg', '/google-cloud-partner.svg', '/webflow-premium-partner.svg'].map((src) => (
                  <img key={src} src={src} alt="Partner logo" className="h-24 w-[100px] object-contain filter brightness-0 invert" />
                ))}
              </div>
            </div>

            <div className="w-full md:basis-[48%] md:min-w-[320px]">
              <h3 className="text-white text-[14px] font-[400] mb-4">Recognized by:</h3>
              <div className="flex flex-wrap justify-between gap-4">
                {['/clutch.svg', '/inc-5000.svg', '/ey-entrepreneur-of-the-year.svg', '/forbes.svg'].map((src) => (
                  <img key={src} src={src} alt="Recognition logo" className="h-24 w-[100px] object-contain filter brightness-0 invert" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="border-t border-[#505050] py-8">
          <div className="grid gap-10 lg:grid-cols-[14%_20%_25%_25%]">
            <div className="grid grid-cols-2 gap-10 lg:contents">
              <div className="lg:w-[100%]">
                <h3 className="text-white text-[18px] font-[700] mb-4">Netguru S.A.</h3>
                <p className="text-[12px] text-white mb-4">
                  Nowe Garbary Office Center <br />
ul. Małe Garbary 9<br />
61-756 Poznań, Poland
                </p>
                <a href="mailto:hello@netguru.com" className="text-sm text-white underline hover:text-gray-200 transition-colors">
                  hello@netguru.com
                </a>
              </div>

              <div>
                <p className="text-white text-[12px] font-300 md:pt-10 mb-4">VAT-ID: PL7781454968 <br />
REGON: 300826280 <br />
KRS: 0000745671</p>
                <div className="flex flex-wrap gap-4">
                  {['/behance-icon.svg', '/github-icon.svg', '/linkedin.svg'].map((src) => (
                    <img key={src} src={src} className="h-10 w-[20px] object-contain filter brightness-0 invert" />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 lg:contents">
              <div>
                <h3 className="text-white text-[14px] font-[400] mb-4">Certificates:</h3>
                <div className="flex flex-nowrap gap-6 overflow-x-auto md:flex-wrap md:gap-12">
                  {['/b-corp.svg', '/tuv-nord.svg'].map((src) => (
                    <img key={src} src={src} alt="Client logo" className="h-[60px] md:h-[80px] mt-[20px] object-contain filter brightness-0 invert" />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Next in Commerce Newsletter</h3>
                <p className="text-sm text-white mb-6">Trends & insights for commerce leaders</p>
                <button className="rounded-none border-2 border-white bg-black text-white px-5 py-3 text-sm font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
                  <span>Subscribe</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="border-t border-[#505050] py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-white">
              ©2026 Netguru S.A. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-6 text-white text-[12px] w-full md:w-auto">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of use
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
