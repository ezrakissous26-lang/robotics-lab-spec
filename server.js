import express from 'express'
import dotenv from 'dotenv/config'
import { client } from './db/students-connect.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

try {
    await client.connect()
    console.log('Connected to MongoDb')

    app.listen(PORT, (e) => {
        if (e) {console.error(e.message)}
        console.log(`Server running on http://localhost:${PORT}`)
})

} catch (e) {
    console.error('Failed to connect to MongoDb:', e.message)
}