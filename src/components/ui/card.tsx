type CardProps = {
  id: number
  title: string
  text: string
  icon: string
  accentColor: string
  isNew?: boolean
}

export default function Card({
  id,
  title,
  text,
  icon,
  accentColor,
  isNew = false,
}: CardProps) {
  return (
    <article className="group relative flex gap-4 bg-white p-6 transition-[transform,background-color,box-shadow] hover:z-10 hover:-translate-y-1 hover:bg-gray-50/80 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:gap-5 sm:p-8">
      <span
        className="absolute top-4 left-4 flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white sm:top-5 sm:left-5"
        style={{ backgroundColor: accentColor }}
        aria-hidden
      >
        {id}
      </span>

      {isNew && (
        <span
          className="absolute top-4 right-4 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white sm:top-5 sm:right-5"
          style={{ backgroundColor: accentColor }}
        >
          New
        </span>
      )}

      <div className="mt-8 grid w-full grid-cols-[88px_1fr] gap-4 items-start gap-4 sm:mt-9 sm:grid-cols-[104px_1fr] sm:gap-5">
        <div className="overflow-visible">
          <img
            src={icon}
            alt=""
            className="h-32 w-[120px] object-contain object-left sm:h-36 sm:w-[140px] lg:h-40 lg:w-[160px]"
            aria-hidden
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 text-[15px] font-semibold leading-snug text-gray-900 sm:text-base">
            {title}
          </h3>
          <p className="text-xs leading-relaxed text-gray-600">{text}</p>
        </div>
      </div>
    </article>
  )
}
