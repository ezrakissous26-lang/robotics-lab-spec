import express from 'express'
import dotenv from 'dotenv/config'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.listen(PORT, (e) => {
    if (e) {console.error(e.message)}
    console.log(`Server running on http://localhost:${PORT}`)
})