const Hero = ({ search, onSearch }) => {
  const handleSubmit = (e) => e.preventDefault()

  return (
    <div className="relative text-center py-16 px-6 mb-8 animate-fade-in">

      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center -z-10">
        <div className="w-125 h-48 rounded-full bg-vd-accent/10 blur-3xl" />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                      bg-vd-accent/10 border border-vd-border2
                       text-vd-accent2 mb-6 animate-fade-up"
        style={{ animationDelay: '0.1s' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-vd-accent" />
        Discover what's happening
      </div>

      <h1 className="font-heading text-4xl md:text-5xl text-vd-text mb-3 leading-tight
                     animate-fade-up"
        style={{ animationDelay: '0.15s' }}>
        Your next favourite <br />
        <em className="not-italic text-vd-accent2">event</em> is here
      </h1>

      <p className="text-vd-muted max-w-md mx-auto mb-8 animate-fade-up"
        style={{ animationDelay: '0.2s' }}>
        Browse concerts, meetups, workshops and more — all in one place.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex gap-2 max-w-lg mx-auto mb-8 animate-fade-up"
        style={{ animationDelay: '0.25s' }}
      >
        <input
          type="search"
          value={search}
          onChange={e => onSearch(e.target.value)}
          placeholder="Search events, cities, categories…"
          className="field-input flex-1"
        />
        <button type="submit" className="btn-accent px-5 shrink-0">
          Search →
        </button>
      </form>
    </div>
  )
}

export default Hero
