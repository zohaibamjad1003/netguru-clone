const services = [
  {
    title: 'Strategy & transformation',
    desc: 'Benefit from transformation roadmaps, proven delivery governance, support in key technology choices, modern operating models, and ESG and compliance by design.',
  },
  {
    title: 'Experience & design',
    desc: 'Leverage our design system for rapid consistency, human-centered UX and UI design, conversion-driven product and service journeys, customer research, AI design, and accessibility.',
  },
  {
    title: 'Commerce development',
    desc: 'Make the most of modern ecommerce platforms, custom storefronts, product data and content systems, integrations with ERP, CRM, payments, and logistics, and end-to-end engineering.',
  },
  {
    title: 'AI, data & engagement',
    desc: 'Boost your AI personalization, retail media and onsite ads, real-time analytics, digital twins for products and stores, loyalty programs, payment models, and green checkout.',
  },
  {
    title: 'Ops & managed services',
    desc: 'Breathe easily with our 24/7 monitoring, proactive maintenance, cloud operations and cost optimization, DevOps and CI/CD automation, and security and compliance audits.',
  },
]

export default function Services() {
  return (
    <section className=" py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-[30px] font-400 text-white mb-16">
          Leverage full digital{' '}
          <span className="font-bold">commerce expertise</span>
        </h2>

        <div className="space-y-1">
          {services.map((service) => (
            <div
              key={service.title}
              className="border-b border-white/20 py-[40px]"
            >
              <div className="flex flex-col md:flex-row justify-between gap-5 items-start">
                <h3 className="text-[24px] font-bold text-white md:w-[41%]">
                  {service.title}
                </h3>
                <p className="text-[#ebebeb] text-[14px] font-[400] leading-relaxed md:w-[59%] md:text-left">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}