export default function Masonry({ images }: { images: string[] }) {
  return (
    <div className="mt-8 [column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 gap-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Project ${i + 1}`}
          className="mb-4 w-full break-inside-avoid rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          loading="lazy"
        />
      ))}
    </div>
  )
}
