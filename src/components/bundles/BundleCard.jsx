import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";

export default function BundleCard({ bundle }) {
  const { addItem } = useCart();

  const hasDiscount =
    bundle.originalPrice && bundle.originalPrice > bundle.price;

  return (
    <article>
      <div className="relative aspect-[4/5] overflow-hidden bg-wool">
        <img
          src={bundle.image}
          alt={bundle.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <span className="absolute bottom-6 left-6 font-serif text-2xl text-ivory">
          {bundle.name}
        </span>
      </div>

      <div className="flex items-start justify-between gap-4 pt-4">
        <div>
          <h3 className="font-serif text-xl">{bundle.name}</h3>

          <p className="mt-1 text-sm text-charcoal/65">
            {bundle.description}
          </p>
        </div>

        <div className="shrink-0 text-right">
          {hasDiscount && (
            <p className="text-xs text-charcoal/45 line-through">
              {formatCurrency(bundle.originalPrice)}
            </p>
          )}

          <p className="text-sm font-semibold text-leather">
            {formatCurrency(bundle.price)}
          </p>

          {hasDiscount && (
            <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-leather">
              Save {formatCurrency(bundle.originalPrice - bundle.price)}
            </p>
          )}
        </div>
      </div>

      <button
        className="button-secondary mt-4 w-full"
        onClick={() => addItem(bundle)}
      >
        Add to bag
      </button>
    </article>
  );
}