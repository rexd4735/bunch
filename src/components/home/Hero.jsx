import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
      <div className="max-w-xl">
        <p className="eyebrow mb-5">Thoughtfully gathered</p>
        <h1 className="display-title">Everyday things, made more special together.</h1>
        <p className="mt-6 max-w-md text-base leading-7 text-charcoal/70">Curated bundles for gifting, keeping, and the quiet moments in between.</p>
        <Link className="button-primary mt-8" to="/bundles">Explore bundles</Link>
      </div>
      <div className="relative min-h-80 overflow-hidden bg-wool p-7 sm:min-h-[26.25rem]">
        <div className="absolute inset-0" />
        <img className="absolute inset-0 h-full w-full object-cover" src="/img/zara1.webp" alt="" />
        <div className="absolute inset-7 border border-ivory/55" />
        <p className="absolute bottom-11 left-11 max-w-52 font-serif text-3xl leading-tight text-ivory">A better way to give a little more.</p>
      </div>
    </section>
  )
}
