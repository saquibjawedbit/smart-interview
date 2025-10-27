import React, { useEffect, useState } from 'react'
import Link from 'next/link'

type Resume = { id: number; name: string; title?: string; createdAt: string }

export default function Home() {
  const [health, setHealth] = useState<any>(null)
  const [resumes, setResumes] = useState<Resume[]>([])

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((d) => setHealth(d))
      .catch(() => setHealth({ status: 'unreachable' }))

    fetch('/api/resumes')
      .then((r) => r.json())
      .then((d) => setResumes(d))
      .catch(() => setResumes([]))
  }, [])

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Mocklyy — Starter</h1>
          <nav className="space-x-4">
            <Link href="/landing" className="text-slate-700 hover:text-slate-900">Landing</Link>
            <Link href="/" className="text-slate-500">App</Link>
          </nav>
        </header>
      <section>
        <h2>Backend health</h2>
        <pre>{JSON.stringify(health, null, 2)}</pre>
      </section>

      <section>
        <h2>Resumes (in-memory)</h2>
        {resumes.length === 0 ? (
          <p>No resumes yet. POST to <code>/api/resumes</code> to add one.</p>
        ) : (
          <ul>
            {resumes.map((r) => (
              <li key={r.id}>{r.name} — {r.title || '—'}</li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Quick demo: create a resume</h2>
        <CreateResume onCreated={(newR) => setResumes((s) => [newR, ...s])} />
      </section>
      </div>
    </main>
  )
}

function CreateResume({ onCreated }: { onCreated?: (r: Resume) => void }) {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/resumes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, title })
      })
      const data = await res.json()
      onCreated && onCreated(data)
      setName('')
      setTitle('')
    } catch (err) {
      console.error(err)
      alert('Failed to create')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} style={{ marginTop: 12 }}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ marginLeft: 8 }} />
      <button type="submit" disabled={loading} style={{ marginLeft: 8 }}>{loading ? 'Saving...' : 'Create'}</button>
    </form>
  )
}
