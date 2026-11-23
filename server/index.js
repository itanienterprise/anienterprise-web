import express from 'express'
import cors from 'cors'
import compression from 'compression'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { connectDB } from './db.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.join(__dirname, '..', 'dist')

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares - Enable compression for all API payloads over the wire
app.use(compression())
app.use(cors())
app.use(express.json())

// Connect to MongoDB
connectDB()

// Base / Health Check Route
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  res.json({
    status: 'ok',
    message: 'Backend server is running',
    database: {
      status: dbStatus,
      readyState: mongoose.connection.readyState,
    },
    timestamp: new Date().toISOString(),
  })
})

// Serve built frontend assets in production (when dist exists)
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.join(distPath, 'index.html'))
    }
    next()
  })
}

// Start server on 0.0.0.0 so network mode works for backend as well
app.listen(PORT, '0.0.0.0', () => {
  console.log(` Server running on http://0.0.0.0:${PORT} (Local: http://localhost:${PORT})`)
})
