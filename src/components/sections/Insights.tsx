import Link from 'next/link'

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
    image: '/city.jpg',
  },
  {
    type: 'Blog',
    title: 'Scaling Microservices: Lessons from Netflix, Uber, Amazon, and Spotify',
    href: '/blog/scaling-microservices',
    image: '/David.jpg',
    authorImage: '/white.webp',
    authorName: 'Robert Scholz',
    date: 'May 28, 2026',
  },
]

export default function Insights() {
  return (
    <section className="py-24 bg-[#161616]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-[30px] font-[400] text-white mb-15 md:mb-30">
          Explore insights <span className="italic">for acceleration</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {insights.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group block overflow-hidden transform transition duration-300 hover:shadow-lg hover:scale-[1.05] ${index === 1 ? 'md:mt-[50px]' : index === 2 ? 'md:mt-[100px]' : ''}`}
            >
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