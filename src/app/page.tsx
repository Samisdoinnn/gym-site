import Hero from '../components/Hero'

export default function Home() {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <Hero />
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Featured Classes</h2>
        <p className="mt-2 text-gray-600">Add dynamic class cards here from Firestore.</p>
      </div>
    </section>
  )
}
