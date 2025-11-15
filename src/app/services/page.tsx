import ServiceCard from '../../components/ServiceCard'
import { services } from '../../lib/mockData'
import Link from 'next/link'

export const metadata = {
  title: 'Services - Alexandra Morgan',
  description: 'Professional modeling services including editorial, commercial, runway, and brand partnerships.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional modeling services tailored to bring your creative vision to life. From
            editorial shoots to commercial campaigns, I offer versatile and high-quality work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Work With Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Professional Experience</h3>
              <p className="text-gray-700">
                With over 8 years in the industry and 150+ fashion shows, I bring extensive
                experience and professionalism to every project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Versatility</h3>
              <p className="text-gray-700">
                From high-fashion editorial to commercial campaigns, I adapt to any style or
                concept with ease and creativity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-700">
                Always punctual, prepared, and professional. I understand the importance of
                deadlines and deliver consistently excellent results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Spirit</h3>
              <p className="text-gray-700">
                I work closely with photographers, stylists, and creative directors to ensure the
                final product exceeds expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Booking Process */}
        <div className="bg-black text-white rounded-2xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Booking Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Initial Contact</h3>
              <p className="text-gray-300 text-sm">
                Reach out via the contact form with your project details
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-gray-300 text-sm">
                We'll discuss your vision, requirements, and timeline
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Agreement</h3>
              <p className="text-gray-300 text-sm">
                Review and sign the contract with project details
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Production</h3>
              <p className="text-gray-300 text-sm">
                Bring your vision to life with professional execution
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can work together on your next project
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
