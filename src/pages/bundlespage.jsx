import { useState } from "react";
import BundleCard from "../components/bundles/BundleCard";
import { bundles } from "../data/bundles";

export default function BundlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Home", "Gifting", "Wellness"];

  const filteredBundles =
    activeCategory === "All"
      ? bundles
      : bundles.filter(
          (bundle) =>
            bundle.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow mb-4">The collection</p>

      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h1 className="display-title">Find your bunch.</h1>
          <p className="mt-4 max-w-md leading-7 text-charcoal/65">
            Thoughtfully selected bundles for gifting, keeping, and everyday
            little luxuries.
          </p>
        </div>

        <p className="text-sm text-charcoal/60">
          {filteredBundles.length} bundles
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 border-b border-charcoal/10 pb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "bg-leather-dark px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-ivory"
                : "border border-charcoal/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal transition hover:border-charcoal"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBundles.map((bundle) => (
          <BundleCard key={bundle.id} bundle={bundle} />
        ))}
      </div>
    </section>
  );
}