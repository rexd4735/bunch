import { formatCurrency } from '../../utils/formatCurrency'

export default function CartLineItem({ item, onRemove }) {
  return <div className="flex items-center justify-between border-b border-charcoal/10 py-5">
    <div><p className="font-serif text-xl">{item.name}</p><p className="mt-1 text-sm text-charcoal/60">Qty {item.quantity}</p></div>
    <div className="flex items-center gap-5"><span>{formatCurrency(item.price * item.quantity)}</span><button className="text-xs uppercase tracking-[0.14em] underline" onClick={() => onRemove(item.id)}>Remove</button></div>
  </div>
}
