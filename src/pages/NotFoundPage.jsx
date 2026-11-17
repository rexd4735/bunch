import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="display-title mt-4">This page wandered off.</h1>
      <Link to="/" className="button-primary mt-8">Back home</Link>
    </section>
  )
}
