import { categories } from '../../data/categories'

export default function CategoryStrip() {
  return (
    <section className="border-y border-charcoal/10 bg-wool">
      <div className="mx-auto grid max-w-6xl divide-y divide-charcoal/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
        {categories.map((category) => <article className="py-8 sm:px-7" key={category.id}>
          <p className="font-serif text-2xl">{category.name}</p>
          <p className="mt-2 text-sm leading-6 text-charcoal/65">{category.description}</p>
        </article>)}
      </div>
    </section>
  )
}
