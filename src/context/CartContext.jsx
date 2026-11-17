import { createContext, useEffect, useMemo, useState } from 'react'

export const CartContext = createContext(null)
const storageKey = 'bunch-cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey)) ?? [] } catch { return [] }
  })

  useEffect(() => localStorage.setItem(storageKey, JSON.stringify(items)), [items])

  const value = useMemo(() => ({
    items,
    addItem(bundle) {
      setItems((current) => current.some((item) => item.id === bundle.id)
        ? current.map((item) => item.id === bundle.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...bundle, quantity: 1 }])
    },
    removeItem(id) { setItems((current) => current.filter((item) => item.id !== id)) },
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
  }), [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
