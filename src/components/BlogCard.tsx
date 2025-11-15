import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  slug: string
  excerpt: string
  cover_image: string
  author: string
  tags: string[]
  read_time: number
  created_at?: string
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  cover_image,
  author,
  tags,
  read_time,
  created_at,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={cover_image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{author}</span>
            <span>{read_time} min read</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
