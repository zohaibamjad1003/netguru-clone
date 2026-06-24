"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";

const services = [
  {
    title: "Strategy & transformation",
    desc: "Benefit from transformation roadmaps, proven delivery governance, support in key technology choices, modern operating models, and ESG and compliance by design.",
  },
  {
    title: "Experience & design",
    desc: "Leverage our design system for rapid consistency, human-centered UX and UI design, conversion-driven product and service journeys, customer research, AI design, and accessibility.",
  },
  {
    title: "Commerce development",
    desc: "Make the most of modern ecommerce platforms, custom storefronts, product data and content systems, integrations with ERP, CRM, payments, and logistics, and end-to-end engineering.",
  },
  {
    title: "AI, data & engagement",
    desc: "Boost your AI personalization, retail media and onsite ads, real-time analytics, digital twins for products and stores, loyalty programs, payment models, and green checkout.",
  },
  {
    title: "Ops & managed services",
    desc: "Breathe easily with our 24/7 monitoring, proactive maintenance, cloud operations and cost optimization, DevOps and CI/CD automation, and security and compliance audits.",
  },
];

export default function Services() {
  // refs for each service block
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const minOpacity = 0.45;
  // compute offscreen once
  const offscreenRef = useRef<{ x: number; y: number } | null>(null);
  useLayoutEffect(() => {
    offscreenRef.current = {
      x: window.innerWidth * 0.15,
      y: window.innerHeight * 0.15,
    };
  }, []);

  useEffect(() => {
    const vh = () => window.innerHeight;
    const offX = () =>
      offscreenRef.current ? offscreenRef.current.x : window.innerWidth;
    const offY = () =>
      offscreenRef.current ? offscreenRef.current.y : window.innerHeight * 0.15;

    const update = () => {
      const H = vh();
      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const itemOffset = idx * 100;
        const start = H + 120 + itemOffset;
        const end = H * 0.3 + itemOffset;
        const progress = Math.max(
          0,
          Math.min(1, (start - top) / (start - end)),
        );
        const x = offX() * (1 - progress);
        const y = offY() * (1 - progress);
        const opacity = minOpacity + (1 - minOpacity) * progress;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        el.style.opacity = String(opacity);
      });
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

    // initial
    update();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <section className="overflow-hidden py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[30px]  font-400 text-white mb-7 sm:mb-8 md:mb-9 lg:mb-10">
          Leverage full digital{" "}
          <span className="font-bold">commerce expertise</span>
        </h2>

        <div className="space-y-1">
          {services.map((service, idx) => (
            <div
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              key={service.title}
              className="border-b border-white/20 py-3 sm:py-[25px] md:py-[35px] lg:py-[45px]"
              style={{
                transform: "translate3d(0,0,0)",
                opacity: 1,
                willChange: "transform, opacity",
              }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-start">
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
  );
}
