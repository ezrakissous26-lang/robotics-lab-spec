import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    res.status(201).json({message: 'router post'})
})

router.get('/:usersId', (req, res) => {
    res.status(201).json({message: 'router get'})
})

export default router