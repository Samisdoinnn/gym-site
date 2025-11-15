interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  price: string
  popular?: boolean
}

export default function ServiceCard({
  title,
  description,
  features,
  price,
  popular = false,
}: ServiceCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 ${
        popular
          ? 'border-2 border-black shadow-2xl scale-105'
          : 'border border-gray-200 shadow-lg'
      } hover:shadow-xl transition-all`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-6">
        <div className="text-3xl font-bold mb-2">{price}</div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-full font-semibold transition-colors ${
          popular
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-gray-100 text-black hover:bg-gray-200'
        }`}
      >
        Get Started
      </button>
    </div>
  )
}
