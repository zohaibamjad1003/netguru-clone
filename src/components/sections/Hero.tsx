export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* CONTENT */}
      <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto z-10 text-left text-white">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-[60%] lg:w-[45%]">
            <h1 className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[91px] font-400 tracking-[0px] leading-[50px] sm:leading-[58px] md:leading-[72px] lg:leading-[80px] mt-45 sm:mt-60 md:mt-50 lg:mt-85 ">
              <span className="text-[#00d563]">AI-native</span> commerce
            </h1>

            <p className="text-sm md:text-[18px] text-white-400 mb-15">
              We power digital commerce with AI-driven platforms, scalable
              marketplaces, and omnichannel experiences.
            </p>

            {/* TRUSTED BY logos */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap mb-10">
              <span className="text-base text-white w-full sm:w-auto">
                Trusted by:
              </span>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <img
                  src="/ikea.svg"
                  className="h-10 w-[40px] object-contain filter brightness-0 invert"
                  alt="IKEA logo"
                />
                {["/volkswagen.svg", "/olx.svg", "/zabka.svg"].map((logo) => (
                  <img
                    key={logo}
                    src={logo}
                    alt=""
                    className="h-10 w-[60px] object-contain filter brightness-0 invert"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-[55%]">
            {/* Empty right container for layout spacing */}
          </div>
        </div>
      </div>
    </section>
  );
}