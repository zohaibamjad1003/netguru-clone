export default function Hero() {
  return (
    // relative → needed so we can position children inside it
    // min-h-screen → full viewport height
    // overflow-hidden → video won't spill outside
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        // absolute inset-0 → covers the entire section
        // object-cover → video fills without stretching
        autoPlay      // starts automatically
        muted         // must be muted for autoplay to work in browsers
        loop          // keeps repeating
        playsInline   // required for iOS
        poster="/hero-poster.jpg"
        // poster → image shown before video loads (put any dark image here)
      >
        <source src="/hero.mp4" type="video/mp4" />
        {/* Put a video file in your /public folder as hero-video.mp4 */}
        {/* For now it will just show the poster image */}
      </video>

      {/* DARK OVERLAY — makes text readable over the video */}
      <div className="absolute inset-0" />
      {/* bg-black/60 → black with 60% opacity */}

      {/* CONTENT — z-10 puts it above the video and overlay */}
      <div className="relative z-10 mx-auto w-full max-w-[1230px] px-6 sm:px-8 lg:px-0 text-left text-white">
        <div className="flex flex-col md:flex-row w-full gap-10">
          <div className="md:w-[60%] lg:w-[45%]">
            <h1 className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[91px] font-400 tracking-[0px] leading-[50px] sm:leading-[58px] md:leading-[72px] lg:leading-[80px] mt-85 mb-10">
              <span className="text-[#00d563]">AI-native</span> commerce
            </h1>

            <p className="text-sm md:text-[18px] text-white-400 mb-15">
              We power digital commerce with AI-driven platforms, scalable
              marketplaces, and omnichannel experiences.
            </p>

            {/* TRUSTED BY logos */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap mb-10">
              <span className="text-base text-white w-full sm:w-auto">Trusted by:</span>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <img
                  src="/ikea.svg"
                  className="h-10 w-[40px] object-contain filter brightness-0 invert"
                  alt="IKEA logo"
                />

                {[
                  '/volkswagen.svg',
                  '/olx.svg',
                  '/zabka.svg',
                ].map((logo) => (
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
  )
}
