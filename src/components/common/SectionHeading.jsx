export default function SectionHeading({ eyebrow, title, action }) {
  return <div className="flex items-end justify-between gap-5">
    <div><p className="eyebrow mb-3">{eyebrow}</p><h2 className="font-serif text-3xl tracking-[-0.03em] sm:text-4xl">{title}</h2></div>
    {action}
  </div>
}
