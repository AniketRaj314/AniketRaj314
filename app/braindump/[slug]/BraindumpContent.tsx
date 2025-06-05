"use client"
import { MDXRemote } from 'next-mdx-remote'

export default function BraindumpContent({ content }: { content: any }) {
  return <MDXRemote {...content} />
} 