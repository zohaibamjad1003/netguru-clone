import Link from 'next/link'

export default function CtaBanner() {
  return (
    // Dark section with a centered call to action
    <section
      className="pt-24 pb-24 md:pt-32 md:pb-32 lg:pt-55 lg:pb-55 bg-gray-950 text-white text-center "
      style={{
        backgroundImage: "url('/upDown.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-[30px] font-normal leading-tight mb-10">
          Design, build, and{' '}
          <span className="font-semibold">scale digital commerce</span>{' '}
          solutions that drive revenue and operational excellence
        </h2>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#cba6f5] text-black text-[14px] font-[600] pt-4 pr-6 pb-4 pl-8 transition-colors"
        >
          <span>Estimate project</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>

      </div>
    </section>
  )
}
