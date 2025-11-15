import BlogCard from '../../components/BlogCard'
import { blogPosts } from '../../lib/mockData'

export const metadata = {
  title: 'Blog - Alexandra Morgan',
  description: 'Insights, stories, and advice from my journey in the fashion modeling industry.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, stories, and advice from my journey in the fashion industry. Learn about
            modeling, wellness, sustainability, and life behind the scenes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
