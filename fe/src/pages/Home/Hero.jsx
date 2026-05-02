const Hero = () => (
  <div className="relative text-center py-16 px-6 mb-10">
    <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
      <div className="w-96 h-40 rounded-full bg-vd-accent/10 blur-3xl" />
    </div>

    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    bg-vd-accent/10 border border-[--vd-border2]
                    text-xs text-vd-accent2 mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-vd-accent" />
      Events happening near you
    </div>

    <h1 className="font-heading text-4xl text-vd-text mb-3 leading-tight">
      Discover <em className="not-italic text-vd-accent2">unforgettable</em> events
    </h1>
    <p className="text-vd-muted text-sm max-w-md mx-auto">
      Find and join the best local events — music, tech, art and more.
    </p>
  </div>
)

export default Hero
