import ClassCard from '../../components/ClassCard'

async function fetchClasses() {
  const res = await fetch('/api/classes')
  return res.json()
}

export default async function ClassesPage() {
  const data = await fetchClasses()
  const classes = data?.classes || []

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6">Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {classes.map((c: any) => (
          <ClassCard key={c.id} id={c.id} title={c.title} description={c.description} price={c.price} />
        ))}
      </div>
    </section>
  )
}
