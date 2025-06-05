import { getBraindumpBySlug, getBraindumpSlugs } from '../../../lib/mdx'
import BraindumpContent from './BraindumpContent'

export async function generateStaticParams() {
  const slugs = await getBraindumpSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BraindumpPost({ params }: { params: { slug: string } }) {
  const { meta, content } = await getBraindumpBySlug(params.slug)

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold">{meta.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{meta.date}</p>
      <article className="prose prose-invert prose-sm md:prose-base">
        <BraindumpContent content={content} />
      </article>
    </div>
  )
}
