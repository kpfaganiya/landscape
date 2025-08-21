import { ReactNode } from 'react'

export default function ServiceCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border p-6">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-emerald-900/80">{desc}</p>
    </div>
  )
}
