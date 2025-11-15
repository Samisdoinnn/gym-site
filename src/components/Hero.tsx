'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&q=80"
          alt="Hero background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            ALEXANDRA
            <span className="block text-5xl md:text-7xl mt-2 text-gray-600">MORGAN</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            International Fashion Model & Brand Ambassador
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
            Bringing elegance, versatility, and professionalism to every project. 
            Featured in Vogue, Elle, and Harper's Bazaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105"
            >
              Book a Session
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
            <div className="text-gray-600">Fashion Shows</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
            <div className="text-gray-600">Magazine Covers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
            <div className="text-gray-600">Brand Campaigns</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-black rounded-full" />
        </div>
      </div>
    </section>
  )
}
