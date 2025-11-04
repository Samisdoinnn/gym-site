type Props = {
  id: string
  title: string
  description?: string
  price?: string
}

export default function ClassCard({ title, description, price }: Props) {
  return (
    <div className="border rounded-md p-4 shadow-sm">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      {price && <div className="mt-4 font-medium">{price}</div>}
      <div className="mt-4">
        <button className="px-3 py-1 bg-indigo-600 text-white rounded">Book</button>
      </div>
    </div>
  )
}
