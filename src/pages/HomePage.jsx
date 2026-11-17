import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import CategoryStrip from '../components/home/CategoryStrip'
import BundleCard from '../components/bundles/BundleCard'
import SectionHeading from '../components/common/SectionHeading'
import { bundles } from '../data/bundles'

export default function HomePage() {
  return <><Hero /><CategoryStrip />
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><SectionHeading eyebrow="The first edit" title="Picked with intention" action={<Link className="text-xs font-semibold uppercase tracking-[0.14em] underline" to="/bundles">See all</Link>} />
      <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{bundles.slice(0, 3).map((bundle) => <BundleCard key={bundle.id} bundle={bundle} />)}</div>
    </section>
  </>
}
