import { Link } from "react-router-dom";
import CartLineItem from "../components/cart/CartLineItem";
import { useCart } from "../hooks/useCart";
import { formatCurrency } from "../utils/formatCurrency";

export default function CartPage() {
  const { items, removeItem } = useCart();

  const subtotal = items.reduce(
    (sum, item) =>
      sum + (item.originalPrice || item.price) * item.quantity,
    0
  );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = subtotal - total;

  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="eyebrow mb-4">Your selection</p>
      <h1 className="display-title">Your bag.</h1>

      {items.length > 0 ? (
        <>
          <div className="mt-8">
            {items.map((item) => (
              <CartLineItem
                key={item.id}
                item={item}
                onRemove={removeItem}
              />
            ))}
          </div>

          <div className="mt-8 space-y-3 border-t border-charcoal/10 pt-5 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-leather">
                <span>Bundle discount</span>
                <span>-{formatCurrency(discount)}</span>
              </div>
            )}

            <div className="flex justify-between border-t border-charcoal/10 pt-4 font-serif text-2xl">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>

          <button className="button-primary mt-7 w-full">
            Continue to checkout
          </button>
        </>
      ) : (
        <div className="mt-8 border border-charcoal/10 p-8">
          <p>Your bag is waiting for something lovely.</p>

          <Link className="button-primary mt-6" to="/bundles">
            Browse bundles
          </Link>
        </div>
      )}
    </section>
  );
}