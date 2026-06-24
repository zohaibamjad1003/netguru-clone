const numbers = [
  { value: "73", label: "Our current NPS score" },
  { value: "2500+", label: "Projects delivered" },
  { value: "400+", label: "People on board" },
  { value: "17+", label: "Years on market" },
];

export default function WhyNetguru() {
  return (
    <section className="py-35 text-white relative">
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-black/70"
        style={{
          backgroundImage: "url('/visual.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="max-w-7xl mx-auto  relative z-10">
        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
          {/* LEFT COLUMN - Image, Logo, Heading, Text */}
          <div className="flex h-full flex-col justify-between">
            <div>
              {/* Background image placeholder */}
              <img
                src="/netguru_white.svg"
                alt="Netguru"
                className="w-[100px] h-[21px] mb-8 "
              />

              <h2 className="text-[51px] mb-0 lg:mb-[150px]">
                Why <span className="font-bold">Netguru?</span>
              </h2>
            </div>

            <p className="text-[#ebebeb] text-[18px] font-[600] text-lg">
              With a worldwide footprint, record-high NPS, and end-to-end
              services, we are your one-stop shop for digital product talent.
            </p>
          </div>

          {/* RIGHT COLUMN - 4 Stat Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {numbers.map((item) => (
              <div
                key={item.label}
                className="space-y-4 md:space-y-2 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,#0a1a0f_10%,transparent),color-mix(in_srgb,#0a1a0f_60%,transparent))] p-6 "
              >
                <h3
                  className={`text-white text-[61px] font-[400] mb-0 ${item.value === "2500+" ? "md:text-[52px] lg:text-[61px]" : ""}`}
                >
                  {item.value}
                </h3>
                <p className="text-[14px] font-[600] text-[#ebebeb]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
