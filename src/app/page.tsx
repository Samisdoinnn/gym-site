import Hero from '../components/Hero'
import PortfolioGrid from '../components/PortfolioGrid'
import TestimonialCard from '../components/TestimonialCard'
import { portfolioItems, testimonials } from '../lib/mockData'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const featuredPortfolio = portfolioItems.filter((item) => item.featured).slice(0, 6)
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3)

  return (
    <>
      <Hero />

      {/* Featured Work Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of my recent projects with top fashion brands and publications
            </p>
          </div>
          <PortfolioGrid items={featuredPortfolio} />
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80"
                alt="Alexandra Morgan"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 8 years of experience in the fashion industry, I've had the privilege of
                working with some of the world's most prestigious brands and publications. My
                journey from a small-town dreamer to walking the runways of Paris, Milan, and New
                York has been nothing short of extraordinary.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I specialize in editorial, commercial, and runway modeling, bringing versatility,
                professionalism, and passion to every project. Whether it's a high-fashion
                editorial or a commercial campaign, I'm committed to bringing your vision to life.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What industry professionals say about working with me
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your vision to life? Get in touch to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Book a Session
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
