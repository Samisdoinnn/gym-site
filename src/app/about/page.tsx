import Image from 'next/image'
import { experience, measurements, skills, stats } from '../../lib/mockData'

export const metadata = {
  title: 'About - Alexandra Morgan',
  description: 'Learn about my journey in the fashion industry, experience, and what drives my passion for modeling.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80"
          alt="Alexandra Morgan"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">About Me</h1>
          <p className="text-xl md:text-2xl">My Journey in Fashion</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">My Story</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              My journey into the world of fashion modeling began at age 16 when I was discovered
              by a talent scout at a local mall. What started as a chance encounter transformed
              into a lifelong passion and a career that has taken me around the world.
            </p>
            <p>
              Growing up in a small town, I never imagined I would one day walk the runways of
              Paris Fashion Week or grace the covers of international fashion magazines. But with
              determination, hard work, and the support of incredible mentors, I've been able to
              turn my dreams into reality.
            </p>
            <p>
              Over the past 8 years, I've had the privilege of working with some of the most
              prestigious brands in the fashion industry, including Chanel, Dior, Gucci, and many
              others. Each project has been a learning experience, helping me grow not just as a
              model, but as an artist and professional.
            </p>
            <p>
              What I love most about modeling is the collaborative nature of the work. Every shoot
              brings together talented photographers, stylists, makeup artists, and creative
              directors, all working together to create something beautiful. Being part of that
              creative process is incredibly fulfilling.
            </p>
            <p>
              Beyond the glamour and excitement, I'm passionate about using my platform to promote
              positive change in the industry. I advocate for sustainable fashion, body positivity,
              and mental health awareness. The fashion industry is evolving, and I'm proud to be
              part of that positive transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Measurements Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-sm text-gray-600 mb-2">Height</div>
              <div className="font-semibold">{measurements.height}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-sm text-gray-600 mb-2">Bust</div>
              <div className="font-semibold">{measurements.bust}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-sm text-gray-600 mb-2">Waist</div>
              <div className="font-semibold">{measurements.waist}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-sm text-gray-600 mb-2">Hips</div>
              <div className="font-semibold">{measurements.hips}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-sm text-gray-600 mb-2">Dress Size</div>
              <div className="font-semibold">{measurements.dress}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-sm text-gray-600 mb-2">Shoe Size</div>
              <div className="font-semibold">{measurements.shoes}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-sm text-gray-600 mb-2">Hair</div>
              <div className="font-semibold">{measurements.hair}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-sm text-gray-600 mb-2">Eyes</div>
              <div className="font-semibold">{measurements.eyes}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 px-6 py-4 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Career Timeline</h2>
          <div className="space-y-12">
            {experience.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold">{item.year}</div>
                </div>
                <div className="flex-grow pb-12 border-l-2 border-gray-300 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
