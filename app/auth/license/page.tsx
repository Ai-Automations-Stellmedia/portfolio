import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const metadata = { title: 'License' }

export default async function LicensePage() {
  const [license, notice] = await Promise.all([
    readFile(path.join(process.cwd(), 'LICENSE.md'), 'utf8'),
    readFile(path.join(process.cwd(), 'NOTICE'), 'utf8'),
  ])

  return (
    <article className="mx-auto max-w-3xl space-y-6 p-6">
      <h1 className="text-xl font-semibold">License and notices</h1>
      <pre className="whitespace-pre-wrap break-words text-sm">{notice}</pre>
      <pre className="whitespace-pre-wrap break-words text-sm">{license}</pre>
    </article>
  )
}
