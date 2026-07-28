import express from 'express'

const router = express.Router()

router.post('/:sessionId/register', (req, res) => {
    res.status(201).json({message: 'router post'})
})

router.get('/:sessionId', (req, res) => {
    res.status(200).json({message: 'router get'})
})

export default router