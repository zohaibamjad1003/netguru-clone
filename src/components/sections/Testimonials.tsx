"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    topImage: "/keller-williams.svg",
    quote: "Netguru has been the best agency we've worked with so far.",
    name: "Adi Pavlovic",
    role: "Director of Innovation",
    bottomImage: "/Adi_Pavlovic.jpg",
  },
  {
    id: 2,
    topImage: "/merck.svg",
    quote: "Excellence and speed. It's rare to get both, and Netguru delivers.",
    name: "Mark Greiner",
    role: "Digital Innovation Manager",
    bottomImage: "/Mark Greiner-2.jpeg",
  },
  {
    id: 3,
    topImage: "/zabka.svg",
    quote:
      "Cooperation with Netguru allowed us to efficiently deliver our vision.",
    name: "Paweł Grabowski",
    role: "Head of Digital B2B at Żabka Future in Żabka Group",
    bottomImage: "/Paweł Grabowski_2.jpg",
  },
  {
    id: 4,
    topImage: "/sportano.svg",
    quote:
      "Netguru’s mobile experience produced a robust solution that fully meets our objectives.",
    name: "Grzegorz Kupidura",
    role: "Chief Technology Officer",
    bottomImage: "/kupidura.jpeg",
  },
  {
    id: 5,
    topImage: "/volkswagen.svg",
    quote:
      "Let me put it this way: we have built a grand and impressive building. But without Netguru’s insights, we would be stuck on the ground-floor forever.",
    name: "Artur Kryzan",
    role: "Team Leader and CX Manager",
    bottomImage: "/Artur_Kryzan.jpg",
  },
  {
    id: 6,
    topImage: "/artemest.svg",
    quote:
      "With Netguru, we’re now releasing many more features than we used to.",
    name: "Marco Deseri",
    role: "Chief Digital Officer",
    bottomImage: "/Marco_Deseri.jpg",
  },
];

export default function Testimonials() {
  const testimonialTopMargin = 150; // change this value to adjust top margin for testimonials 1, 3, and 5
  const leftColumnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const update = () => {
      const el = leftColumnRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
      const translateY = -100 * progress;
      el.style.transform = `translate3d(0, ${translateY}px, 0)`;
    };

    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <section className="pt-24 pb-35 bg-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[30px] font-[400] text-white mb-20">
          Check our <span className="font-bold">clients&apos; words</span>
        </h2>

        {/* Grid of 6 containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div
            ref={leftColumnRef}
            className="space-y-8 md:space-y-12 md:mt-[var(--testimonial-top-margin)]"
            style={
              { "--testimonial-top-margin": `${testimonialTopMargin}px` } as any
            }
          >
            {testimonials
              .filter((_, index) => index % 2 === 0)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col gap-12 md:gap-0 justify-between bg-black pt-[40px] px-[25px] pb-[25px] h-auto md:gap-[2.5rem]"
                >
                  {/* Top image */}
                  <div className="w-full overflow-hidden">
                    <img
                      src={testimonial.topImage}
                      className="w-[70px] h-auto md:w-[80px] object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Quote/paragraph */}
                  <div className="py-3 md:py-4">
                    <p className="text-[16px] md:text-[18px] font-[400] text-[#ebebeb] leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Bottom image with description */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={testimonial.bottomImage}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      {testimonial.id !== 3 ? (
                        <p className="">
                          <span className="text-white font-[700] text-[14px]">
                            {testimonial.name}
                          </span>
                          <span className="mx-2 text-xs text-white/70">/</span>
                          <span className="text-[#ebebeb] font-[400] text-[14px]">
                            {testimonial.role}
                          </span>
                        </p>
                      ) : (
                        <>
                          <p className="font-semibold text-sm text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-white">
                            {testimonial.role}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="space-y-8 md:space-y-12">
            {testimonials
              .filter((_, index) => index % 2 === 1)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col gap-12 md:gap-0 justify-between bg-black pt-[40px] px-[25px] pb-[25px] h-auto md:gap-[2.5rem]"
                >
                  {/* Top image */}
                  <div className="w-full overflow-hidden">
                    <img
                      src={testimonial.topImage}
                      className="w-[70px] h-auto md:w-[80px] object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Quote/paragraph */}
                  <div className="py-3 md:py-4">
                    <p className="text-[16px] md:text-[18px] font-[400] text-[#ebebeb] leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Bottom image with description */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={testimonial.bottomImage}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      {testimonial.id !== 3 ? (
                        <p className="">
                          <span className="text-white font-[700] text-[14px]">
                            {testimonial.name}
                          </span>
                          <span className="mx-2 text-xs text-white/70">/</span>
                          <span className="text-[#ebebeb] font-[400] text-[14px]">
                            {testimonial.role}
                          </span>
                        </p>
                      ) : (
                        <>
                          <p className="font-semibold text-sm text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-white">
                            {testimonial.role}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
