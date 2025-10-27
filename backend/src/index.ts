import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

type Resume = { id: number; name: string; title?: string; payload?: any; createdAt: string }

const resumes: Resume[] = []
let nextId = 1

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', time: new Date().toISOString() })
})

app.get('/resumes', (_req: Request, res: Response) => {
  res.json(resumes.slice().reverse())
})

app.post('/resumes', (req: Request, res: Response) => {
  const { name, title, payload } = req.body || {}
  if (!name) return res.status(400).json({ error: 'name is required' })
  const item: Resume = { id: nextId++, name, title: title || '', payload: payload || {}, createdAt: new Date().toISOString() }
  resumes.push(item)
  res.status(201).json(item)
})

app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'not found' })
})

app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`))
