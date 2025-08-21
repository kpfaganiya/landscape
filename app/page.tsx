'use client'
import { motion } from 'framer-motion'
import { Star, Leaf, Droplets, Flame, Wrench, Phone, Mail, MapPin, Play, Sparkles, CheckCircle2 } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import Masonry from '@/components/Masonry'
import LeadForm from '@/components/LeadForm'
import { site } from '@/lib/seo'

const data = {
  tag: 'Transform Your Outdoor Space Into a Living Masterpiece',
  subtag: 'Award-winning landscaping design & maintenance that elevates your lifestyle.',
  offer: {
    headline: 'Seasonal VIP Offer',
    copy: 'Book design today and get 20% off your first project. Limited slots this month.'
  },
  heroVideo: 'https://cdn.coverr.co/videos/coverr-water-drops-and-leaves-5626/1080p.mp4',
  gallery: [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551907234-9b28c1f2fab5?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1585325701961-6c48ab7e50a9?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop',
  ],
  phone: site.phone,
  email: site.email,
  address: site.address,
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-emerald-50 to-white text-emerald-950">
      {/* Offer Bar */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
        <div className="container py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <p><span className="font-semibold">{data.offer.headline}:</span> {data.offer.copy}</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${data.phone.replace(/[^+\d]/g,'')}`} className="inline-flex items-center gap-2 hover:underline"><Phone className="h-4 w-4" /> {data.phone}</a>
            <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> {data.email}</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline src={data.heroVideo} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-emerald-900/30" />
        <div className="relative container pt-24 pb-32">
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {data.tag}
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.1 }} className="mt-5 text-lg md:text-2xl text-emerald-50/90 max-w-3xl">
            {data.subtag}
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="mt-8 flex flex-wrap gap-4">
            <a href="#quote" className="text-base px-6 py-3 rounded-2xl shadow-lg bg-emerald-600 hover:bg-emerald-700 text-white">Get Your Free Quote</a>
            <a href="#portfolio" className="text-base px-6 py-3 rounded-2xl bg-white/20 backdrop-blur border border-white/40 text-white hover:bg-white/30 inline-flex items-center gap-2">
              <Play className="h-4 w-4" /> View Our Portfolio
            </a>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.3 }} className="mt-10 flex flex-wrap items-center gap-4 text-white/90">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full"><Star className="h-4 w-4" /><span>500+ 5‑Star Projects</span></div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full"><CheckCircle2 className="h-4 w-4" /><span>Licensed & Insured</span></div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full"><Leaf className="h-4 w-4" /><span>Eco‑Friendly Practices</span></div>
          </motion.div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="container py-20">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold">
          Our Signature Services
        </motion.h2>
        <p className="mt-3 text-emerald-900/80 max-w-2xl">We blend art, architecture, and ecology to craft functional outdoor spaces you’ll love to live in.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={<Leaf />} title="Luxury Garden Design" desc="Custom-designed gardens tailored to your lifestyle and aesthetics." />
          <ServiceCard icon={<Droplets />} title="Eco-Friendly Lawns" desc="Sustainable, lush green lawns that save water and stay vibrant." />
          <ServiceCard icon={<Flame />} title="Outdoor Living Spaces" desc="Fire pits, patios, and pergolas designed for unforgettable evenings." />
          <ServiceCard icon={<Wrench />} title="Year-Round Maintenance" desc="Professional care that keeps your outdoor paradise flawless." />
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-emerald-50/60 py-20">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold">See the Magic We Create</motion.h2>
          <p className="mt-3 text-emerald-900/80 max-w-2xl">Browse recent transformations. Every project is engineered to be low‑maintenance, water‑wise, and endlessly beautiful.</p>
          <Masonry images={data.gallery} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-20">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold">What Our Clients Say</motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Sophia M.', text: 'My backyard looks like a boutique resort. I never imagined such a transformation!', rating: 5 },
            { name: 'Daniel K.', text: 'Professional, creative, and meticulous. Every detail is perfect.', rating: 5 },
            { name: 'Liam R.', text: 'From design to maintenance—effortless and stunning.', rating: 5 }
          ].map((t, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="rounded-2xl bg-white shadow-sm border p-6">
                <div className="flex items-center gap-1 text-emerald-600">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-5 w-5" fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-emerald-900/90">“{t.text}”</p>
                <p className="mt-4 font-semibold">— {t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offer / Lead Capture */}
      <section id="quote" className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-emerald-900/80" />
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold">Claim Your Limited-Time Offer</h2>
              <p className="mt-3 text-emerald-50/90 max-w-2xl">Free on-site consultation + 3D concept preview. Secure your spot this month and save 20% on design fees.</p>
              <ul className="mt-6 space-y-2 text-emerald-50/90">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5" /> Water-wise, low‑maintenance designs</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5" /> Licensed, insured, and satisfaction‑guaranteed</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5" /> Transparent pricing & timeline</li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Footer */}
      <footer className="border-t bg-white">
        <div className="container py-12 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">{site.name}</h3>
            <p className="mt-2 text-emerald-900/80">Your dream yard is just one click away.</p>
          </div>
          <div className="space-y-2">
            <a href={`tel:${data.phone.replace(/[^+\d]/g,'')}`} className="flex items-center gap-2 hover:underline"><Phone className="h-4 w-4" /> {data.phone}</a>
            <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> {data.email}</a>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {data.address}</p>
          </div>
          <div className="flex md:justify-end items-start">
            <a href="#quote" className="rounded-2xl px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white">Get Your Free Quote</a>
          </div>
        </div>
        <div className="text-center text-xs text-emerald-900/60 py-6">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
      </footer>
    </div>
  )
}
