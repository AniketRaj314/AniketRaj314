import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type BraindumpMeta = {
  title: string
  date: string
  summary: string
  slug: string
}

export async function getBraindumpSlugs(): Promise<string[]> {
  const dir = path.join(process.cwd(), 'content/braindump')
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx')).map(f => f.replace(/\.mdx$/, ''))
}

export async function getBraindumpBySlug(slug: string): Promise<{ meta: BraindumpMeta, content: MDXRemoteSerializeResult }> {
  const filePath = path.join(process.cwd(), 'content/braindump', `${slug}.mdx`)
  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)

  const mdxSource = await serialize(content)
  return {
    meta: {
      title: data.title,
      date: data.date,
      summary: data.summary,
      slug,
    },
    content: mdxSource,
  }
}

export async function getAllBraindumps(): Promise<{ meta: BraindumpMeta }[]> {
  const slugs = await getBraindumpSlugs()
  const all = await Promise.all(slugs.map((slug) => getBraindumpBySlug(slug)))
  return all.map(({ meta }) => ({ meta }))
}
