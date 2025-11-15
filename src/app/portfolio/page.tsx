import PortfolioGrid from '../../components/PortfolioGrid'
import { portfolioItems } from '../../lib/mockData'

export const metadata = {
  title: 'Portfolio - Alexandra Morgan',
  description: 'View my complete portfolio of fashion modeling work including editorial, commercial, runway, and fashion campaigns.',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of my work spanning editorial shoots, commercial campaigns,
            runway shows, and fashion collaborations with leading brands and publications.
          </p>
        </div>

        <PortfolioGrid items={portfolioItems} />
      </div>
    </div>
  )
}
