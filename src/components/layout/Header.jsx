import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export default function Header() {
  const { itemCount } = useCart()
  return (
    <header className=" sticky top-0 z-50 border-b border-charcoal/10 bg-ivory">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.18em]">BUNCH</Link>
        <nav className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.15em] sm:gap-8">
          <NavLink to="/bundles" className="hover:text-leather">Bundles</NavLink>
          <NavLink to="/cart" className="hover:text-leather">Bag <span className="text-leather">({itemCount})</span></NavLink>
        </nav>
      </div>
    </header>
  )
}
