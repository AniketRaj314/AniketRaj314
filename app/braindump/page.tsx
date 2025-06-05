import Link from 'next/link'
import { getAllBraindumps } from '../../lib/mdx'

export default async function BraindumpList() {
  const posts = await getAllBraindumps()

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-white">
      <h1 className="text-4xl font-bold mb-6">🧠 Braindump</h1>
      <ul className="space-y-6">
        {posts.map(({ meta }) => (
          <li key={meta.slug}>
            <Link href={`/braindump/${meta.slug}`} className="block">
              <h2 className="text-xl font-semibold hover:underline">{meta.title}</h2>
              <p className="text-sm text-gray-400">{meta.date}</p>
              <p className="text-gray-300">{meta.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
